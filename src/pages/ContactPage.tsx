import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="container py-10 flex-1 max-w-xl">
        <h1 className="font-heading text-3xl font-bold text-foreground mb-6">Contact Us</h1>
        {submitted ? (
          <div className="bg-card border border-border rounded p-6 text-center">
            <p className="text-foreground font-medium">Thank you for reaching out! We'll get back to you soon.</p>
          </div>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="bg-card border border-border rounded p-6 space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Name</label>
              <input required className="w-full border border-input rounded px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ring" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Email</label>
              <input required type="email" className="w-full border border-input rounded px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ring" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Message</label>
              <textarea required rows={5} className="w-full border border-input rounded px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ring" />
            </div>
            <button type="submit" className="bg-primary text-primary-foreground px-6 py-2 rounded text-sm font-semibold hover:bg-primary/90 transition-colors">
              Send Message
            </button>
          </form>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
