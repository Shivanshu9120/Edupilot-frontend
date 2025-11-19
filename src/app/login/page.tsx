'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMutation } from '@apollo/client/react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Container } from '@/components/ui/container';
import { Heading } from '@/components/ui/heading';
import { Toast } from '@/components/ui/toast';
import { LoginFormData } from '@/lib/types';
import { validateLoginForm } from '@/lib/auth-utils';
import { LOGIN } from '@/lib/graphql/mutations';
import { useAuth } from '@/lib/auth-context';

interface LoginResponse {
  login: {
    jwt: string;
    user: {
      documentId: string;
      username: string;
      email: string;
      confirmed: boolean;
      blocked: boolean;
      role: {
        id: number;
        name: string;
        type: string;
      };
    };
  };
}

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login: authLogin, isAuthenticated, user } = useAuth();
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<Partial<LoginFormData>>({});
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' | 'warning' } | null>(null);
  const [loginMutation, { loading: isLoading }] = useMutation<LoginResponse>(LOGIN);

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated && user) {
      if (user.is_onboarded) {
        router.push('/dashboard');
      } else {
        router.push('/onboarding');
      }
    }
  }, [isAuthenticated, user, router]);

  // Show success message if redirected from signup
  const registered = searchParams.get('registered');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof LoginFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = validateLoginForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    try {
      // Determine if input is email or username
      const identifier = formData.email.includes('@') 
        ? formData.email 
        : formData.email; // Strapi accepts both email and username in the identifier field

      const { data } = await loginMutation({
        variables: {
          input: {
            identifier: identifier,
            password: formData.password,
          },
        },
      });

      if (data?.login) {
        const { jwt, user } = data.login;
        
        // Check if user is blocked
        if (user.blocked) {
          setErrors({ email: 'Your account has been blocked. Please contact support.' });
          return;
        }

        // Check if user is confirmed
        if (!user.confirmed) {
          setToast({
            message: 'Please confirm your email before logging in. Check your inbox for the confirmation link.',
            type: 'warning',
          });
          return;
        }

        // Store auth state (without is_onboarded for now)
        authLogin(jwt, user);

        // Get is_onboarded field using REST API (GraphQL doesn't return it in login response)
        try {
          const restResponse = await fetch(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/users?filters[documentId][$eq]=${user.documentId}`,
            {
              method: 'GET',
              headers: {
                'Authorization': `Bearer ${jwt}`,
                'Content-Type': 'application/json',
              },
            }
          );

          if (restResponse.ok) {
            const restData = await restResponse.json();
            // Strapi REST API returns data in { data: [...] } format
            const userData = restData?.data?.[0] || restData?.[0];
            const isOnboarded = userData?.is_onboarded || false;
            
            // Update auth context with is_onboarded
            const updatedUser = {
              ...user,
              is_onboarded: isOnboarded,
            };
            authLogin(jwt, updatedUser);

            // Navigate based on is_onboarded status
            if (isOnboarded) {
              router.push('/dashboard');
            } else {
              router.push('/onboarding');
            }
          } else {
            // If REST API fails, navigate to onboarding as fallback
            router.push('/onboarding');
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
          // If query fails, navigate to onboarding as fallback
          router.push('/onboarding');
        }
      }
    } catch (error: unknown) {
      console.error('Login error:', error);
      const graphQLError = error && typeof error === 'object' && 'graphQLErrors' in error
        ? (error as { graphQLErrors?: Array<{ message?: string }> })
        : null;
      if (graphQLError?.graphQLErrors && graphQLError.graphQLErrors.length > 0) {
        const firstError = graphQLError.graphQLErrors[0];
        setErrors({ email: firstError.message || 'Invalid credentials. Please try again.' });
      } else {
        setErrors({ email: 'An error occurred. Please try again.' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background-secondary to-background-tertiary flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Container className="max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Image 
              src="/Logo.png" 
              alt="EduPilot Logo" 
              width={48} 
              height={48}
              className="w-12 h-12"
            />
          </div>
          <Heading level={1} className="text-3xl font-bold text-foreground mb-2">
            Welcome Back
          </Heading>
          <p className="text-muted-foreground">
            Sign in to your EduPilot account
          </p>
          {registered && (
            <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
              <p className="text-sm text-green-600 dark:text-green-400">
                Account created successfully! Please log in.
              </p>
            </div>
          )}
        </div>

               <Card className="border-green-500/30 bg-card/20 backdrop-blur-md shadow-lg">
                 <CardHeader>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Email or Username"
                name="email"
                type="text"
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
                placeholder="Enter your email or username"
                required
              />

              <Input
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                error={errors.password}
                placeholder="Enter your password"
                required
              />

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-primary focus:ring-ring border-border rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-card-foreground">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link
                    href="/forgot-password"
                    className="font-medium text-primary hover:text-primary/80"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>

                     <Button
                       type="submit"
                       className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 dark:from-green-600 dark:to-green-700 dark:hover:from-green-700 dark:hover:to-green-800 text-white"
                       disabled={isLoading}
                     >
                       {isLoading ? 'Signing in...' : 'Sign In'}
                     </Button>
            </form>
          </CardHeader>

          <CardContent>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-card text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => console.log('Google login')}
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </Button>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => console.log('Microsoft login')}
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="#F25022" d="M1 1h10v10H1z"/>
                    <path fill="#00A4EF" d="M13 1h10v10H13z"/>
                    <path fill="#7FBA00" d="M1 13h10v10H1z"/>
                    <path fill="#FFB900" d="M13 13h10v10H13z"/>
                  </svg>
                  Microsoft
                </Button>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Don&apos;t have an account?{' '}
                <Link
                  href="/signup"
                  className="font-medium text-primary hover:text-primary/80"
                >
                  Sign up for free
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </Container>
      
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-background-secondary to-background-tertiary flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    }>
      <LoginForm />
    </Suspense>
  );
}
