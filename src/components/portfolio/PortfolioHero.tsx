import { GraduationCap, Star, Calendar } from "lucide-react";

export const PortfolioHero = () => {
  return (
    <header className="bg-gradient-hero text-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <GraduationCap className="w-5 h-5" />
            <span className="text-sm font-medium">i.c.stars C58 Digital Portfolio</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            My Journey of
            <span className="block text-secondary mt-2">Growth & Transformation</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto">
            Reflecting on 14 weeks of learning, leadership, and personal development across Leadership, Business, Technology, Career Planning, and Wellness.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
              <Calendar className="w-4 h-4" />
              <span>14-Week Program</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
              <Star className="w-4 h-4 text-secondary" />
              <span>Business Leader Recognition</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
