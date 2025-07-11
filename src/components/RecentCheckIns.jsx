import { Clock, User, MessageSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export const RecentCheckIns = () => {
  // Mock data - in real app this would come from your database
  const checkIns = [
    {
      id: 1,
      user: { name: "Sarah Chen", initials: "SC" },
      mood: "🔥",
      timestamp: "2 hours ago",
      yesterday: "Completed user authentication system and wrote comprehensive tests",
      today: "Working on dashboard integration and API documentation",
      blockers: ""
    },
    {
      id: 2,
      user: { name: "Alex Rodriguez", initials: "AR" },
      mood: "😊",
      timestamp: "3 hours ago",
      yesterday: "Finished Q3 planning session and updated project roadmap",
      today: "Client presentation prep and team sync meetings",
      blockers: "Waiting for design system approval from stakeholders"
    },
    {
      id: 3,
      user: { name: "Jamie Park", initials: "JP" },
      mood: "😅",
      timestamp: "4 hours ago",
      yesterday: "Deployed new API endpoints and resolved performance issues",
      today: "Testing deployment pipeline and bug fixes",
      blockers: ""
    },
    {
      id: 4,
      user: { name: "Morgan Taylor", initials: "MT" },
      mood: "😐",
      timestamp: "5 hours ago",
      yesterday: "Code reviews and mentoring junior developers",
      today: "Database optimization and migration planning",
      blockers: "Database migration pending security review"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          Recent Check-ins
        </CardTitle>
        <CardDescription>
          Latest updates from your team members
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {checkIns.map((checkIn, index) => (
          <div key={checkIn.id}>
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="text-xs">
                      {checkIn.user.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">{checkIn.user.name}</span>
                    <span className="text-lg">{checkIn.mood}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {checkIn.timestamp}
                </div>
              </div>

              {/* Content */}
              <div className="grid gap-3 pl-11">
                <div className="space-y-1">
                  <Badge variant="outline" className="text-xs">Yesterday</Badge>
                  <p className="text-sm text-muted-foreground">{checkIn.yesterday}</p>
                </div>
                
                <div className="space-y-1">
                  <Badge variant="outline" className="text-xs">Today</Badge>
                  <p className="text-sm text-muted-foreground">{checkIn.today}</p>
                </div>

                {checkIn.blockers && (
                  <div className="space-y-1">
                    <Badge variant="destructive" className="text-xs">Blockers</Badge>
                    <p className="text-sm text-muted-foreground">{checkIn.blockers}</p>
                  </div>
                )}
              </div>
            </div>
            
            {index < checkIns.length - 1 && (
              <Separator className="mt-6" />
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};