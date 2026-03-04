import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { Link, useLocation } from "react-router-dom"; // Add these imports

const navItems = [
  { name: "Home", path: "/", active: true },
  { name: "About", path: "/about" },
  { name: "Benefits", path: "/benefits" },
  { name: "Mine", path: "/mine" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation(); // Get current location for active state

  // Function to handle navigation and close mobile menu
  const handleNavClick = () => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0); // Scroll to top when navigating
  };

  // Check if a nav item is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass-card px-6 py-3 flex items-center justify-between">
          {/* Logo - Links to Home */}
          <Link to="/" className="flex items-center gap-2" onClick={() => window.scrollTo(0, 0)}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Tesla<span className="gradient-text">Mining</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 glass-card px-2 py-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={isActive(item.path) ? "nav-pill-active" : "nav-pill"}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="btn-ghost text-sm">POWERED BY TESLA</button>
            <Link to="/get-started">
              <button className="btn-primary text-sm" onClick={() => window.scrollTo(0, 0)}>
                Welcome aboard
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 glass-card p-4"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-3 rounded-xl ${
                    isActive(item.path) 
                      ? "bg-primary text-primary-foreground" 
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex gap-2 mt-4">
                <Link to="/signin" className="flex-1" onClick={() => setMobileMenuOpen(false)}>
                  <button className="btn-ghost w-full text-sm">Sign In</button>
                </Link>
                <Link to="/get-started" className="flex-1" onClick={() => setMobileMenuOpen(false)}>
                  <button className="btn-primary w-full text-sm">Get Started</button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;