import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Menu } from "lucide-react";

interface DashboardHeaderProps {
  onMenuClick: () => void;
}

const DashboardHeader = ({ onMenuClick }: DashboardHeaderProps) => {
  return (
    <header className="fixed top-0 left-0 lg:left-64 right-0 z-30 bg-background border-b border-border">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden"
            onClick={onMenuClick}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <a href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-foreground rounded" />
            <span className="text-sm font-medium hidden sm:inline">Personal</span>
          </a>
          <span className="text-sm text-muted-foreground hidden sm:inline">Free</span>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <Button variant="ghost" size="sm" className="text-sm hidden md:inline-flex">
            Upgrade
          </Button>
          <Button variant="ghost" size="sm" className="text-sm hidden md:inline-flex">
            Feedback
          </Button>
          <div className="text-sm text-muted-foreground hidden sm:inline">3:38</div>
          <Avatar className="h-8 w-8">
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
