import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Gallery", path: "/gallery" },
  { label: "Social Connect", path: "/social" },
  { label: "Contact", path: "/contact" },
];

const Footer = () => (
  <footer className="bg-footer text-footer-foreground">
    <div className="container py-8">
      <h3 className="font-heading text-lg font-bold text-center text-footer-foreground mb-4">Footer</h3>
      <div className="flex flex-wrap justify-center gap-6">
        {footerLinks.map((link) => (
          <Link key={link.path} to={link.path} className="text-sm hover:text-footer-accent transition-colors">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
    <div className="bg-navbar text-center py-3">
      <p className="text-xs text-footer-accent font-medium">© 2026 NewsChannel</p>
    </div>
  </footer>
);

export default Footer;
