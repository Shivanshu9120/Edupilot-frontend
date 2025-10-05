import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Assignment } from '@/lib/types';
import { SAMPLE_ASSIGNMENTS } from '@/lib/dashboard-constants';

interface AssignmentCardProps {
  assignment: Assignment;
}

function AssignmentCard({ assignment }: AssignmentCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-success text-success-foreground';
      case 'in-progress': return 'bg-primary text-primary-foreground';
      case 'pending': return 'bg-warning text-warning-foreground';
      case 'overdue': return 'bg-error text-error-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-error';
      case 'medium': return 'text-warning';
      case 'low': return 'text-success';
      default: return 'text-muted-foreground';
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const isOverdue = assignment.status === 'overdue' || (assignment.dueDate < new Date() && assignment.status !== 'completed');

  return (
    <Card className={`hover:shadow-lg transition-shadow ${isOverdue ? 'border-error' : ''}`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-card-foreground mb-2">
              {assignment.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-2">
              {assignment.course}
            </p>
            <p className="text-sm text-muted-foreground">
              {assignment.description}
            </p>
          </div>
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(assignment.status)}`}>
            {assignment.status.replace('-', ' ')}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Due Date</span>
            <span className={`font-medium ${isOverdue ? 'text-error' : 'text-card-foreground'}`}>
              {formatDate(assignment.dueDate)}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Priority</span>
            <span className={`font-medium ${getPriorityColor(assignment.priority)}`}>
              {assignment.priority}
            </span>
          </div>
          <div className="flex space-x-2">
            <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
              {assignment.status === 'completed' ? 'View Submission' : 'Start Assignment'}
            </Button>
            <Button size="sm" variant="outline">
              Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function AssignmentsSection() {
  const upcomingAssignments = SAMPLE_ASSIGNMENTS.filter(a => a.status !== 'completed');
  const completedAssignments = SAMPLE_ASSIGNMENTS.filter(a => a.status === 'completed');

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Assignments
        </h2>
        <p className="text-muted-foreground">
          Stay on top of your assignments and deadlines
        </p>
      </div>
      
      {upcomingAssignments.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Upcoming Assignments
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {upcomingAssignments.map((assignment) => (
              <AssignmentCard key={assignment.id} assignment={assignment} />
            ))}
          </div>
        </div>
      )}
      
      {completedAssignments.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Recently Completed
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {completedAssignments.map((assignment) => (
              <AssignmentCard key={assignment.id} assignment={assignment} />
            ))}
          </div>
        </div>
      )}
      
      <div className="mt-6 text-center">
        <Button variant="outline" className="bg-background-secondary hover:bg-background-tertiary">
          View All Assignments
        </Button>
      </div>
    </div>
  );
}
