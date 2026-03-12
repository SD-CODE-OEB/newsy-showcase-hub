import { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { motion } from "framer-motion";

const galleryImages = [
  "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1504711434969-e33886168d5c?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=400&h=400&fit=crop",
];

const GalleryCarousel = () => {
  const [offset, setOffset] = useState(0);
  const visible = 4;

  const prev = () => setOffset((o) => Math.max(0, o - 1));
  const next = () => setOffset((o) => Math.min(galleryImages.length - visible, o + 1));

  return (
    <section className="container py-8">
      <div className="section-divider mb-3" />
      <h2 className="section-title">Gallery</h2>
      <div className="relative mt-5">
        <button
          onClick={prev}
          disabled={offset === 0}
          className="absolute -left-1 md:-left-3 top-1/2 -translate-y-1/2 z-10 bg-card shadow-lg text-foreground rounded-full p-2 hover:bg-accent hover:text-accent-foreground transition-all duration-200 disabled:opacity-30"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="overflow-hidden mx-8 md:mx-10">
          <div
            className="flex gap-3 md:gap-4 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${offset * (100 / visible)}%)` }}
          >
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="shrink-0 w-1/2 md:w-1/4 aspect-square rounded-xl overflow-hidden bg-muted relative group cursor-pointer"
              >
                <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-center justify-center">
                  <Maximize2 size={20} className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <button
          onClick={next}
          disabled={offset >= galleryImages.length - visible}
          className="absolute -right-1 md:-right-3 top-1/2 -translate-y-1/2 z-10 bg-card shadow-lg text-foreground rounded-full p-2 hover:bg-accent hover:text-accent-foreground transition-all duration-200 disabled:opacity-30"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default GalleryCarousel;
