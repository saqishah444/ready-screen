import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const DashboardHeader = () => {
  return (
    <header className="fixed top-0 left-64 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-foreground rounded" />
            <span className="text-sm font-medium">Personal</span>
          </a>
          <span className="text-sm text-muted-foreground">Free</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-sm">
            Upgrade
          </Button>
          <Button variant="ghost" size="sm" className="text-sm">
            Feedback
          </Button>
          <div className="text-sm text-muted-foreground">3:38</div>
          <Avatar className="h-8 w-8">
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
