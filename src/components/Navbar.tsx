import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/PSR.png";

const navLinks = [
{ label: "Home", path: "/" },
{ label: "About", path: "/about" },
{ label: "Gallery", path: "/gallery" },
{ label: "Social", path: "/social" },
{ label: "Contact", path: "/contact" }];


const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-navbar text-navbar-foreground sticky top-0 z-50 backdrop-blur-md bg-navbar/95">
      <div className="container flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <img src={logo} alt="Logo" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-heading font-bold text-navbar-foreground text-base sm:text-lg md:text-2xl truncate max-w-[180px] sm:max-w-none">Ponguleti Srinivasa Reddy</span>
        </Link>
        <button className="md:hidden relative z-50" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) =>
          <li key={link.path}>
              <Link
              to={link.path}
              className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-full hover:bg-navbar-foreground/10 ${
              location.pathname === link.path ?
              "text-footer-accent bg-navbar-foreground/10" :
              "text-navbar-foreground/80 hover:text-navbar-foreground"}`
              }>
              
                {link.label}
                {location.pathname === link.path &&
              <motion.span
                layoutId="nav-indicator"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-footer-accent" />

              }
              </Link>
            </li>
          )}
        </ul>
      </div>
      <AnimatePresence>
        {open &&
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-full left-0 right-0 bg-navbar/98 backdrop-blur-lg border-t border-navbar-foreground/10 z-40">
          
            <ul className="container py-4 space-y-1">
              {navLinks.map((link) =>
            <li key={link.path}>
                  <Link
                to={link.path}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === link.path ?
                "text-footer-accent bg-navbar-foreground/10" :
                "hover:bg-navbar-foreground/5"}`
                }>
                
                    {link.label}
                  </Link>
                </li>
            )}
            </ul>
          </motion.div>
        }
      </AnimatePresence>
    </nav>);

};

export default Navbar;