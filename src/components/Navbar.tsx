import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
{ label: "Home", path: "/" },
{ label: "About", path: "/about" },
{ label: "Gallery", path: "/gallery" },
{ label: "Social Connect", path: "/social" },
{ label: "Contact", path: "/contact" }];


const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-navbar text-navbar-foreground">
      <div className="container flex items-center justify-between py-3">
        <Link to="/" className="font-heading text-xl font-bold tracking-wide">
          ​Sample Page 
        </Link>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul className={`${open ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:static top-14 left-0 right-0 bg-navbar md:bg-transparent z-50 gap-1 md:gap-6 p-4 md:p-0`}>
          {navLinks.map((link) =>
          <li key={link.path}>
              <Link
              to={link.path}
              onClick={() => setOpen(false)}
              className={`block px-3 py-1.5 text-sm font-semibold tracking-wide transition-colors hover:text-footer-accent ${
              location.pathname === link.path ? "text-footer-accent border-b-2 border-footer-accent" : ""}`
              }>
              
                {link.label}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>);

};

export default Navbar;