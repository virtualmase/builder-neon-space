import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "primary" | "secondary" | "gold";
  hover?: boolean;
}

export function GlowCard({
  children,
  className = "",
  variant = "default",
  hover = true,
}: GlowCardProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "border-tech-blue hover:shadow-tech-blue/20";
      case "secondary":
        return "border-tech-cyan hover:shadow-tech-cyan/20";
      case "gold":
        return "border-rex-gold hover:shadow-rex-gold/20";
      default:
        return "border-gray-700 hover:shadow-tech-blue/10";
    }
  };

  const hoverClasses = hover
    ? "hover:scale-105 hover:shadow-lg transition-all duration-300"
    : "";

  return (
    <div
      className={`
        cyber-border rounded-lg p-6 backdrop-blur-sm
        ${getVariantClasses()}
        ${hoverClasses}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
