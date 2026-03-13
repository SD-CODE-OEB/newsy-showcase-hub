import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";
import gallery5 from "@/assets/gallery5.jpg";
import gallery6 from "@/assets/gallery6.jpg";
import gallery7 from "@/assets/gallery7.jpg";
import gallery8 from "@/assets/gallery8.jpg";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8];

const GalleryPage = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <Navbar />
    <main className="container py-10 flex-1">
      <h1 className="font-heading text-3xl font-bold text-foreground mb-6">Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <div key={i} className="aspect-square rounded-xl overflow-hidden bg-muted">
            <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
          </div>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default GalleryPage;
