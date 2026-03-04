import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ArrowRight, TrendingUp, Shield, Users } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import card3d from "@/assets/card-3d.png";

// Import video
import bgVideo from "@/assets/0303.mp4";

const stats = [
  { value: "150K+", label: "Active Investors", icon: Users },
  { value: "$2.5B+", label: "Assets Managed", icon: TrendingUp },
  { value: "99.9%", label: "Uptime Security", icon: Shield },
];

const HeroSection = () => {
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  // Try to play video when component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
        setVideoError(true);
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        {!videoError ? (
          <div className="relative w-full h-full">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                minWidth: '100%',
                minHeight: '100%',
                width: 'auto',
                height: 'auto',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
              onError={() => setVideoError(true)}
            >
              <source src={bgVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ) : (
          // Fallback gradient if video fails to load
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black" />
        )}
        
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Animated overlay effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent"
          animate={{
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
      </div>

      {/* Background Effects - Overlay on top of video */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(185_85%_50%/0.08),transparent_50%)] z-1" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(260_80%_60%/0.05),transparent_50%)] z-1" />
      <div 
        className="absolute inset-0 opacity-20 z-1"
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
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6 bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-white">Future of Mining</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">WELCOME TO</span>
              <br />
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                TESLA MINING
              </span>
            </h1>

            <p className="text-lg text-white/80 max-w-lg mb-8 leading-relaxed">
              Real-time AI analysis and user-centered features make this more than a platform—it's your partner in building wealth through Tesla Mining.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
              >
                Start Mining
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Learn More
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
                  <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-white/60">
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
              <div className="glass-card p-2 glow-border bg-white/10 backdrop-blur-sm border border-white/20">
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
              className="absolute top-10 -right-5 glass-card px-4 py-3 pulse-glow bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">+24.5%</div>
                  <div className="text-xs text-white/60">This Month</div>
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