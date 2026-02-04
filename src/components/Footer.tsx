import { Zap, Twitter, Instagram } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Security",],
  Company: ["About", "Careers", "Press", "Contact"],
  Resources: ["Blog", "Help Center", "API Docs", "Status"],
  Legal: ["Privacy", "Terms", "Cookies", "Licenses"],
};

const socialLinks = [
  { icon: Twitter, href: "https://x.com/elonmusk" },
  { icon: Instagram, href: "https://www.instagram.com/elonmusk" },
];

const Footer = () => {
  return (
    <footer id="contact" className="pt-20 pb-8 border-t border-border/50">
      <div className="container px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Tesla<span className="gradient-text">Mining</span>
              </span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Transforming ideas into intelligent Mining solutions. Your partner in building wealth through smart Mining.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 TeslaMining. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Transforming Ideas into Intelligent Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
