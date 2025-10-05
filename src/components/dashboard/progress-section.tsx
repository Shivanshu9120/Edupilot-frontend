import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ProgressMetric } from '@/lib/types';
import { SAMPLE_PROGRESS_METRICS } from '@/lib/dashboard-constants';

interface ProgressCardProps {
  metric: ProgressMetric;
}

function ProgressCard({ metric }: ProgressCardProps) {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '📈';
      case 'down': return '📉';
      case 'stable': return '➡️';
      default: return '📊';
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-success';
      case 'down': return 'text-error';
      case 'stable': return 'text-muted-foreground';
      default: return 'text-muted-foreground';
    }
  };

  const percentage = (metric.value / metric.max) * 100;

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-card-foreground">
            {metric.label}
          </h3>
          <span className={`text-sm ${getTrendColor(metric.trend)}`}>
            {getTrendIcon(metric.trend)}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">
              {metric.value} {metric.unit}
            </span>
            <span className="font-medium text-card-foreground">
              {Math.round(percentage)}%
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <div className="text-xs text-muted-foreground">
            Goal: {metric.max} {metric.unit}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function ProgressSection() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Learning Progress
        </h2>
        <p className="text-muted-foreground">
          Track your learning achievements and milestones
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {SAMPLE_PROGRESS_METRICS.map((metric) => (
          <ProgressCard key={metric.id} metric={metric} />
        ))}
      </div>
      
      {/* Study Streak */}
      <Card className="mb-6">
        <CardHeader>
          <h3 className="text-lg font-semibold text-card-foreground">
            Study Streak 🔥
          </h3>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-3xl font-bold text-accent">
                7 days
              </div>
              <div className="text-sm text-muted-foreground">
                Keep it up! You&apos;re on fire!
              </div>
            </div>
            <div className="text-4xl">🔥</div>
          </div>
        </CardContent>
      </Card>
      
      {/* Recent Achievements */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-card-foreground">
            Recent Achievements
          </h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-warning rounded-full flex items-center justify-center">
                🏆
              </div>
              <div>
                <div className="text-sm font-medium text-card-foreground">
                  Course Completion
                </div>
                <div className="text-xs text-muted-foreground">
                  Completed &quot;Introduction to Mathematics&quot;
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                ⭐
              </div>
              <div>
                <div className="text-sm font-medium text-card-foreground">
                  Perfect Score
                </div>
                <div className="text-xs text-muted-foreground">
                  Scored 100% on Algebra Quiz
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                📚
              </div>
              <div>
                <div className="text-sm font-medium text-card-foreground">
                  Study Streak
                </div>
                <div className="text-xs text-muted-foreground">
                  7 days in a row!
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="mt-6 text-center">
        <Button variant="outline" className="bg-background-secondary hover:bg-background-tertiary">
          View Detailed Progress
        </Button>
      </div>
    </div>
  );
}
