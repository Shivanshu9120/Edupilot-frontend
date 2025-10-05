import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Course } from '@/lib/types';
import { SAMPLE_COURSES } from '@/lib/dashboard-constants';

interface CourseCardProps {
  course: Course;
}

function CourseCard({ course }: CourseCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-success text-success-foreground';
      case 'intermediate': return 'bg-warning text-warning-foreground';
      case 'advanced': return 'bg-error text-error-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

         return (
           <Card className="hover:shadow-lg transition-shadow border-green-500/30 bg-card/20 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-green-400/50 cursor-pointer group">
             <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
              {course.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              {course.description}
            </p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>👨‍🏫 {course.instructor}</span>
              <span>⏱️ {course.duration}</span>
            </div>
          </div>
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(course.difficulty)}`}>
            {course.difficulty}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium text-card-foreground">
              {course.completedLessons}/{course.totalLessons} lessons
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${course.progress}%` }}
            />
          </div>
          <div className="flex space-x-2">
                 <Button size="sm" className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 dark:from-green-600 dark:to-green-700 dark:hover:from-green-700 dark:hover:to-green-800 text-white">
                   Continue Learning
                 </Button>
            <Button size="sm" variant="outline">
              View Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function CoursesSection() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          My Courses
        </h2>
        <p className="text-muted-foreground">
          Continue your learning journey with these courses
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SAMPLE_COURSES.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <Button variant="outline" className="bg-background-secondary hover:bg-background-tertiary">
          Browse All Courses
        </Button>
      </div>
    </div>
  );
}
