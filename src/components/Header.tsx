import { Button } from "@/components/ui/button";
import React from "react";
import { SidebarContext } from "@/components/ui/sidebar";

const Header = () => {
  // Use SidebarContext directly so we don't violate hooks rules if provider isn't present.
  const ctx = React.useContext(SidebarContext);
  const toggleSidebar = ctx?.toggleSidebar ?? null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-8">
          <button
            type="button"
            onClick={() => {
              if (toggleSidebar) {
                toggleSidebar();
                return;
              }
              window.location.href = "/";
            }}
            className="flex items-center gap-2"
            aria-label="Home"
          >
            <div className="w-6 h-6 bg-foreground rounded" />
          </button>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Templates
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Enterprise
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              iOS
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-sm">
            Sign In
          </Button>
          <Button size="sm" className="text-sm" asChild>
            <a href="/dashboard">Sign Up</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
