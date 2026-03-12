import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1504711434969-e33886168d5c?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=300&h=300&fit=crop",
];

const GalleryCarousel = () => {
  const [offset, setOffset] = useState(0);
  const visible = 4;

  const prev = () => setOffset((o) => Math.max(0, o - 1));
  const next = () => setOffset((o) => Math.min(galleryImages.length - visible, o + 1));

  return (
    <section className="container py-6">
      <div className="section-divider mb-2" />
      <h2 className="section-title">Gallery</h2>
      <div className="relative mt-4">
        <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-navbar/80 text-navbar-foreground rounded-full p-1 hover:bg-navbar transition-colors">
          <ChevronLeft size={20} />
        </button>
        <div className="overflow-hidden mx-8">
          <div
            className="flex gap-3 transition-transform duration-300"
            style={{ transform: `translateX(-${offset * (100 / visible)}%)` }}
          >
            {galleryImages.map((img, i) => (
              <div key={i} className="shrink-0 w-1/2 md:w-1/4 aspect-square rounded overflow-hidden bg-muted">
                <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
        <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-navbar/80 text-navbar-foreground rounded-full p-1 hover:bg-navbar transition-colors">
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default GalleryCarousel;
