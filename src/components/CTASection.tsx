import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom"; // Add both imports
import muskBg from "@/assets/musk1.jpg"; // Import the Elon Musk image

const benefits = [
  "No hidden fees or commissions",
  "Instant portfolio diversification",
];

const CTASection = () => {
  const navigate = useNavigate();

  const handleStartJourney = (e) => {
    const confirmStart = window.confirm(
      "Are you ready to start your investment journey with Tesla Mining?"
    );
    
    if (!confirmStart) {
      e.preventDefault(); // Prevent navigation if user cancels
    } else {
      // Scroll to top when navigating
      setTimeout(() => window.scrollTo(0, 0), 100);
    }
  };

  return (
    <section id="invest" className="py-24 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${muskBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(185_85%_50%/0.2),transparent_60%)] z-1" />

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-16 text-center max-w-4xl mx-auto glow-border bg-black/30 backdrop-blur-sm border-white/10"
        >
          <span className="inline-block text-primary text-sm font-medium tracking-wider uppercase mb-4">
            Started Your Journey
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            WELCOME
            <br />
            <span className="text-primary">TO THE FUTURE OF MINING</span>
          </h2>
          
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
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
                <span className="text-white/90 text-sm">{benefit}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons - Navigates to mine page with confirmation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/mine" onClick={handleStartJourney}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary flex items-center justify-center gap-2 text-lg px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                START YOUR JOURNEY
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>

          {/* Optional: Small text below button */}
          <p className="text-white/60 text-sm mt-6">
            Click to begin your investment journey with Elon Musk's revolutionary mining technology
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;