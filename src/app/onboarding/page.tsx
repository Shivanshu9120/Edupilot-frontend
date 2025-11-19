'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation } from '@apollo/client/react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Heading } from '@/components/ui/heading';
import { Input } from '@/components/ui/input';
import { OnboardingData } from '@/lib/types';
import { CREATE_ACCOUNT, UPDATE_USER } from '@/lib/graphql/mutations';
import { useAuth } from '@/lib/auth-context';

interface CreateAccountResponse {
  createAccount: {
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
    createdAt: string;
    updatedAt: string;
  };
}

interface UpdateUserResponse {
  updateUsersPermissionsUser: {
    data: {
      documentId: string;
      username: string;
      email: string;
      is_onboarded: boolean;
    };
  };
}

const GRADES = [
  'Kindergarten',
  'First-Grade',
  'Second-Grade',
  'Third-Grade',
  'Fourth-Grade',
  'Fifth-Grade',
  'Sixth-Grade',
  'Seventh-Grade',
  'Eighth-Grade',
  'Ninth-Grade',
  'Tenth-Grade',
  'Eleventh-Grade',
  'Twelfth-Grade',
  'Graduation',
  'Post-Graduation',
];

const DOMAINS = ['Engineering', 'Arts', 'Commerce'];

const STREAMS = ['Science', 'Commerce', 'Arts'];

// Branch enum values (as stored in Strapi)
const BRANCHES = [
  'Civil',
  'Mechanical',
  'Computer_Science',
  'Electrical',
  'Electronics',
  'ECE',
  'Robotics',
];

// Display labels for branches (user-friendly)
const BRANCH_LABELS: Record<string, string> = {
  'Civil': 'Civil',
  'Mechanical': 'Mechanical',
  'Computer_Science': 'Computer Science',
  'Electrical': 'Electrical',
  'Electronics': 'Electronics',
  'ECE': 'ECE',
  'Robotics': 'Robotics',
};

const GENDERS = ['Male', 'Female', 'Other', 'Prefer not to say'];

const COUNTRY_CODES = [
  { code: '+1', country: 'US/Canada' },
  { code: '+91', country: 'India' },
  { code: '+44', country: 'UK' },
  { code: '+61', country: 'Australia' },
  { code: '+86', country: 'China' },
  { code: '+81', country: 'Japan' },
  { code: '+49', country: 'Germany' },
  { code: '+33', country: 'France' },
  { code: '+39', country: 'Italy' },
  { code: '+34', country: 'Spain' },
];

