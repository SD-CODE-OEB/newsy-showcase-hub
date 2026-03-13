import Navbar from "@/components/Navbar";
import BreakingNewsBanner from "@/components/BreakingNewsBanner";
import BreakingNews from "@/components/BreakingNews";
import HeroBanner from "@/components/HeroBanner";
import TrendingPosts from "@/components/TrendingPosts";
import AdBanner from "@/components/AdBanner";
import SocialConnect from "@/components/SocialConnect";
import GalleryCarousel from "@/components/GalleryCarousel";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <Navbar />
    <BreakingNewsBanner />
    <BreakingNews />
    <HeroBanner />
    <TrendingPosts />
    <AdBanner />
    <SocialConnect />
    <GalleryCarousel />
    <BlogSection />
    <Footer />
  </div>
);

export default Index;
