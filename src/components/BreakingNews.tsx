import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle } from "lucide-react";

const headlines = [
  "ప్రజాప్రభుత్వం వచ్చిన మొదటి ఏడాదిలోనే 4.50 లక్షల ఇండ్ల మంజూరు : మంత్రి పొంగులేటి శ్రీనివాసరెడ్డి",
  "భూ రికార్డులు లేని గ్రామాల్లో అధునాతన 'రోవర్' టెక్నాలజీతో రీ-సర్వే నిర్వహించి రైతులకు 'భూదార్' కార్డులు అందజేసే ప్రక్రియకు పునాది.",
  "మైనారిటీల సంక్షేమాన్ని ఆకాంక్షిస్తూ రంజాన్ కానుకలను పంపిణీ చేస్తున్న మంత్రి పొంగులేటి గారు.",
  "మౌలిక వసతుల మెరుగుదలనే ధ్యేయంగా అభివృద్ధి పనులకు శంకుస్థాపన.",
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
