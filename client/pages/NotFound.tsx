import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-dark-bg text-white neural-grid overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-tech-blue opacity-10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-tech-cyan opacity-10 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-2xl mx-auto">
          {/* Rex Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-tech-blue to-tech-cyan rounded-full p-1 animate-pulse-glow">
              <div className="w-full h-full bg-dark-surface rounded-full flex items-center justify-center">
                <span className="text-4xl">🦖</span>
              </div>
            </div>
          </div>

          {/* Error Code */}
          <h1 className="text-8xl font-bold mb-6 bg-gradient-to-r from-tech-blue to-tech-cyan bg-clip-text text-transparent animate-pulse-glow">
            404
          </h1>

          {/* Error Message */}
          <div className="cyber-border rounded-lg p-6 mb-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-rex-gold mb-4 glow-text">
              "Signal Lost in the Mesh"
            </h2>
            <p className="text-gray-300 mb-4">
              REX has scanned the entire network, but this path leads to the
              void. Even the most advanced neural processors cannot locate this
              route.
            </p>
            <p className="text-tech-cyan text-sm">
              Attempted route:{" "}
              <code className="text-tech-blue">{location.pathname}</code>
            </p>
          </div>

          {/* Action Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/"
              className="cyber-border px-8 py-4 rounded-lg text-tech-blue hover:text-white hover:bg-tech-blue/20 transition-all duration-300 group inline-flex items-center"
            >
              <span className="glow-text">Return to Base</span>
              <span className="ml-2 group-hover:-translate-x-1 transition-transform duration-300">
                🏛️
              </span>
            </a>
          </div>

          {/* Quote */}
          <div className="mt-12 text-gray-400 italic">
            "The obstacle is the way. Navigate back to signal clarity."
            <br />
            <span className="text-tech-blue">- Marcus Aurelius & REX</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
