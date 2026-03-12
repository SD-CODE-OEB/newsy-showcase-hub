import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const images = [
  "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1504711434969-e33886168d5c?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop",
];

const GalleryPage = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <Navbar />
    <main className="container py-10 flex-1">
      <h1 className="font-heading text-3xl font-bold text-foreground mb-6">Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <div key={i} className="aspect-square rounded overflow-hidden bg-muted">
            <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
          </div>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default GalleryPage;
