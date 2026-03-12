import { useState, useEffect } from "react";
import { headlines } from "./BreakingNews";

const bannerImages = [
  "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1200&h=400&fit=crop",
  "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=1200&h=400&fit=crop",
  "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=1200&h=400&fit=crop",
  "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1200&h=400&fit=crop",
  "https://images.unsplash.com/photo-1504711434969-e33886168d5c?w=1200&h=400&fit=crop",
];

const HeroBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container py-4">
      <div className="relative w-full h-48 md:h-72 overflow-hidden rounded bg-muted">
        <img
          src={bannerImages[currentIndex]}
          alt={headlines[currentIndex]}
          className="w-full h-full object-cover transition-opacity duration-700"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/70 to-transparent p-4">
          <p className="text-sm md:text-base font-semibold text-primary-foreground">
            {headlines[currentIndex]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
