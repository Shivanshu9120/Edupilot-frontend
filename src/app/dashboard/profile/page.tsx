'use client';

import { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client/react';
import Image from 'next/image';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { DashboardSidebar } from '@/components/layout/dashboard-sidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/lib/auth-context';
import { GET_ACCOUNT_BY_USER } from '@/lib/graphql/queries';
import { UPDATE_ACCOUNT, UPDATE_USER } from '@/lib/graphql/mutations';

interface AccountData {
  documentId: string;
  Profile_photo?: {
    documentId: string;
    url: string;
  } | null;
  Firstname: string;
  Lastname: string;
  DOB?: string;
  Bio?: string;
  Gender?: string;
  Address?: string;
  Grade?: string;
  Domain?: string;
  Stream?: string;
  Branch?: string;
  Mobile_No?: number;
  users_permissions_user?: {
    documentId: string;
    username: string;
    email: string;
  };
}

export default function ProfilePage() {
  const { user, login: authLogin } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [accountData, setAccountData] = useState({
    Firstname: '',
    Lastname: '',
    DOB: '',
    Bio: '',
    Gender: '',
    Address: '',
    Grade: '',
    Domain: '',
    Stream: '',
    Branch: '',
    Mobile_No: '',
  });
  const [userData, setUserData] = useState({
    username: '',
    email: '',
  });

  const { data, loading, error, refetch } = useQuery<{ accounts: AccountData[] }>(GET_ACCOUNT_BY_USER, {
    variables: { documentId: user?.documentId },
    skip: !user?.documentId,
  });

  const [updateAccount, { loading: isUpdatingAccount }] = useMutation(UPDATE_ACCOUNT);
  const [updateUser, { loading: isUpdatingUser }] = useMutation(UPDATE_USER);

  useEffect(() => {
    if (data?.accounts && data.accounts.length > 0) {
      const account = data.accounts[0];
      setAccountData({
        Firstname: account.Firstname || '',
        Lastname: account.Lastname || '',
        DOB: account.DOB || '',
        Bio: account.Bio || '',
        Gender: account.Gender || '',
        Address: account.Address || '',
        Grade: account.Grade || '',
        Domain: account.Domain || '',
        Stream: account.Stream || '',
        Branch: account.Branch || '',
        Mobile_No: account.Mobile_No?.toString() || '',
      });
      setUserData({
        username: account.users_permissions_user?.username || user?.username || '',
        email: account.users_permissions_user?.email || user?.email || '',
      });
    } else if (user) {
      setUserData({
        username: user.username || '',
        email: user.email || '',
      });
    }
  }, [data, user]);

  const handleAccountInputChange = (field: keyof typeof accountData, value: string) => {
    setAccountData(prev => ({ ...prev, [field]: value }));
  };

  const handleUserInputChange = (field: keyof typeof userData, value: string) => {
    setUserData(prev => ({ ...prev, [field]: value }));
  };

  // Upload image to Strapi
  const uploadImage = async (file: File): Promise<string | null> => {
    try {
      const token = localStorage.getItem('edupilot_jwt');
      const formData = new FormData();
      formData.append('files', file);

      const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/upload`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload image');
      }

      const result = await response.json();
      // Strapi returns an array of uploaded files, each with an id field
      // For GraphQL mutations, we need the numeric id (not documentId)
      return result[0]?.id?.toString() || null;
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select a valid image file');
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }

      setProfilePhoto(file);

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    if (!data?.accounts?.[0] || !user) return;

    try {
      const account = data.accounts[0];
      
      // Upload profile photo if a new one was selected
      let profilePhotoId: string | null = null;
      if (profilePhoto) {
        profilePhotoId = await uploadImage(profilePhoto);
        if (!profilePhotoId) {
          alert('Failed to upload profile photo. Please try again.');
          return;
        }
      }
      
      // Prepare account update data
      const accountUpdateData: {
        Firstname: string;
        Lastname: string;
        DOB: string | null;
        Bio: string | null;
        Gender: string | null;
        Address: string | null;
        Grade: string | null;
        Domain: string | null;
        Stream: string | null;
        Branch: string | null;
        Mobile_No: number | null;
        Profile_photo?: number;
      } = {
        Firstname: accountData.Firstname,
        Lastname: accountData.Lastname,
        DOB: accountData.DOB || null,
        Bio: accountData.Bio || null,
        Gender: accountData.Gender || null,
        Address: accountData.Address || null,
        Grade: accountData.Grade || null,
        Domain: accountData.Domain || null,
        Stream: accountData.Stream || null,
        Branch: accountData.Branch || null,
        Mobile_No: accountData.Mobile_No ? parseInt(accountData.Mobile_No.replace(/\D/g, '')) : null,
      };

      // Add profile photo if uploaded
      if (profilePhotoId) {
        accountUpdateData.Profile_photo = parseInt(profilePhotoId);
      }

      // Update account
      await updateAccount({
        variables: {
          documentId: account.documentId,
          data: accountUpdateData,
        },
      });

      // Get user's numeric ID using REST API
      const token = localStorage.getItem('edupilot_jwt');
      const restResponse = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/users?filters[documentId][$eq]=${user.documentId}`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (restResponse.ok) {
        const restData = await restResponse.json();
        const userId = restData?.data?.[0]?.id || restData?.[0]?.id;

        if (userId) {
          // Update user
          await updateUser({
            variables: {
              id: userId,
              data: {
                username: userData.username,
                email: userData.email,
              },
            },
          });

          // Update auth context
          const updatedUser = {
            ...user,
            username: userData.username,
            email: userData.email,
          };
          if (token) {
            authLogin(token, updatedUser);
          }
        }
      }

      // Refetch account data
      await refetch();
      
      // Clear photo state after successful save
      setProfilePhoto(null);
      setPreviewImage(null);
      
      setIsEditing(false);
    } catch (error: unknown) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile. Please try again.');
    }
  };

  const stats = [
    { label: 'Courses Completed', value: 0, icon: '📚' },
    { label: 'Study Hours', value: 0, icon: '⏱️' },
    { label: 'Assignments Submitted', value: 0, icon: '📝' },
    { label: 'Achievements Earned', value: 0, icon: '🏆' }
  ];

  const getInitials = () => {
    const firstName = accountData.Firstname || '';
    const lastName = accountData.Lastname || '';
    if (firstName && lastName) {
      return `${firstName[0]}${lastName[0]}`.toUpperCase();
    }
    return userData.username?.charAt(0).toUpperCase() || user?.username?.charAt(0).toUpperCase() || 'U';
  };

  const getFullName = () => {
    const firstName = accountData.Firstname || '';
    const lastName = accountData.Lastname || '';
    if (firstName || lastName) {
      return `${firstName} ${lastName}`.trim();
    }
    return userData.username || user?.username || 'User';
  };

  const getProfilePhotoUrl = () => {
    // Show preview if editing and new photo selected
    if (previewImage) {
      return previewImage;
    }
    // Otherwise show existing photo
    if (data?.accounts?.[0]?.Profile_photo?.url) {
      const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || '';
      return `${baseUrl}${data.accounts[0].Profile_photo.url}`;
    }
    return null;
  };

  if (loading) {
    return (
      <DashboardLayout sidebar={<DashboardSidebar />}>
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading profile...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  if (error) {
    return (
      <DashboardLayout sidebar={<DashboardSidebar />}>
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <p className="text-error mb-4">Error loading profile data</p>
            <p className="text-muted-foreground text-sm">{error.message}</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout
      sidebar={<DashboardSidebar />}
    >
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto">
          {/* Page Header */}
          <div className="p-6 bg-background-tertiary border-b border-border">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Profile</h1>
                <p className="text-muted-foreground">Manage your personal information and preferences</p>
              </div>
              <div className="flex items-center gap-4">
                {isEditing ? (
                  <>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setIsEditing(false);
                        setProfilePhoto(null);
                        setPreviewImage(null);
                      }}
                    >
                      Cancel
                    </Button>
                    <Button 
                      onClick={handleSave} 
                      disabled={isUpdatingAccount || isUpdatingUser}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      {isUpdatingAccount || isUpdatingUser ? 'Saving...' : 'Save Changes'}
                    </Button>
                  </>
                ) : (
                  <Button onClick={() => setIsEditing(true)} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Edit Profile
                  </Button>
                )}
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Profile Overview */}
              <div className="lg:col-span-1">
                <Card className="border-border bg-card shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] cursor-pointer group">
                  <CardHeader className="text-center">
                    <div className="relative inline-block">
                      {getProfilePhotoUrl() ? (
                        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Image
                            src={getProfilePhotoUrl()!}
                            alt={getFullName()}
                            width={96}
                            height={96}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-3xl font-bold text-white">{getInitials()}</span>
                        </div>
                      )}
                      {isEditing && (
                        <label className="absolute bottom-0 right-0 bg-primary text-primary-foreground rounded-full p-2 cursor-pointer hover:bg-primary/90 transition-colors shadow-lg">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                          />
                        </label>
                      )}
                    </div>
                    <h2 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
                      {getFullName()}
                    </h2>
                    <p className="text-muted-foreground">{userData.email || user?.email || ''}</p>
                    <div className="mt-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        {user?.role?.name || 'Active Student'}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {stats.map((stat, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="text-lg mr-2">{stat.icon}</span>
                            <span className="text-sm text-muted-foreground">{stat.label}</span>
                          </div>
                          <span className="font-semibold text-card-foreground">{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Profile Details */}
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  {/* Personal Information */}
                  <Card className="border-border bg-card shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] cursor-pointer group">
                    <CardHeader>
                      <h3 className="text-lg font-semibold text-card-foreground group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                        Personal Information
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <label className="text-sm font-medium text-foreground">First Name</label>
                          {isEditing ? (
                            <Input
                              value={accountData.Firstname}
                              onChange={(e) => handleAccountInputChange('Firstname', e.target.value)}
                              className="mt-1"
                            />
                          ) : (
                            <p className="text-card-foreground mt-1">{accountData.Firstname || 'Not set'}</p>
                          )}
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground">Last Name</label>
                          {isEditing ? (
                            <Input
                              value={accountData.Lastname}
                              onChange={(e) => handleAccountInputChange('Lastname', e.target.value)}
                              className="mt-1"
                            />
                          ) : (
                            <p className="text-card-foreground mt-1">{accountData.Lastname || 'Not set'}</p>
                          )}
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground">Email</label>
                          {isEditing ? (
                            <Input
                              value={userData.email}
                              onChange={(e) => handleUserInputChange('email', e.target.value)}
                              className="mt-1"
                            />
                          ) : (
                            <p className="text-card-foreground mt-1">{userData.email || 'Not set'}</p>
                          )}
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground">Username</label>
                          {isEditing ? (
                            <Input
                              value={userData.username}
                              onChange={(e) => handleUserInputChange('username', e.target.value)}
                              className="mt-1"
                            />
                          ) : (
                            <p className="text-card-foreground mt-1">{userData.username || 'Not set'}</p>
                          )}
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground">Phone</label>
                          {isEditing ? (
                            <Input
                              value={accountData.Mobile_No}
                              onChange={(e) => handleAccountInputChange('Mobile_No', e.target.value)}
                              className="mt-1"
                              placeholder="Enter phone number"
                            />
                          ) : (
                            <p className="text-card-foreground mt-1">
                              {accountData.Mobile_No ? `+${accountData.Mobile_No}` : 'Not set'}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground">Location</label>
                          {isEditing ? (
                            <Input
                              value={accountData.Address}
                              onChange={(e) => handleAccountInputChange('Address', e.target.value)}
                              className="mt-1"
                            />
                          ) : (
                            <p className="text-card-foreground mt-1">{accountData.Address || 'Not set'}</p>
                          )}
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground">Birthday</label>
                          {isEditing ? (
                            <Input
                              type="date"
                              value={accountData.DOB}
                              onChange={(e) => handleAccountInputChange('DOB', e.target.value)}
                              className="mt-1"
                            />
                          ) : (
                            <p className="text-card-foreground mt-1">
                              {accountData.DOB ? new Date(accountData.DOB).toLocaleDateString() : 'Not set'}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground">Gender</label>
                          {isEditing ? (
                            <select
                              value={accountData.Gender}
                              onChange={(e) => handleAccountInputChange('Gender', e.target.value)}
                              className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent mt-1"
                            >
                              <option value="">Select Gender</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="Other">Other</option>
                              <option value="Prefer not to say">Prefer not to say</option>
                            </select>
                          ) : (
                            <p className="text-card-foreground mt-1">{accountData.Gender || 'Not set'}</p>
                          )}
                        </div>
                      </div>
                      <div className="mt-4">
                        <label className="text-sm font-medium text-foreground">Bio</label>
                        {isEditing ? (
                          <textarea
                            value={accountData.Bio}
                            onChange={(e) => handleAccountInputChange('Bio', e.target.value)}
                            className="w-full mt-1 p-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-green-500"
                            rows={3}
                          />
                        ) : (
                          <p className="text-card-foreground mt-1">{accountData.Bio || 'No bio available'}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Education & Interests */}
                  <Card className="border-border bg-card shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] cursor-pointer group">
                    <CardHeader>
                      <h3 className="text-lg font-semibold text-card-foreground group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                        Education & Interests
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium text-foreground">Grade</label>
                          {isEditing ? (
                            <Input
                              value={accountData.Grade}
                              onChange={(e) => handleAccountInputChange('Grade', e.target.value)}
                              className="mt-1"
                            />
                          ) : (
                            <p className="text-card-foreground mt-1">{accountData.Grade || 'Not set'}</p>
                          )}
                        </div>
                        {accountData.Domain && (
                          <div>
                            <label className="text-sm font-medium text-foreground">Domain</label>
                            {isEditing ? (
                              <Input
                                value={accountData.Domain}
                                onChange={(e) => handleAccountInputChange('Domain', e.target.value)}
                                className="mt-1"
                              />
                            ) : (
                              <p className="text-card-foreground mt-1">{accountData.Domain}</p>
                            )}
                          </div>
                        )}
                        {accountData.Stream && (
                          <div>
                            <label className="text-sm font-medium text-foreground">Stream</label>
                            {isEditing ? (
                              <Input
                                value={accountData.Stream}
                                onChange={(e) => handleAccountInputChange('Stream', e.target.value)}
                                className="mt-1"
                              />
                            ) : (
                              <p className="text-card-foreground mt-1">{accountData.Stream}</p>
                            )}
                          </div>
                        )}
                        {accountData.Branch && (
                          <div>
                            <label className="text-sm font-medium text-foreground">Branch</label>
                            {isEditing ? (
                              <Input
                                value={accountData.Branch === 'Computer_Science' ? 'Computer Science' : accountData.Branch}
                                onChange={(e) => {
                                  const value = e.target.value === 'Computer Science' ? 'Computer_Science' : e.target.value;
                                  handleAccountInputChange('Branch', value);
                                }}
                                className="mt-1"
                              />
                            ) : (
                              <p className="text-card-foreground mt-1">
                                {accountData.Branch === 'Computer_Science' ? 'Computer Science' : accountData.Branch}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Account Settings */}
                  <Card className="border-border bg-card shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] cursor-pointer group">
                    <CardHeader>
                      <h3 className="text-lg font-semibold text-card-foreground group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                        Account Settings
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-card-foreground">Email Notifications</h4>
                            <p className="text-sm text-muted-foreground">Receive updates about courses and assignments</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" defaultChecked className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                          </label>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-card-foreground">Push Notifications</h4>
                            <p className="text-sm text-muted-foreground">Get notified about important updates</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" defaultChecked className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                          </label>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-card-foreground">Public Profile</h4>
                            <p className="text-sm text-muted-foreground">Allow others to see your profile</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                          </label>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
