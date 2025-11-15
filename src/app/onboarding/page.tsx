'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Heading } from '@/components/ui/heading';
import { OnboardingData } from '@/lib/types';

const GRADES = [
  'Kindergarten', '1st Grade', '2nd Grade', '3rd Grade', '4th Grade',
  '5th Grade', '6th Grade', '7th Grade', '8th Grade', '9th Grade',
  '10th Grade', '11th Grade', '12th Grade', 'College', 'Graduate'
];

const SUBJECTS = [
  'Mathematics', 'Science', 'English', 'History', 'Geography',
  'Art', 'Music', 'Physical Education', 'Computer Science', 'Foreign Language'
];

const LEARNING_GOALS = [
  'Improve grades', 'Prepare for exams', 'Learn new skills',
  'Catch up on missed topics', 'Get ahead of class', 'Explore interests'
];

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [data, setData] = useState<OnboardingData>({
    grade: '',
    subjects: [],
    learningGoals: [],
    experience: 'beginner',
  });

  const handleGradeSelect = (grade: string) => {
    setData(prev => ({ ...prev, grade }));
  };

  const handleSubjectToggle = (subject: string) => {
    setData(prev => ({
      ...prev,
      subjects: prev.subjects?.includes(subject)
        ? prev.subjects.filter(s => s !== subject)
        : [...(prev.subjects || []), subject]
    }));
  };

  const handleGoalToggle = (goal: string) => {
    setData(prev => ({
      ...prev,
      learningGoals: prev.learningGoals?.includes(goal)
        ? prev.learningGoals.filter(g => g !== goal)
        : [...(prev.learningGoals || []), goal]
    }));
  };

  const handleExperienceChange = (experience: 'beginner' | 'intermediate' | 'advanced') => {
    setData(prev => ({ ...prev, experience }));
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Complete onboarding
      console.log('Onboarding data:', data);
      router.push('/dashboard');
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1: return data.grade;
      case 2: return data.subjects && data.subjects.length > 0;
      case 3: return data.learningGoals && data.learningGoals.length > 0;
      case 4: return data.experience;
      default: return false;
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Heading level={2} className="mb-4 text-card-foreground">What&apos;s your grade level?</Heading>
              <p className="text-muted-foreground">
                This helps us personalize your learning experience
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {GRADES.map((grade) => (
                <button
                  key={grade}
                  onClick={() => handleGradeSelect(grade)}
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
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Heading level={2} className="mb-4 text-card-foreground">Which subjects interest you?</Heading>
              <p className="text-muted-foreground">
                Select all subjects you&apos;d like to focus on
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {SUBJECTS.map((subject) => (
                <button
                  key={subject}
                  onClick={() => handleSubjectToggle(subject)}
                  className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                    data.subjects?.includes(subject)
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border hover:bg-background-secondary text-card-foreground'
                  }`}
                >
                  {subject}
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Heading level={2} className="mb-4 text-card-foreground">What are your learning goals?</Heading>
              <p className="text-muted-foreground">
                Choose what you want to achieve
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {LEARNING_GOALS.map((goal) => (
                <button
                  key={goal}
                  onClick={() => handleGoalToggle(goal)}
                  className={`p-4 rounded-lg border text-sm font-medium transition-colors ${
                    data.learningGoals?.includes(goal)
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border hover:bg-background-secondary text-card-foreground'
                  }`}
                >
                  {goal}
                </button>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Heading level={2} className="mb-4 text-card-foreground">What&apos;s your experience level?</Heading>
              <p className="text-muted-foreground">
                This helps us adjust the difficulty of content
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                { value: 'beginner', label: 'Beginner', desc: 'New to most topics' },
                { value: 'intermediate', label: 'Intermediate', desc: 'Some experience' },
                { value: 'advanced', label: 'Advanced', desc: 'Very experienced' }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleExperienceChange(option.value as 'beginner' | 'intermediate' | 'advanced')}
                  className={`w-full p-4 rounded-lg border text-left transition-colors ${
                    data.experience === option.value
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border hover:bg-background-secondary text-card-foreground'
                  }`}
                >
                  <div className="font-medium">{option.label}</div>
                  <div className="text-sm opacity-75">{option.desc}</div>
                </button>
              ))}
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
              Step {step} of 4
            </span>
            <span className="text-sm text-muted-foreground">
              {Math.round((step / 4) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>

               <Card className="border-green-500/30 bg-card/20 backdrop-blur-md shadow-lg">
                 <CardHeader>
            {renderStep()}
          </CardHeader>

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
                       disabled={!canProceed()}
                       className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 dark:from-green-600 dark:to-green-700 dark:hover:from-green-700 dark:hover:to-green-800 text-white"
                     >
                       {step === 4 ? 'Complete Setup' : 'Next'}
                     </Button>
            </div>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}
