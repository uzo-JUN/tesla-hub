import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom"; // ADD THIS IMPORT

const benefits = [
  "No hidden fees or commissions",
  "Started with $500",
  "Instant portfolio diversification",
];

const CTASection = () => {
  return (
    <section id="invest" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(185_85%_50%/0.1),transparent_60%)]" />

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-16 text-center max-w-4xl mx-auto glow-border"
        >
          <span className="inline-block text-primary text-sm font-medium tracking-wider uppercase mb-4">
            Started Your Journey
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            WELCOME PATRICIA
            <br />
            <span className="gradient-text"></span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
             Thousands of smart miners are already building their future with Tesla mining.
          </p>

          {/* Benefits */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3 text-left"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground text-sm">{benefit}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons - UPDATED WITH LINK */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/Portfolio">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary flex items-center justify-center gap-2 text-lg px-8 py-4"
              >
                CLICK TO VIEW PORTFOLIO
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;