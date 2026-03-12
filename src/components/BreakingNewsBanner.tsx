import { motion } from "framer-motion";
import { Zap, TrendingUp } from "lucide-react";

const BreakingNewsBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full bg-primary text-primary-foreground overflow-hidden"
    >
      <div className="container py-3">
        <div className="flex items-center justify-between">
          {/* Left: Live Pulse & Label */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-foreground"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider">Live</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-primary-foreground/90">
              <TrendingUp size={14} />
              <span className="text-xs font-medium">Trending Now</span>
            </div>
          </div>

          {/* Center: Main Breaking News Text */}
          <div className="flex-1 mx-4 sm:mx-8 overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              className="flex items-center gap-8 whitespace-nowrap"
            >
              <span className="flex items-center gap-2 font-semibold text-sm sm:text-base">
                <Zap size={16} className="fill-primary-foreground" />
                Historic Rally: Over 50,000 supporters gather for major policy announcement
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/50"></span>
              <span className="flex items-center gap-2 font-semibold text-sm sm:text-base">
                <Zap size={16} className="fill-primary-foreground" />
                Infrastructure Bill Passed: $2B allocated for rural development
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/50"></span>
              <span className="flex items-center gap-2 font-semibold text-sm sm:text-base">
                <Zap size={16} className="fill-primary-foreground" />
                Education Reform: New scholarships for 100,000 students announced
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/50"></span>
              <span className="flex items-center gap-2 font-semibold text-sm sm:text-base">
                <Zap size={16} className="fill-primary-foreground" />
                Healthcare Initiative: Universal coverage expansion begins next month
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/50"></span>
            </motion.div>
          </div>

          {/* Right: Time & Action */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <span className="text-xs font-medium text-primary-foreground/80">
              Updated just now
            </span>
            <button className="bg-primary-foreground text-primary px-3 py-1 rounded-full text-xs font-bold hover:bg-primary-foreground/90 transition-colors">
              Read All
            </button>
          </div>
        </div>
      </div>

      {/* Animated Progress Bar */}
      <div className="h-0.5 w-full bg-primary-foreground/20">
        <motion.div
          animate={{ x: ["-100%", "0%"] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          className="h-full w-1/3 bg-gradient-to-r from-transparent via-primary-foreground to-transparent"
        />
      </div>
    </motion.div>
  );
};

export default BreakingNewsBanner;
