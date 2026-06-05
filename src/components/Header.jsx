import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinkClasses = ({ isActive }) =>
    `block px-3 py-2 text-base font-medium transition-colors ${
      isActive ? "text-cyan-400" : "text-zinc-400 hover:text-zinc-100"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-heading font-bold text-zinc-100 hover:text-cyan-400 transition-colors"
        >
          Portfolio<span className="text-cyan-400">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <NavLink to="/" className={navLinkClasses}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClasses}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClasses}>
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-zinc-950/95 backdrop-blur-md shadow-2xl border-b border-zinc-800 px-4 pt-2 pb-4 space-y-1 absolute w-full left-0">
          <NavLink to="/" onClick={toggleMenu} className={navLinkClasses}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={toggleMenu} className={navLinkClasses}>
            About
          </NavLink>
          <NavLink
            to="/contact"
            onClick={toggleMenu}
            className={navLinkClasses}
          >
            Contact
          </NavLink>
        </nav>
      )}
    </header>
  );
}

export default Header;