export default function OnboardingPage() {
  const router = useRouter();
  const { user, isAuthenticated, login: authLogin } = useAuth();
  const [createAccount, { loading: isCreating }] = useMutation<CreateAccountResponse>(CREATE_ACCOUNT);
  const [updateUser, { loading: isUpdating }] = useMutation<UpdateUserResponse>(UPDATE_USER);
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<Partial<Record<keyof OnboardingData, string>>>({});
  const [data, setData] = useState<OnboardingData>({
    profilePhoto: null,
    profilePhotoId: null,
    firstname: '',
    lastname: '',
    dob: '',
    bio: '',
    gender: '',
    address: '',
    grade: '',
    domain: '',
    stream: '',
    branch: '',
    countryCode: '+91',
    mobileNo: '',
  });
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Redirect if not authenticated or not confirmed
  useEffect(() => {
    if (!isAuthenticated || !user) {
      router.push('/login');
    } else if (!user.confirmed) {
      router.push('/login');
    } else if (user.is_onboarded) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, user, router]);

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
        setErrors(prev => ({ ...prev, profilePhoto: 'Please select a valid image file' }));
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, profilePhoto: 'Image size should be less than 5MB' }));
        return;
      }

      setData(prev => ({ ...prev, profilePhoto: file }));
      setErrors(prev => ({ ...prev, profilePhoto: undefined }));

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (field: keyof OnboardingData, value: string) => {
    setData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }

    // Clear conditional fields when parent field changes
    if (field === 'grade') {
      setData(prev => ({ ...prev, domain: '', stream: '', branch: '' }));
    } else if (field === 'domain') {
      setData(prev => ({ ...prev, branch: '' }));
    }
  };

  const validateStep = (stepNumber: number): boolean => {
    const newErrors: Partial<Record<keyof OnboardingData, string>> = {};

    if (stepNumber === 1) {
      if (!data.firstname?.trim()) {
        newErrors.firstname = 'First name is required';
      }
      if (!data.lastname?.trim()) {
        newErrors.lastname = 'Last name is required';
      }
      if (!data.dob) {
        newErrors.dob = 'Date of birth is required';
      } else {
        const dobDate = new Date(data.dob);
        const today = new Date();
        if (dobDate >= today) {
          newErrors.dob = 'Date of birth must be in the past';
        }
      }
      if (!data.gender) {
        newErrors.gender = 'Gender is required';
      }
      if (!data.address?.trim()) {
        newErrors.address = 'Address is required';
      }
    } else if (stepNumber === 2) {
      if (!data.grade) {
        newErrors.grade = 'Grade is required';
      }
      // Domain is required only if grade is "Graduation"
      if (data.grade === 'Graduation' && !data.domain) {
        newErrors.domain = 'Domain is required for Graduation level';
      }
      // Stream is required only if grade is "Twelfth-Grade"
      if (data.grade === 'Twelfth-Grade' && !data.stream) {
        newErrors.stream = 'Stream is required for Twelfth-Grade';
      }
      // Branch is required only if domain is "Engineering"
      if (data.domain === 'Engineering' && !data.branch) {
        newErrors.branch = 'Branch is required for Engineering domain';
      }
    } else if (stepNumber === 3) {
      if (!data.mobileNo?.trim()) {
        newErrors.mobileNo = 'Mobile number is required';
      } else {
        // Validate mobile number (at least 7 digits, max 15 digits - international standard)
        const cleanedMobile = data.mobileNo.replace(/\s+/g, '');
        const mobileRegex = /^\d{7,15}$/;
        if (!mobileRegex.test(cleanedMobile)) {
          newErrors.mobileNo = 'Please enter a valid mobile number (7-15 digits)';
        }
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = async () => {
    if (step < 3) {
      if (validateStep(step)) {
        setStep(step + 1);
      }
    } else {
      // Final step - validate and submit
      if (!validateStep(3)) {
        return;
      }

      if (!user) return;

      try {
        // Upload image if provided
        let profilePhotoId = data.profilePhotoId;
        if (data.profilePhoto && !profilePhotoId) {
          profilePhotoId = await uploadImage(data.profilePhoto);
          if (!profilePhotoId) {
            setErrors({ profilePhoto: 'Failed to upload image. Please try again.' });
            return;
          }
        }

        // Prepare account data
        // Normalize grade value to match Strapi enum
        let gradeValue = data.grade || '';
        if (gradeValue === 'Graduate') {
          gradeValue = 'Graduation';
        } else if (gradeValue === 'Post-Graduate') {
          gradeValue = 'Post-Graduation';
        }

        const accountData: {
          Firstname: string;
          Lastname: string;
          DOB: string;
          Bio: string;
          Gender: string;
          Address: string;
          Grade: string;
          Mobile_No: number;
          users_permissions_user: string;
          Profile_photo?: number;
          Domain?: string;
          Stream?: string;
          Branch?: string;
        } = {
          Firstname: data.firstname || '',
          Lastname: data.lastname || '',
          DOB: data.dob || '',
          Bio: data.bio || '',
          Gender: data.gender || '',
          Address: data.address || '',
          Grade: gradeValue,
          Mobile_No: parseInt(data.mobileNo?.replace(/\s+/g, '') || '0'),
          users_permissions_user: user.documentId,
        };

        // Add profile photo if available (Strapi GraphQL expects the numeric ID for media fields)
        if (profilePhotoId) {
          accountData.Profile_photo = parseInt(profilePhotoId);
        }

        // Add conditional fields only if they have values
        if (data.domain) {
          accountData.Domain = data.domain;
        }
        if (data.stream) {
          accountData.Stream = data.stream;
        }
        if (data.branch) {
          // Ensure branch uses the correct enum value (Computer_Science, not Computer Science)
          const branchValue = data.branch === 'Computer Science' ? 'Computer_Science' : data.branch;
          accountData.Branch = branchValue;
        }

        // Create account record
        const { data: accountDataResult } = await createAccount({
          variables: {
            data: accountData,
          },
        });

        if (accountDataResult?.createAccount) {
          // Get the user's numeric id using REST API (GraphQL doesn't return id when querying by documentId)
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

          if (!restResponse.ok) {
            throw new Error('Failed to get user ID');
          }

          const restData = await restResponse.json();
          // Strapi REST API returns data in { data: [...] } format
          const userId = restData?.data?.[0]?.id || restData?.[0]?.id;

          if (!userId) {
            throw new Error('Failed to get user ID');
          }

          // Update user's is_onboarded field to true using numeric id
          const { data: updateData } = await updateUser({
            variables: {
              id: userId,
              data: {
                is_onboarded: true,
              },
            },
          });

          if (updateData?.updateUsersPermissionsUser?.data) {
            // Update auth context with new user data
            const updatedUser = {
              ...user,
              is_onboarded: true,
            };
            const token = localStorage.getItem('edupilot_jwt');
            if (token) {
              authLogin(token, updatedUser);
            }

            // Redirect to dashboard after successful onboarding
            router.push('/dashboard');
          }
        }
      } catch (error: unknown) {
        console.error('Error completing onboarding:', error);
        const graphQLError = error && typeof error === 'object' && 'graphQLErrors' in error
          ? (error as { graphQLErrors?: Array<{ message?: string }> })
          : null;
        if (graphQLError?.graphQLErrors && graphQLError.graphQLErrors.length > 0) {
          const firstError = graphQLError.graphQLErrors[0];
          alert(`Failed to complete onboarding: ${firstError.message}`);
        } else {
          alert('Failed to complete onboarding. Please try again.');
        }
      }
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Heading level={2} className="mb-4 text-card-foreground">
                Personal Information
              </Heading>
              <p className="text-muted-foreground">
                Let&apos;s start with some basic details about you
              </p>
            </div>

            {/* Profile Photo Upload */}
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                {previewImage ? (
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary">
                    <Image
                      src={previewImage}
                      alt="Profile preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-32 h-32 rounded-full border-4 border-dashed border-border flex items-center justify-center bg-muted">
                    <svg
                      className="w-12 h-12 text-muted-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <div>
                <label
                  htmlFor="profilePhoto"
                  className="cursor-pointer inline-flex items-center px-4 py-2 border border-border rounded-lg bg-background hover:bg-background-secondary transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Upload Photo
                </label>
                <input
                  id="profilePhoto"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                {errors.profilePhoto && (
                  <p className="text-sm text-error mt-2">{errors.profilePhoto}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="First Name *"
                name="firstname"
                type="text"
                value={data.firstname}
                onChange={(e) => handleInputChange('firstname', e.target.value)}
                error={errors.firstname}
                placeholder="Enter your first name"
                required
              />

              <Input
                label="Last Name *"
                name="lastname"
                type="text"
                value={data.lastname}
                onChange={(e) => handleInputChange('lastname', e.target.value)}
                error={errors.lastname}
                placeholder="Enter your last name"
                required
              />
            </div>

            <Input
              label="Date of Birth *"
              name="dob"
              type="date"
              value={data.dob}
              onChange={(e) => handleInputChange('dob', e.target.value)}
              error={errors.dob}
              required
            />

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Gender *
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {GENDERS.map((gender) => (
                  <button
                    key={gender}
                    type="button"
                    onClick={() => handleInputChange('gender', gender)}
                    className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                      data.gender === gender
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border hover:bg-background-secondary text-card-foreground'
                    }`}
                  >
                    {gender}
                  </button>
                ))}
              </div>
              {errors.gender && (
                <p className="text-sm text-error mt-2">{errors.gender}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Bio
              </label>
              <textarea
                name="bio"
                value={data.bio}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                placeholder="Tell us about yourself (optional)"
                rows={4}
                className="flex w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              />
            </div>

            <Input
              label="Address *"
              name="address"
              type="text"
              value={data.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              error={errors.address}
              placeholder="Enter your address"
              required
            />
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Heading level={2} className="mb-4 text-card-foreground">
                Academic Information
              </Heading>
              <p className="text-muted-foreground">
                Help us understand your academic background
              </p>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Grade Level *
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {GRADES.map((grade) => (
                  <button
                    key={grade}
                    type="button"
                    onClick={() => handleInputChange('grade', grade)}
                    className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                      data.grade === grade
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border hover:bg-background-secondary text-card-foreground'
                    }`}
                  >
                    {grade}
                  </button>
                ))}
              </div>
              {errors.grade && (
                <p className="text-sm text-error mt-2">{errors.grade}</p>
              )}
            </div>

            {/* Domain - Only show if grade is "Graduation" */}
            {data.grade === 'Graduation' && (
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Domain *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {DOMAINS.map((domain) => (
                    <button
                      key={domain}
                      type="button"
                      onClick={() => handleInputChange('domain', domain)}
                      className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                        data.domain === domain
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border hover:bg-background-secondary text-card-foreground'
                      }`}
                    >
                      {domain}
                    </button>
                  ))}
                </div>
                {errors.domain && (
                  <p className="text-sm text-error mt-2">{errors.domain}</p>
                )}
              </div>
            )}

            {/* Stream - Only show if grade is "Twelfth-Grade" */}
            {data.grade === 'Twelfth-Grade' && (
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Stream *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {STREAMS.map((stream) => (
                    <button
                      key={stream}
                      type="button"
                      onClick={() => handleInputChange('stream', stream)}
                      className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                        data.stream === stream
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border hover:bg-background-secondary text-card-foreground'
                      }`}
                    >
                      {stream}
                    </button>
                  ))}
                </div>
                {errors.stream && (
                  <p className="text-sm text-error mt-2">{errors.stream}</p>
                )}
              </div>
            )}

            {/* Branch - Only show if domain is "Engineering" */}
            {data.domain === 'Engineering' && (
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Branch *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {BRANCHES.map((branch) => (
                    <button
                      key={branch}
                      type="button"
                      onClick={() => handleInputChange('branch', branch)}
                      className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                        data.branch === branch
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border hover:bg-background-secondary text-card-foreground'
                      }`}
                    >
                      {BRANCH_LABELS[branch] || branch}
                    </button>
                  ))}
                </div>
                {errors.branch && (
                  <p className="text-sm text-error mt-2">{errors.branch}</p>
                )}
              </div>
            )}
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Heading level={2} className="mb-4 text-card-foreground">
                Contact Information
              </Heading>
              <p className="text-muted-foreground">
                We&apos;ll use this to keep in touch with you
              </p>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Mobile Number *
              </label>
              <div className="flex gap-2">
                <select
                  value={data.countryCode}
                  onChange={(e) => handleInputChange('countryCode', e.target.value)}
                  className="flex h-10 rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                >
                  {COUNTRY_CODES.map((item) => (
                    <option key={item.code} value={item.code}>
                      {item.code} ({item.country})
                    </option>
                  ))}
                </select>
                <Input
                  name="mobileNo"
                  type="tel"
                  value={data.mobileNo}
                  onChange={(e) => {
                    // Only allow digits
                    const value = e.target.value.replace(/\D/g, '');
                    handleInputChange('mobileNo', value);
                  }}
                  error={errors.mobileNo}
                  placeholder="Enter mobile number"
                  required
                  className="flex-1"
                />
              </div>
              {errors.mobileNo && (
                <p className="text-sm text-error mt-2">{errors.mobileNo}</p>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background-secondary to-background-tertiary flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Container className="max-w-2xl">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/Logo.png"
            alt="EduPilot Logo"
            width={48}
            height={48}
            className="w-12 h-12"
          />
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-foreground">
              Step {step} of 3
            </span>
            <span className="text-sm text-muted-foreground">
              {Math.round((step / 3) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        <Card className="border-green-500/30 bg-card/20 backdrop-blur-md shadow-lg">
          <CardHeader>{renderStep()}</CardHeader>

          <CardContent>
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={step === 1}
              >
                Back
              </Button>

              <Button
                onClick={handleNext}
                disabled={isCreating || isUpdating}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 dark:from-green-600 dark:to-green-700 dark:hover:from-green-700 dark:hover:to-green-800 text-white"
              >
                {isCreating || isUpdating
                  ? 'Completing Setup...'
                  : step === 3
                  ? 'Complete Setup'
                  : 'Next'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}
