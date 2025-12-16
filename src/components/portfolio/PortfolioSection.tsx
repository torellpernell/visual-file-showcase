import { ReactNode } from "react";

interface PortfolioSectionProps {
  id: string;
  title: string;
  icon: ReactNode;
  gradient: string;
  children: ReactNode;
  images: string[];
}

export const PortfolioSection = ({ id, title, icon, gradient, children, images }: PortfolioSectionProps) => {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center gap-4 mb-8">
          <div className={`p-3 rounded-xl ${gradient} text-white`}>
            {icon}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
        </div>
        
        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {images.map((src, index) => (
            <div key={index} className="relative aspect-video rounded-xl overflow-hidden shadow-lg group">
              <img 
                src={src} 
                alt={`${title} illustration ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-6 md:p-10 shadow-lg border border-border/50">
          {children}
        </div>
      </div>
    </section>
  );
};
