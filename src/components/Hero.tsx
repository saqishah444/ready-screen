import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, ArrowRight } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Prompt submitted:", prompt);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-14">
      <div className="w-full max-w-2xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
            What do you want to create?
          </h1>
          <p className="text-lg text-muted-foreground">
            Start building with a single prompt. No coding needed.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="relative flex items-center gap-2 p-1 border border-input rounded-lg bg-background shadow-sm hover:shadow-md transition-shadow">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-10 w-10 shrink-0"
              aria-label="Add attachment"
            >
              <Plus className="h-5 w-5" />
            </Button>
            <Input
              type="text"
              placeholder="Ask v0 to build..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-base placeholder:text-muted-foreground"
            />
            <Button
              type="submit"
              size="icon"
              className="h-10 w-10 shrink-0 rounded-md"
              aria-label="Submit prompt"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
