interface NeuralBackgroundProps {
  intensity?: "low" | "medium" | "high";
  className?: string;
}

export function NeuralBackground({
  intensity = "medium",
  className = "",
}: NeuralBackgroundProps) {
  const getOpacity = () => {
    switch (intensity) {
      case "low":
        return "opacity-10";
      case "medium":
        return "opacity-20";
      case "high":
        return "opacity-30";
      default:
        return "opacity-20";
    }
  };

  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Neural Grid */}
      <div className={`neural-grid ${getOpacity()}`} />

      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-tech-blue opacity-10 rounded-full blur-3xl animate-pulse-glow" />
      <div
        className="absolute bottom-20 right-20 w-80 h-80 bg-tech-cyan opacity-10 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rex-gold opacity-5 rounded-full blur-3xl animate-neural-pulse"
        style={{ animationDelay: "2s" }}
      />

      {/* Data Stream Lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-tech-blue to-transparent opacity-20">
        <div className="absolute top-0 w-full h-20 bg-tech-blue animate-data-flow"></div>
      </div>
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-tech-cyan to-transparent opacity-20">
        <div
          className="absolute top-0 w-full h-20 bg-tech-cyan animate-data-flow"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>
    </div>
  );
}
