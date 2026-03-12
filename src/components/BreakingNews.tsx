import { useState, useEffect } from "react";

const headlines = [
  "Leader announces major infrastructure development plan for rural areas",
  "Historic rally draws thousands of supporters across the state",
  "New education initiative to benefit over 1 million students",
  "Healthcare reform bill passed with overwhelming majority",
  "International trade agreement signed to boost local economy",
];

const BreakingNews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-card border-b border-border">
      <div className="container flex items-center gap-0 py-2">
        <span className="shrink-0 bg-breaking text-breaking-foreground px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-sm">
          Breaking News
        </span>
        <div className="overflow-hidden ml-3 flex-1">
          <p className="text-sm font-medium text-foreground truncate transition-all duration-500">
            {headlines[currentIndex]}
          </p>
        </div>
      </div>
    </div>
  );
};

export { headlines };
export default BreakingNews;
