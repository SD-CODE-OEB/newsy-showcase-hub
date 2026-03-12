import { Megaphone } from "lucide-react";

const AdBanner = () => (
  <div className="container py-5">
    <div className="bg-gradient-to-r from-muted to-secondary rounded-xl flex items-center justify-center py-8 border border-border gap-2">
      <Megaphone size={16} className="text-muted-foreground" />
      <span className="text-muted-foreground text-sm font-medium tracking-wide">Advertisement</span>
    </div>
  </div>
);

export default AdBanner;
