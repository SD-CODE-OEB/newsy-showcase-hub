import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialConnect from "@/components/SocialConnect";

const SocialPage = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <Navbar />
    <main className="container py-10 flex-1">
      <h1 className="font-heading text-3xl font-bold text-foreground mb-6">Social Connect</h1>
      <div className="bg-card border border-border rounded p-6">
        <SocialConnect compact />
        <div className="mt-8 space-y-4">
          <p className="text-sm text-muted-foreground text-center">
            Stay connected with us across all major social media platforms. Follow us for real-time updates, behind-the-scenes content, and community discussions.
          </p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default SocialPage;
