import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Zap, Award, Battery, Cpu, Globe, Star, ArrowRight, ChevronRight, Sparkles, Shield, Rocket, TrendingUp, Phone, Send, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import images
import elun from "@/assets/elun.jpg";
import tesla2 from "@/assets/tesla2.jpg";
import ella4 from "@/assets/ella4.jpg";

const AboutPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleStartMiningClick = () => {
    setShowContactModal(true);
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/19086351302", "_blank");
  };

  const handleTelegramClick = () => {
    window.open("https://t.me/Welcome1190", "_blank");
  };

  // Company milestones
  const milestones = [
    { year: "2020", event: "Tesla Mining Founded", description: "Elon Musk announces revolutionary mining technology" },
    { year: "2021", event: "First Mining Farm", description: "Opened first sustainable mining facility in Texas" },
    { year: "2022", event: "Global Expansion", description: "Expanded to 12 countries with 100% renewable energy" },
    { year: "2023", event: "1 Million Users", description: "Reached 1 million miners worldwide" },
    { year: "2024", event: "Tesla Integration", description: "Full integration with Tesla energy products" },
  ];

  // Core values
  const coreValues = [
    { icon: Battery, title: "Sustainable Energy", description: "100% renewable energy powering all mining operations", color: "from-green-500 to-emerald-500" },
    { icon: Shield, title: "Secure & Transparent", description: "Bank-grade security with complete transparency", color: "from-blue-500 to-cyan-500" },
    { icon: Rocket, title: "Innovation First", description: "Cutting-edge technology for maximum efficiency", color: "from-purple-500 to-pink-500" },
    { icon: Globe, title: "Global Community", description: "Serving miners in over 50 countries worldwide", color: "from-orange-500 to-red-500" },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Sticky Navbar */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/95 backdrop-blur-md shadow-lg border-b border-blue-500/20" : "bg-transparent"
        }`}
      >
        <Navbar />
      </motion.div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20">
          <motion.div
            className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, 30, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 12, repeat: Infinity }}
          />
          
          {/* Grid pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)",
              backgroundSize: "40px 40px"
            }}
          />
        </div>

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-blue-600/20 rounded-full px-4 py-2 mb-6 border border-blue-500/30"
              >
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-blue-400 text-sm font-semibold">ABOUT TESLA MINING</span>
                <Zap className="w-4 h-4 text-yellow-400" />
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6">
                REVOLUTIONIZING
                <br />
                <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                   MINING
                </span>
              </h1>

              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Tesla Mining combines Elon Musk's visionary technology with sustainable energy 
                solutions to create the world's most efficient cryptocurrency mining operation.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleStartMiningClick}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
                >
                  Start Mining
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-10">
                {[
                  { value: "1M+", label: "Miners", color: "text-blue-400" },
                  { value: "50+", label: "Countries", color: "text-cyan-400" },
                  { value: "$2B+", label: "Mined", color: "text-green-400" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="text-center"
                  >
                    <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                    <p className="text-xs text-white/60">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right side - Elon Musk Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
                <div className="relative rounded-3xl overflow-hidden border-2 border-blue-500/30">
                  <img 
                    src={elun} 
                    alt="Elon Musk"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white text-lg font-semibold">"The future is electric"</p>
                    <p className="text-white/80">- Elon Musk, Founder</p>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full px-4 py-2 shadow-xl flex items-center gap-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
              >
                <Award className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-bold">VISIONARY</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Elon Musk & Tesla Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Tesla Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={tesla2} 
                  alt="Tesla"
                  className="w-full h-auto object-cover rounded-3xl border-2 border-blue-500/30 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating stats */}
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-black/90 backdrop-blur-sm rounded-xl p-3 border border-blue-500/30"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring" }}
                >
                  <div className="flex items-center gap-2">
                    <Battery className="w-5 h-5 text-green-500" />
                    <span className="text-white text-sm">98% Efficiency</span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -top-4 -right-4 bg-black/90 backdrop-blur-sm rounded-xl p-3 border border-purple-500/30"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: "spring" }}
                >
                  <div className="flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-blue-500" />
                    <span className="text-white text-sm">450 TH/s</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right side - Content about Elon and Tesla */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4 border-b border-blue-500/30 pb-2">
                THE VISIONARY
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                ELON MUSK & 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                  TESLA INNOVATION
                </span>
              </h2>

              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Elon Musk's vision extends beyond electric vehicles. Tesla Mining represents the 
                next frontier in sustainable cryptocurrency mining, utilizing Tesla's advanced 
                battery technology and solar energy solutions.
              </p>

              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Our mining facilities are powered entirely by Tesla solar arrays and Powerwall 
                batteries, creating the world's first carbon-negative mining operation. This 
                revolutionary approach combines profitability with environmental responsibility.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Tesla Partnership", value: "Official" },
                  { label: "Energy Source", value: "100% Solar" },
                  { label: "Mining Farms", value: "12 Global" },
                  { label: "Carbon Impact", value: "Negative" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                  >
                    <p className="text-white/60 text-sm">{item.label}</p>
                    <p className="text-white font-bold text-lg">{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section with ella4 image */}
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Background pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)",
            backgroundSize: "40px 40px"
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content about Tesla */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-purple-400 text-sm font-semibold uppercase tracking-wider mb-4 border-b border-purple-500/30 pb-2">
                OUR MISSION
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                POWERING THE FUTURE
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                  WITH TESLA TECHNOLOGY
                </span>
              </h2>

              <p className="text-white/70 text-lg leading-relaxed mb-6">
                At Tesla Mining, we believe that cryptocurrency mining should be both profitable 
                and sustainable. By harnessing Tesla's cutting-edge energy solutions, we've created 
                a mining ecosystem that sets new standards for efficiency and environmental responsibility.
              </p>

              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Our state-of-the-art facilities utilize Tesla's latest innovations in battery storage 
                and solar technology, ensuring that every Bitcoin mined contributes to a greener planet. 
                Join us in revolutionizing the future of finance.
              </p>

              {/* Core Values */}
              <div className="grid grid-cols-2 gap-4">
                {coreValues.slice(0, 2).map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                  >
                    <value.icon className={`w-6 h-6 text-${value.color.split(' ')[1]} mb-2`} />
                    <h3 className="text-white font-bold mb-1">{value.title}</h3>
                    <p className="text-white/60 text-xs">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right side - ella4 Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
                <img 
                  src={ella4} 
                  alt="Tesla Technology"
                  className="w-full h-auto object-cover rounded-3xl border-2 border-purple-500/30 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating badge */}
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full px-4 py-2 shadow-xl flex items-center gap-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring" }}
                >
                  <Sparkles className="w-4 h-4 text-white" />
                  <span className="text-white text-sm font-bold">INNOVATION</span>
                </motion.div>

                {/* Quote overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <p className="text-white text-sm italic">
                    "The sustainable future of mining is here, powered by Tesla."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section - Remaining values */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreValues.slice(2, 4).map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-500 group"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${value.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-white/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30 relative overflow-hidden">
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, #3b82f6 0%, transparent 50%)",
              "radial-gradient(circle at 80% 70%, #8b5cf6 0%, transparent 50%)",
              "radial-gradient(circle at 20% 30%, #3b82f6 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              READY TO JOIN THE
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                TESLA MINING REVOLUTION?
              </span>
            </h2>
            
            <p className="text-xl text-white/70 mb-10">
              Start your mining journey today and be part of the sustainable future of cryptocurrency.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleStartMiningClick}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
              >
                Start Mining Now
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Modal */}
      {showContactModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowContactModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 max-w-md w-full border border-blue-500/30 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white text-2xl"
            >
              ×
            </button>

            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Start Mining</h3>
              <p className="text-white/60">Contact us via WhatsApp or Telegram to begin your mining journey</p>
            </div>

            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-5 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300"
              >
                <Phone className="w-6 h-6" />
                WhatsApp: +1 (908) 635-1302
                <ExternalLink className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleTelegramClick}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300"
              >
                <Send className="w-6 h-6" />
                Telegram: @Welcome1190
                <ExternalLink className="w-5 h-5" />
              </motion.button>
            </div>

            <p className="text-white/40 text-sm text-center mt-6">
              I will personally assist you with setting up your mining operation
            </p>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
};

export default AboutPage;