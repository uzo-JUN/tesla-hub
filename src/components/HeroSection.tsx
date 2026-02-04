import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Shield, Users } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import card3d from "@/assets/card-3d.png";

const stats = [
  { value: "150K+", label: "Active Investors", icon: Users },
  { value: "$2.5B+", label: "Assets Managed", icon: TrendingUp },
  { value: "99.9%", label: "Uptime Security", icon: Shield },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(185_85%_50%/0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(260_80%_60%/0.05),transparent_50%)]" />
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "linear-gradient(to right, hsl(220 25% 15% / 0.3) 1px, transparent 1px), linear-gradient(to bottom, hsl(220 25% 15% / 0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10 px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">Future of Mining</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              <span className="text-foreground">WELCOME</span>
              <br />
              <span className="gradient-text glow-text">PATRICIA</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Real-time AI analysis and user-centered features make this more than a platform—it's your partner in building wealth through Tesla Mining.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary flex items-center gap-2"
              >
                Started Mining
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Dashboard Image */}
            <div className="relative floating-element">
              <div className="glass-card p-2 glow-border">
                <img
                  src={heroDashboard}
                  alt="Tesla Investment Dashboard"
                  className="w-full rounded-xl"
                />
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-10 -left-10 w-48 md:w-64"
              style={{ animation: "float 6s ease-in-out infinite 1s" }}
            >
              <img
                src={card3d}
                alt="Investment Card"
                className="w-full drop-shadow-2xl"
              />
            </motion.div>

            {/* Floating Stat Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute top-10 -right-5 glass-card px-4 py-3 pulse-glow"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">+24.5%</div>
                  <div className="text-xs text-muted-foreground">This Month</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
