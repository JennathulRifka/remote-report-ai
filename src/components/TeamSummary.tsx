import { Bot, Calendar, Clock, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const TeamSummary = () => {
  // Mock data - in real app this would come from AI processing
  const summary = {
    date: new Date().toLocaleDateString(),
    participantCount: 8,
    totalCheckIns: 8,
    mood: "Positive",
    keyAccomplishments: [
      "Completed user authentication system",
      "Finished Q3 planning session", 
      "Deployed new API endpoints",
      "Resolved critical performance issues"
    ],
    todayFocus: [
      "Frontend integration with new APIs",
      "Testing deployment pipeline",
      "Client presentation preparation",
      "Code review sessions"
    ],
    blockers: [
      "Waiting for design system approval",
      "Database migration pending review"
    ],
    aiInsights: "The team is making excellent progress on the Q3 objectives. High energy and productivity levels observed. Two minor blockers identified that may need management attention."
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Bot className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle className="flex items-center gap-2">
                  AI Team Summary
                  <Badge variant="secondary">{summary.date}</Badge>
                </CardTitle>
                <CardDescription>
                  Automatically generated from today's check-ins
                </CardDescription>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                {summary.participantCount} participants
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {summary.totalCheckIns} check-ins
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* AI Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Key Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-sm leading-relaxed">{summary.aiInsights}</p>
            </div>
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="gap-2">
                Team Mood: {summary.mood}
              </Badge>
              <Button variant="outline" size="sm" className="gap-2">
                <Clock className="h-4 w-4" />
                Generate Report
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Accomplishments */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Yesterday's Accomplishments</CardTitle>
          <CardDescription>
            Key achievements across the team
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {summary.keyAccomplishments.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Today's Focus */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Today's Focus Areas</CardTitle>
          <CardDescription>
            What the team is working on today
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {summary.todayFocus.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="h-2 w-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Blockers */}
      {summary.blockers.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-destructive">Blockers & Support Needed</CardTitle>
            <CardDescription>
              Issues that need attention
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {summary.blockers.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
};