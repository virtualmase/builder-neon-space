import { ReactNode, ButtonHTMLAttributes } from "react";

interface TechButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  glow?: boolean;
}

export function TechButton({
  children,
  variant = "primary",
  size = "md",
  glow = false,
  className = "",
  ...props
}: TechButtonProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-tech-blue text-dark-bg hover:bg-tech-blue-dark";
      case "secondary":
        return "bg-tech-cyan text-dark-bg hover:bg-tech-cyan/80";
      case "outline":
        return "border border-tech-blue text-tech-blue hover:bg-tech-blue/10";
      case "ghost":
        return "text-tech-blue hover:bg-tech-blue/5";
      default:
        return "bg-tech-blue text-dark-bg hover:bg-tech-blue-dark";
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "px-4 py-2 text-sm";
      case "md":
        return "px-6 py-3 text-base";
      case "lg":
        return "px-8 py-4 text-lg";
      default:
        return "px-6 py-3 text-base";
    }
  };

  const glowClasses = glow ? "animate-pulse-glow" : "";

  return (
    <button
      className={`
        ${getVariantClasses()}
        ${getSizeClasses()}
        ${glowClasses}
        rounded-lg font-medium transition-all duration-300 
        transform hover:scale-105 active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
