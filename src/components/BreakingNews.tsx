import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle } from "lucide-react";

const headlines = [
  "Minister Ponguleti Srinivasa Reddy announced the government aims to complete 1 lakh Indiramma houses by March 2026.",
  "Distribution of Eid-ka-Tohfa by the Minister.",
  "Inauguration of Development Works.",
  "Attending the Training Session for Local Public Representatives.",
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
      <div className="container flex items-center gap-3 py-2.5">
        <span className="shrink-0 bg-breaking text-breaking-foreground px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full flex items-center gap-1.5 shimmer-bg">
          <AlertCircle size={12} className="animate-pulse" />
          Latest News
        </span>
        <div className="overflow-hidden flex-1">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-sm font-medium text-foreground truncate"
            >
              {headlines[currentIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export { headlines };
export default BreakingNews;
