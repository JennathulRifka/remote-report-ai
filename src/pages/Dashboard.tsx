import { useState } from "react";
import { Plus, Calendar, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckInForm } from "@/components/CheckInForm";
import { TeamSummary } from "@/components/TeamSummary";
import { RecentCheckIns } from "@/components/RecentCheckIns";

const Dashboard = () => {
  const [showCheckInForm, setShowCheckInForm] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                <Users className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-semibold">Remote Standup Bot</h1>
                <p className="text-sm text-muted-foreground">Daily team check-ins made simple</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="hidden sm:inline-flex">
                <Calendar className="h-3 w-3 mr-1" />
                {new Date().toLocaleDateString()}
              </Badge>
              <Button onClick={() => setShowCheckInForm(true)} className="gap-2">
                <Plus className="h-4 w-4" />
                New Check-in
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex gap-1 bg-muted p-1 rounded-lg w-fit">
          <Button
            variant={activeTab === "overview" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("overview")}
            className="gap-2"
          >
            <TrendingUp className="h-4 w-4" />
            Overview
          </Button>
          <Button
            variant={activeTab === "checkins" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("checkins")}
            className="gap-2"
          >
            <Calendar className="h-4 w-4" />
            Check-ins
          </Button>
          <Button
            variant={activeTab === "summary" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("summary")}
            className="gap-2"
          >
            <Users className="h-4 w-4" />
            Team Summary
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-8">
        {activeTab === "overview" && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Quick Stats */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Today's Check-ins</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">+2 from yesterday</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Team Members</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">Active participants</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.5h</div>
                <p className="text-xs text-muted-foreground">Since standup posted</p>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <div className="md:col-span-2 lg:col-span-3">
              <RecentCheckIns />
            </div>
          </div>
        )}

        {activeTab === "checkins" && <RecentCheckIns />}
        {activeTab === "summary" && <TeamSummary />}
      </main>

      {/* Check-in Form Modal */}
      {showCheckInForm && (
        <CheckInForm onClose={() => setShowCheckInForm(false)} />
      )}
    </div>
  );
};

export default Dashboard;