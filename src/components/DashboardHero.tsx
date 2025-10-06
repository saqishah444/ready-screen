import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, ArrowRight, Camera, Image, Upload, FileText } from "lucide-react";
import { useState } from "react";

const DashboardHero = () => {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Prompt submitted:", prompt);
  };

  const quickActions = [
    { icon: Camera, label: "Clone a Screenshot" },
    { icon: Image, label: "Import from Figma" },
    { icon: Upload, label: "Upload a Project" },
    { icon: FileText, label: "Landing Page" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-2xl mx-auto text-center space-y-6 md:space-y-8">
        <div className="space-y-3 md:space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
            What do you want to create?
          </h1>
          <p className="text-base md:text-lg text-muted-foreground">
            Start building with a single prompt. No coding needed.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full space-y-3 md:space-y-4">
          <div className="relative flex items-center gap-1 sm:gap-2 p-1 border border-input rounded-lg bg-background shadow-sm hover:shadow-md transition-shadow">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-9 w-9 sm:h-10 sm:w-10 shrink-0"
              aria-label="Add attachment"
            >
              <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Input
              type="text"
              placeholder="Ask v0 to build..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-sm sm:text-base placeholder:text-muted-foreground"
            />
            <Button
              type="submit"
              size="icon"
              className="h-9 w-9 sm:h-10 sm:w-10 shrink-0 rounded-md"
              aria-label="Submit prompt"
            >
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 px-2 py-2 bg-muted/30 rounded-lg text-xs text-muted-foreground">
            <span className="text-left">Upgrade to faster to unlock all of v0's features and more credits</span>
            <Button variant="link" size="sm" className="text-xs h-auto p-0 shrink-0">
              Upgrade Plan →
            </Button>
          </div>
        </form>

        <div className="flex items-center justify-center gap-2 flex-wrap">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              className="gap-2 text-xs sm:text-sm"
            >
              <action.icon className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">{action.label}</span>
              <span className="sm:hidden">{action.label.split(' ')[0]}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardHero;
