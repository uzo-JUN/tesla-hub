import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Zap, Award, Battery, Cpu, Globe, Star, ArrowRight, 
  Sparkles, Shield, Rocket, TrendingUp, CheckCircle, 
  DollarSign, Clock, Users, BarChart, 
  Phone, Send, ExternalLink 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import images
import elun from "@/assets/musk1.jpg";

const BenefitsPage = () => {
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

  // Benefits data
  const mainBenefits = [
    {
      icon: TrendingUp,
      title: "Massive Returns",
      description: "Earn up to 80,000% returns on your investment in just 5 hours",
      color: "from-green-500 to-emerald-500",
      value: "80,000%",
    },
    {
      icon: Battery,
      title: "Sustainable Energy",
      description: "100% renewable energy powered by Tesla solar technology",
      color: "from-blue-500 to-cyan-500",
      value: "100% Solar",
    },
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Enterprise-level security with 24/7 monitoring and protection",
      color: "from-purple-500 to-pink-500",
      value: "99.9% Uptime",
    },
    {
      icon: Globe,
      title: "Global Operations",
      description: "Mining facilities in 50+ countries with local support",
      color: "from-orange-500 to-red-500",
      value: "50+ Countries",
    },
    {
      icon: Cpu,
      title: "Cutting-Edge Technology",
      description: "Latest ASIC miners with Tesla battery integration",
      color: "from-indigo-500 to-purple-500",
      value: "450 TH/s",
    },
    {
      icon: Clock,
      title: "Fast Payouts",
      description: "Instant withdrawals and 5-hour return on investment",
      color: "from-yellow-500 to-amber-500",
      value: "5 Hours",
    },
  ];

  // Investment benefits
  const investmentBenefits = [
    {
      amount: "$200 - $500",
      return: "30,000%",
      profit: "$60,000",
      color: "from-green-500 to-emerald-500",
    },
    {
      amount: "$500 - $1,000",
      return: "35,000%",
      profit: "$175,000",
      color: "from-blue-500 to-cyan-500",
    },
    {
      amount: "$1,000 - $5,000",
      return: "40,000%",
      profit: "$400,000",
      color: "from-purple-500 to-pink-500",
    },
    {
      amount: "$5,000 - $10,000",
      return: "45,000%",
      profit: "$2.25M",
      color: "from-orange-500 to-red-500",
    },
  ];

  // Why choose us
  const whyChooseUs = [
    {
      icon: Users,
      title: "1M+ Active Miners",
      description: "Join a global community of successful miners",
    },
    {
      icon: DollarSign,
      title: "$2B+ Total Mined",
      description: "Billions in value generated for our community",
    },
    {
      icon: BarChart,
      title: "Daily Profits",
      description: "Average daily profit of $12,500+ per investor",
    },
    {
      icon: Award,
      title: "Tesla Certified",
      description: "Officially partnered with Tesla energy solutions",
    },
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

      {/* Hero Section with Owner Image */}
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
                <span className="text-blue-400 text-sm font-semibold">TESLA MINING BENEFITS</span>
                <Zap className="w-4 h-4 text-yellow-400" />
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6">
                UNLOCK THE
                <br />
                <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  ULTIMATE BENEFITS
                </span>
              </h1>

              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Experience the future of mining with Tesla's revolutionary technology. 
                Unmatched returns, sustainable energy, and global community support.
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
            </motion.div>

            {/* Right side - Owner Image */}
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
                className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full px-4 py-2 shadow-xl flex items-center gap-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
              >
                <Award className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-bold">BENEFITS</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Stats */}
      <section className="py-12 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10"
              >
                <item.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-white/60">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Benefits Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              KEY <span className="text-blue-500">BENEFITS</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Discover why thousands of miners choose Tesla Mining
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${benefit.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                
                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-transparent transition-all duration-300">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${benefit.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <span className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${benefit.color}`}>
                      {benefit.value}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-white/70">{benefit.description}</p>
                  
                  <div className="mt-6 flex items-center gap-2 text-blue-400">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm">Included</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              INVESTMENT <span className="text-blue-500">RETURNS</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Choose your investment level and get massive returns in just 5 hours
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {investmentBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${benefit.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                
                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-transparent transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-white/60 text-sm">Investment</p>
                      <p className="text-xl font-bold text-white">{benefit.amount}</p>
                    </div>
                    <div className="bg-blue-600/20 rounded-full px-3 py-1">
                      <span className="text-blue-400 text-xs font-bold">5 HOURS</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-white/60 text-sm">Return Rate</p>
                    <p className="text-3xl font-bold text-green-400">{benefit.return}</p>
                  </div>

                  <div className="mb-6">
                    <p className="text-white/60 text-sm">Estimated Profit</p>
                    <p className="text-2xl font-bold text-white">{benefit.profit}</p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleStartMiningClick}
                    className={`w-full bg-gradient-to-r ${benefit.color} text-white py-3 rounded-xl font-semibold transition-all duration-300`}
                  >
                    Invest Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-8 md:p-12 border border-blue-500/30 text-center max-w-4xl mx-auto"
          >
            <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              🎁 SPECIAL WELCOME BONUS 🎁
            </h3>
            <p className="text-xl text-white/80 mb-6">
              New miners get an additional 5,000% bonus on their first investment!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleStartMiningClick}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-yellow-500/30 transition-all duration-300"
              >
                Claim Your Bonus
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white mb-6">What You Get:</h3>
              {[
                "Instant access to mining dashboard",
                "24/7 customer support",
                "Daily profit reports",
                "Tesla energy certificates",
                "Referral bonus program",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-white/80">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Platform Features:</h3>
              {[
                "Real-time profit tracking",
                "Automated payouts",
                "Multi-currency support",
                "Advanced security protocols",
                "Mobile app access",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="text-white/80">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
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
              <p className="text-white/60">Contact us via WhatsApp or Telegram to begin</p>
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
              Our team will assist you within minutes
            </p>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
};

export default BenefitsPage;