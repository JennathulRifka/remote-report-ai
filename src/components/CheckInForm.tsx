import { useState } from "react";
import { X, Send, Smile, AlertCircle, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface CheckInFormProps {
  onClose: () => void;
}

export const CheckInForm = ({ onClose }: CheckInFormProps) => {
  const [formData, setFormData] = useState({
    yesterdayAccomplishments: "",
    todayPlans: "",
    blockers: "",
    mood: "😊"
  });
  const { toast } = useToast();

  const moods = [
    { emoji: "😊", label: "Great" },
    { emoji: "😐", label: "Okay" },
    { emoji: "😅", label: "Busy" },
    { emoji: "😓", label: "Stressed" },
    { emoji: "🔥", label: "Productive" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send data to your backend
    toast({
      title: "Check-in submitted!",
      description: "Your daily update has been recorded.",
    });
    
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-auto">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div>
            <CardTitle className="text-xl">Daily Check-in</CardTitle>
            <CardDescription>
              Share your progress and plans for today
            </CardDescription>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>

        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Mood Selection */}
            <div className="space-y-3">
              <Label className="flex items-center gap-2">
                <Smile className="h-4 w-4" />
                How are you feeling today?
              </Label>
              <div className="flex gap-2">
                {moods.map((mood) => (
                  <button
                    key={mood.emoji}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, mood: mood.emoji }))}
                    className={`p-3 rounded-lg border transition-colors ${
                      formData.mood === mood.emoji 
                        ? "border-primary bg-primary/10" 
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="text-lg">{mood.emoji}</div>
                    <div className="text-xs text-muted-foreground">{mood.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Yesterday's Accomplishments */}
            <div className="space-y-2">
              <Label htmlFor="yesterday" className="flex items-center gap-2">
                <Target className="h-4 w-4" />
                What did you accomplish yesterday?
              </Label>
              <Textarea
                id="yesterday"
                placeholder="List your key achievements and completed tasks..."
                value={formData.yesterdayAccomplishments}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  yesterdayAccomplishments: e.target.value 
                }))}
                className="min-h-[100px]"
              />
            </div>

            {/* Today's Plans */}
            <div className="space-y-2">
              <Label htmlFor="today" className="flex items-center gap-2">
                <Target className="h-4 w-4" />
                What are you working on today?
              </Label>
              <Textarea
                id="today"
                placeholder="Outline your goals and priorities for today..."
                value={formData.todayPlans}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  todayPlans: e.target.value 
                }))}
                className="min-h-[100px]"
                required
              />
            </div>

            {/* Blockers */}
            <div className="space-y-2">
              <Label htmlFor="blockers" className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                Any blockers or help needed?
              </Label>
              <Textarea
                id="blockers"
                placeholder="Mention any obstacles or support you need from the team..."
                value={formData.blockers}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  blockers: e.target.value 
                }))}
                className="min-h-[80px]"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end gap-3 pt-4 border-t">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" className="gap-2">
                <Send className="h-4 w-4" />
                Submit Check-in
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};