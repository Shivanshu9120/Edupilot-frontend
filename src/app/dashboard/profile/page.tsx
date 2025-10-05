'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { DashboardSidebar } from '@/components/layout/dashboard-sidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    bio: 'Passionate learner exploring the world of mathematics and science. Always eager to discover new concepts and apply them in real-world scenarios.',
    location: 'San Francisco, CA',
    birthday: '1995-06-15',
    interests: ['Mathematics', 'Physics', 'Data Science', 'Web Development'],
    education: 'Bachelor of Science in Computer Science',
    experience: '2 years',
    languages: ['English', 'Spanish', 'French']
  });

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    // Simulate API call
    console.log('Saving profile:', profileData);
    setIsEditing(false);
  };

  const stats = [
    { label: 'Courses Completed', value: 1, icon: '📚' },
    { label: 'Study Hours', value: 42, icon: '⏱️' },
    { label: 'Assignments Submitted', value: 1, icon: '📝' },
    { label: 'Achievements Earned', value: 2, icon: '🏆' }
  ];

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
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleSave} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Save Changes
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
                    <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl font-bold text-white">JD</span>
                    </div>
                    <h2 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
                      {profileData.name}
                    </h2>
                    <p className="text-muted-foreground">{profileData.email}</p>
                    <div className="mt-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        Active Student
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
                          <label className="text-sm font-medium text-foreground">Full Name</label>
                          {isEditing ? (
                            <Input
                              value={profileData.name}
                              onChange={(e) => handleInputChange('name', e.target.value)}
                              className="mt-1"
                            />
                          ) : (
                            <p className="text-card-foreground mt-1">{profileData.name}</p>
                          )}
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground">Email</label>
                          {isEditing ? (
                            <Input
                              value={profileData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              className="mt-1"
                            />
                          ) : (
                            <p className="text-card-foreground mt-1">{profileData.email}</p>
                          )}
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground">Phone</label>
                          {isEditing ? (
                            <Input
                              value={profileData.phone}
                              onChange={(e) => handleInputChange('phone', e.target.value)}
                              className="mt-1"
                            />
                          ) : (
                            <p className="text-card-foreground mt-1">{profileData.phone}</p>
                          )}
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground">Location</label>
                          {isEditing ? (
                            <Input
                              value={profileData.location}
                              onChange={(e) => handleInputChange('location', e.target.value)}
                              className="mt-1"
                            />
                          ) : (
                            <p className="text-card-foreground mt-1">{profileData.location}</p>
                          )}
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground">Birthday</label>
                          {isEditing ? (
                            <Input
                              type="date"
                              value={profileData.birthday}
                              onChange={(e) => handleInputChange('birthday', e.target.value)}
                              className="mt-1"
                            />
                          ) : (
                            <p className="text-card-foreground mt-1">
                              {new Date(profileData.birthday).toLocaleDateString()}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground">Experience Level</label>
                          <p className="text-card-foreground mt-1">{profileData.experience}</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <label className="text-sm font-medium text-foreground">Bio</label>
                        {isEditing ? (
                          <textarea
                            value={profileData.bio}
                            onChange={(e) => handleInputChange('bio', e.target.value)}
                            className="w-full mt-1 p-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-green-500"
                            rows={3}
                          />
                        ) : (
                          <p className="text-card-foreground mt-1">{profileData.bio}</p>
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
                          <label className="text-sm font-medium text-foreground">Education</label>
                          <p className="text-card-foreground mt-1">{profileData.education}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground">Interests</label>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {profileData.interests.map((interest, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-sm"
                              >
                                {interest}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground">Languages</label>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {profileData.languages.map((language, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm"
                              >
                                {language}
                              </span>
                            ))}
                          </div>
                        </div>
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
