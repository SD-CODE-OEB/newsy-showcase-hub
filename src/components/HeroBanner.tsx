import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { headlines } from "./BreakingNews";
import { Play } from "lucide-react";

const bannerImages = [
  "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1200&h=500&fit=crop",
  "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=1200&h=500&fit=crop",
  "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=1200&h=500&fit=crop",
  "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1200&h=500&fit=crop",
  "https://images.unsplash.com/photo-1504711434969-e33886168d5c?w=1200&h=500&fit=crop",
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
    <div className="container py-5">
      <div className="relative w-full h-56 md:h-80 overflow-hidden rounded-2xl bg-muted group">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={bannerImages[currentIndex]}
            alt={headlines[currentIndex]}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full h-full object-cover absolute inset-0"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-bold uppercase rounded-full mb-3 tracking-wider">
                Featured Story
              </span>
              <p className="text-base md:text-xl font-heading font-bold text-primary-foreground leading-snug max-w-2xl">
                {headlines[currentIndex]}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Progress dots */}
        <div className="absolute bottom-4 right-5 flex gap-1.5">
          {bannerImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentIndex ? "bg-accent w-6" : "bg-primary-foreground/50 hover:bg-primary-foreground/80"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
