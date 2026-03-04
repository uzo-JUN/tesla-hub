import { Zap, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom"; // Add this import

const footerLinks = {
  Product: ["Features", "Pricing", "Security"],
  Company: ["About", "Benefits", "Mine"],
  Legal: ["Privacy", "Licenses"],
  Office: [
    "Boca Chica, Texas",
    "Launch Facilities :",
    "Kennedy Space Center (LC-39A): Florida",
    "Cape Canaveral Space Launch Complex 40: Florida",
    "Vandenberg Space Force Base (SLC-4E): California"
  ],
};

const socialLinks = [
  { icon: Twitter, href: "https://x.com/elonmusk" },
  { icon: Instagram, href: "https://www.instagram.com/elonmusk" },
];

// Map link names to actual paths
const getPath = (link: string): string => {
  const pathMap: Record<string, string> = {
    "Features": "/features",
    "Pricing": "/pricing",
    "Security": "/security",
    "About": "/about",
    "Benefits": "/benefits",
    "Mine": "/mine",
    "Privacy": "/privacy",
    "Licenses": "/licenses",
  };
  return pathMap[link] || "#";
};

// Function to handle scroll to top
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const Footer = () => {
  return (
    <footer id="contact" className="pt-20 pb-8 border-t border-border/50 bg-black text-white">
      <div className="container px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" onClick={scrollToTop} className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Tesla<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Mining</span>
              </span>
            </Link>
            <p className="text-white/60 mb-6 max-w-sm">
              Transforming ideas into intelligent Mining solutions. Your partner in building wealth through smart Mining.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-blue-400 hover:border-blue-400 transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => {
                  // Check if it's an office location (not a navigable link)
                  if (category === "Office" || link.includes(":") || link.includes(",")) {
                    return (
                      <li key={link} className="text-white/60 text-sm">
                        {link}
                      </li>
                    );
                  }
                  // Regular navigable links
                  return (
                    <li key={link}>
                      <Link
                        to={getPath(link)}
                        onClick={scrollToTop}
                        className="text-white/60 hover:text-blue-400 transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2008 TeslaMining. All rights reserved.
          </p>
          <p className="text-white/40 text-sm">
            Transforming Ideas into Intelligent Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;