import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus, Search, FileText, MessageSquare, Layers, FileCode, Star, ChevronRight, X } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const recentChats = [
    "Create pricing page",
    "Create pricing page", 
    "Ok",
    "Sketch interface design",
    "Open in v0",
    "Open in v0",
    "Open in v0",
    "Open in v0",
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 border-r border-border bg-background flex flex-col h-screen
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Close button for mobile */}
        <div className="lg:hidden absolute top-4 right-4">
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-4 border-b border-border">
        <Button className="w-full justify-start gap-2" size="sm">
          <Plus className="h-4 w-4" />
          New Chat
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-2 space-y-1">
          <Button variant="ghost" className="w-full justify-start gap-2 text-sm" size="sm">
            <Search className="h-4 w-4" />
            Search
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2 text-sm" size="sm">
            <FileText className="h-4 w-4" />
            Projects
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2 text-sm" size="sm">
            <MessageSquare className="h-4 w-4" />
            Recent Chats
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2 text-sm" size="sm">
            <Layers className="h-4 w-4" />
            Design Systems
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2 text-sm" size="sm">
            <FileCode className="h-4 w-4" />
            Templates
          </Button>
        </div>

        <div className="p-2 mt-4">
          <Button variant="ghost" className="w-full justify-between text-sm font-medium mb-2" size="sm">
            <span className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              Favorites
            </span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-2 mt-2">
          <div className="text-xs font-medium text-muted-foreground mb-2 px-2">Recent Chats</div>
          <div className="space-y-1">
            {recentChats.map((chat, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-start text-sm text-muted-foreground hover:text-foreground"
                size="sm"
              >
                {chat}
              </Button>
            ))}
          </div>
        </div>
      </ScrollArea>
    </aside>
    </>
  );
};

export default Sidebar;
