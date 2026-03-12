import { Link } from "react-router-dom";
import { Zap, ArrowUp } from "lucide-react";

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Gallery", path: "/gallery" },
  { label: "Social", path: "/social" },
  { label: "Contact", path: "/contact" },
];

const Footer = () => (
  <footer className="bg-footer text-footer-foreground relative">
    <div className="container py-10">
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-2 font-heading text-xl font-bold text-footer-accent">
          <Zap size={20} />
          NewsChannel
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {footerLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-sm hover:text-footer-accent transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-footer-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="w-16 h-px bg-footer-foreground/20" />
        <p className="text-xs text-footer-foreground/60">© 2026 NewsChannel. All rights reserved.</p>
      </div>
    </div>
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="absolute right-4 md:right-8 top-6 bg-footer-accent/20 hover:bg-footer-accent text-footer-accent hover:text-footer rounded-full p-2 transition-all duration-200"
    >
      <ArrowUp size={16} />
    </button>
  </footer>
);

export default Footer;
