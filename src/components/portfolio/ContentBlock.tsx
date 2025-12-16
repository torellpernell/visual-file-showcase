import { ReactNode } from "react";

interface ContentBlockProps {
  title: string;
  children: ReactNode;
}

export const ContentBlock = ({ title, children }: ContentBlockProps) => {
  return (
    <div className="mb-8 last:mb-0">
      <h3 className="text-lg md:text-xl font-semibold text-primary mb-3">{title}</h3>
      <div className="text-muted-foreground leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  );
};
