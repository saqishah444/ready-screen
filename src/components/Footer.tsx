const Footer = () => {
  const links = [
    { label: "Pricing", href: "#" },
    { label: "Enterprise", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Latest", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Vercel Community", href: "#" },
    { label: "Vercel", href: "#" },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-background border-t border-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
