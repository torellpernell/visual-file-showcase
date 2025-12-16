import { Crown, Briefcase, Code, Target, Heart } from "lucide-react";

const navItems = [
  { id: "leadership", label: "Leadership", icon: Crown },
  { id: "business", label: "Business", icon: Briefcase },
  { id: "technology", label: "Technology", icon: Code },
  { id: "career", label: "Career", icon: Target },
  { id: "wellness", label: "Wellness", icon: Heart },
];

export const PortfolioNav = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 md:gap-6 py-4 overflow-x-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 whitespace-nowrap"
            >
              <item.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};
