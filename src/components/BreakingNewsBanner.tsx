import { motion } from "framer-motion";
import { Zap, Activity } from "lucide-react";

const BreakingNewsBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full bg-primary text-primary-foreground overflow-hidden">
      
      <div className="container py-3">
        <div className="flex items-center justify-between">
          {/* Left: Live Pulse & Label */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-foreground"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider">Latest</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-primary-foreground/90">
              <Activity size={14} />
              <span className="text-xs font-medium">Latest News</span>
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
                  ease: "linear"
                }
              }}
              className="flex items-center gap-8 whitespace-nowrap">
              
              <span className="flex items-center gap-2 font-semibold text-sm sm:text-base">ప్రజాప్రభుత్వం వచ్చిన మొదటి ఏడాదిలోనే 4.50 లక్షల ఇండ్ల మంజూరు : మంత్రి పొంగులేటి శ్రీనివాసరెడ్డి.
                <Zap size={16} className="fill-primary-foreground" />
                Minister Ponguleti Srinivasa Reddy announced the government aims to complete 1 lakh Indiramma houses by March 2026.
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/50"></span>
              <span className="flex items-center gap-2 font-semibold text-sm sm:text-base">
                <Zap size={16} className="fill-primary-foreground" />
                Distribution of Eid-ka-Tohfa by the Minister.
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/50"></span>
              <span className="flex items-center gap-2 font-semibold text-sm sm:text-base">
                <Zap size={16} className="fill-primary-foreground" />
                Inauguration of Development Works.
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/50"></span>
              <span className="flex items-center gap-2 font-semibold text-sm sm:text-base">
                <Zap size={16} className="fill-primary-foreground" />
                Attending the Training Session for Local Public Representatives.
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
            ease: "linear"
          }}
          className="h-full w-1/3 bg-gradient-to-r from-transparent via-primary-foreground to-transparent" />
        
      </div>
    </motion.div>);

};

export default BreakingNewsBanner;