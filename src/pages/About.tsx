import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <Navbar />
    <main className="container py-10 flex-1">
      <h1 className="font-heading text-3xl font-bold text-foreground mb-6">About Us</h1>
      <div className="bg-card border border-border rounded p-6 space-y-4 text-sm text-foreground leading-relaxed">
        <p>
          NewsChannel is a dedicated media platform committed to bringing you the most relevant updates, stories, and developments from the ground. We believe in honest, straightforward reporting that keeps our audience informed and empowered.
        </p>
        <p>
          Our mission is to serve as the voice of the people — highlighting achievements, addressing concerns, and fostering a well-informed community. From policy updates to grassroots movements, we cover the stories that matter.
        </p>
        <p>
          Founded in 2026, NewsChannel has quickly become a trusted source for news, analysis, and community engagement. Our team of experienced journalists and editors works tirelessly to deliver content that is accurate, timely, and impactful.
        </p>
        <h2 className="font-heading text-xl font-bold pt-4">Our Values</h2>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          <li>Integrity in every story we publish</li>
          <li>Community-first approach to journalism</li>
          <li>Transparency and accountability</li>
          <li>Empowering voices that need to be heard</li>
        </ul>
      </div>
    </main>
    <Footer />
  </div>
);

export default About;
