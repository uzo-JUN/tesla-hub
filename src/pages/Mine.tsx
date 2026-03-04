import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ArrowRight, CheckCircle2, Phone, Send, ExternalLink, Award, Zap, TrendingUp, DollarSign, Clock, Star, Shield, Battery, Cpu, Gauge } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import images (you'll need to add these to your assets folder)
import teslap from "@/assets/teslap.jpg";
import teslao from "@/assets/teslao.jpg";
import teslam from "@/assets/teslam.jpg";
import cybertruck from "@/assets/cybertruck.jpg";

import house1 from "@/assets/house1.jpg";
import house2 from "@/assets/house2.jpg";
import house3 from "@/assets/house3.jpg";
import tesss from "@/assets/tesss.webp"
import musk5 from "@/assets/musk5.jpg";

// Import video - using the correct filename
import elVideo from "@/assets/0303 (1).mp4";

// Investment plans data 
const investmentPlans = [
  { min: "$200", max: "$500", return: "30,000%", profit: "$60,000", time: "5 hours", color: "from-green-500 to-emerald-500" },
  { min: "$500", max: "$1,000", return: "35,000%", profit: "$175,000", time: "5 hours", color: "from-blue-500 to-cyan-500" },
  { min: "$1,000", max: "$5,000", return: "40,000%", profit: "$400,000", time: "5 hours", color: "from-purple-500 to-pink-500" },
  { min: "$5,000", max: "$10,000", return: "45,000%", profit: "$2.25M", time: "5 hours", color: "from-orange-500 to-red-500" },
  { min: "$10,000", max: "$50,000", return: "50,000%", profit: "$5M", time: "5 hours", color: "from-yellow-500 to-amber-500" },
  { min: "$50,000", max: "$100,000", return: "55,000%", profit: "$27.5M", time: "5 hours", color: "from-indigo-500 to-purple-500" },
  { min: "$100,000", max: "$250,000", return: "60,000%", profit: "$60M", time: "5 hours", color: "from-pink-500 to-rose-500" },
  { min: "$250,000", max: "$450,000", return: "80,000%", profit: "$200M", time: "5 hours", color: "from-red-500 to-orange-500" },
];

// Houses with random prices
const houses = [
  { img: house1, price: "$249,000", address: "123 Luxury Lane, Beverly Hills, CA", bedrooms: 4, bathrooms: 3, sqft: "3,200" },
  { img: house2, price: "$189,000", address: "456 Ocean Drive, Miami, FL", bedrooms: 3, bathrooms: 2, sqft: "2,100" },
  { img: house3, price: "$325,000", address: "789 Mountain View, Aspen, CO", bedrooms: 5, bathrooms: 4, sqft: "4,500" },
];

// Tesla cars for sale
const teslaCars = [
  { img: teslap, name: "Tesla Model S Plaid", price: "$89,990", speed: "0-60mph in 1.99s", range: "396 mi", color: "from-red-500 to-orange-500" },
  { img: teslao, name: "Tesla Model 3", price: "$42,990", speed: "0-60mph in 3.1s", range: "358 mi", color: "from-blue-500 to-cyan-500" },
  { img: teslam, name: "Tesla Model X", price: "$79,990", speed: "0-60mph in 2.5s", range: "348 mi", color: "from-purple-500 to-pink-500" },
  { img: cybertruck, name: "Cybertruck", price: "$69,990", speed: "0-60mph in 2.9s", range: "500+ mi", color: "from-gray-500 to-slate-500" },
];

// Mining statistics
const miningStats = [
  { icon: Battery, label: "Energy Efficiency", value: "98.7%", color: "text-green-500" },
  { icon: Cpu, label: "Hash Rate", value: "450 TH/s", color: "text-blue-500" },
  { icon: Gauge, label: "Daily Profit", value: "$12,500+", color: "text-yellow-500" },
  { icon: Clock, label: "Payout Time", value: "5 Hours", color: "text-purple-500" },
];

const TeslaMiningPage = () => {
  const [showGiveawayModal, setShowGiveawayModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showInvestmentModal, setShowInvestmentModal] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleGiveawayClick = () => {
    setShowGiveawayModal(true);
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/19086351302", "_blank");
  };

  const handleTelegramClick = () => {
    window.open("https://t.me/Welcome1190", "_blank");
  };

  const handleInvestClick = (plan) => {
    setSelectedPlan(plan);
    setShowInvestmentModal(true);
  };

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
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section with Background Video */}
      <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background - Responsive */}
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
                  transform: 'translate(-50%, -50%)',
                  // Adjust object position for mobile if needed
                  objectPosition: isMobile ? 'center' : 'center',
                }}
                onError={() => setVideoError(true)}
              >
                <source src={elVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            // Fallback gradient if video fails to load
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black" />
          )}
          
          {/* Dark overlay for better text visibility - slightly lighter on mobile */}
          <div className={`absolute inset-0 ${isMobile ? 'bg-gradient-to-r from-black/80 via-black/60 to-black/80' : 'bg-gradient-to-r from-black/90 via-black/70 to-black/90'}`}></div>
          
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

        {/* Animated particles - fewer on mobile for performance */}
        {[...Array(isMobile ? 15 : 30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 md:w-1 md:h-1 bg-blue-500/50 rounded-full z-10"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            animate={{
              y: [0, isMobile ? -50 : -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: isMobile ? 5 + Math.random() * 5 : 8 + Math.random() * 7,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}

        <div className="relative z-20 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8 border border-blue-500/30"
            >
              <Zap className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
              <span className="text-white/90 text-xs md:text-sm font-medium">TESLA MINING • OFFICIAL</span>
              <Zap className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 md:mb-6 px-2">
              MINE WITH
              <br />
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                TESLA ENERGY
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto mb-6 md:mb-8 px-4">
              Revolutionary mining technology powered by Tesla's sustainable energy solutions. 
              Turn your investment into massive returns in just 5 hours.
            </p>

            {/* Stats - Responsive grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 max-w-3xl mx-auto mb-8 md:mb-10 px-2">
              {miningStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-lg md:rounded-xl p-2 md:p-4 border border-white/10"
                >
                  <stat.icon className={`w-4 h-4 md:w-6 md:h-6 ${stat.color} mx-auto mb-1 md:mb-2`} />
                  <p className="text-xs sm:text-sm md:text-lg font-bold text-white">{stat.value}</p>
                  <p className="text-[8px] sm:text-[10px] md:text-xs text-white/60">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('investment-plans');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 md:px-10 py-3 md:py-5 rounded-full text-sm md:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2 md:gap-3"
            >
              Start Mining Now
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll indicator - Hidden on very small screens */}
        <motion.div
          className="absolute bottom-5 md:bottom-10 left-1/2 transform -translate-x-1/2 z-20 hidden sm:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 md:h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Investment Plans Section - Responsive */}
      <section id="investment-plans" className="py-12 md:py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
              INVESTMENT <span className="text-blue-500">PLANS</span>
            </h2>
            <p className="text-sm md:text-base lg:text-xl text-white/70 max-w-3xl mx-auto px-4">
              Choose your investment level and get massive returns in just 5 hours
            </p>
          </motion.div>

          {/* Investment Plans Grid - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {investmentPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${plan.color} rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                
                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-700 hover:border-transparent transition-all duration-300">
                  <div className="flex justify-between items-start mb-3 md:mb-4">
                    <div>
                      <p className="text-white/60 text-xs md:text-sm">Investment</p>
                      <p className="text-lg md:text-2xl font-bold text-white">{plan.min} - {plan.max}</p>
                    </div>
                    <div className="bg-blue-600/20 rounded-full px-2 md:px-3 py-0.5 md:py-1">
                      <span className="text-blue-400 text-[10px] md:text-xs font-bold">5 HOURS</span>
                    </div>
                  </div>

                  <div className="mb-4 md:mb-6">
                    <p className="text-white/60 text-xs md:text-sm">Return Rate</p>
                    <p className="text-2xl md:text-3xl font-bold text-green-400">{plan.return}</p>
                  </div>

                  <div className="mb-4 md:mb-6">
                    <p className="text-white/60 text-xs md:text-sm">Estimated Profit</p>
                    <p className="text-xl md:text-2xl font-bold text-white">{plan.profit}</p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleInvestClick(plan)}
                    className={`w-full bg-gradient-to-r ${plan.color} text-white py-2 md:py-3 rounded-lg md:rounded-xl text-sm md:text-base font-semibold transition-all duration-300`}
                  >
                    Invest Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Investment Highlight - Responsive */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 md:mt-12 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-blue-500/30 text-center mx-2"
          >
            <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4">
              🔥 SPECIAL OFFER: Invest $200 and get 30,000% returns in just 5 hours! 🔥
            </h3>
            <p className="text-xs md:text-sm lg:text-base text-white/80 mb-4 md:mb-6">
              Limited slots available. Join thousands of successful miners today.
            </p>
            <button
              onClick={() => handleInvestClick(investmentPlans[0])}
              className="bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base lg:text-lg hover:bg-gray-200 transition-all duration-300"
            >
              Get Started with $200
            </button>
          </motion.div>
        </div>
      </section>

      {/* Houses Section - Responsive */}
      <section className="py-12 md:py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
              LUXURY <span className="text-blue-500">PROPERTIES</span>
            </h2>
            <p className="text-sm md:text-base lg:text-xl text-white/70 max-w-3xl mx-auto px-4">
              Acquire your dream home with mining profits
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {houses.map((house, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-900 rounded-xl md:rounded-2xl overflow-hidden border border-gray-800 group"
              >
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img 
                    src={house.img} 
                    alt={`Property ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-blue-600 text-white px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs md:text-sm font-bold">
                    {house.price}
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <p className="text-white/70 text-xs md:text-sm mb-2">{house.address}</p>
                  <div className="flex gap-3 md:gap-4 mb-3 md:mb-4">
                    <span className="text-white/60 text-xs md:text-sm">{house.bedrooms} beds</span>
                    <span className="text-white/60 text-xs md:text-sm">{house.bathrooms} baths</span>
                    <span className="text-white/60 text-xs md:text-sm">{house.sqft} sqft</span>
                  </div>
                  <p className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-3 md:mb-4">{house.price}</p>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 md:py-3 rounded-lg md:rounded-xl text-sm md:text-base font-semibold transition-all duration-300">
                    Schedule Viewing
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Buy A Tesla Section - Responsive */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
              BUY A <span className="text-blue-500">TESLA</span>
            </h2>
            <p className="text-sm md:text-base lg:text-xl text-white/70 max-w-3xl mx-auto px-4">
              Purchase directly with cryptocurrency or mining profits
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {teslaCars.map((car, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${car.color} rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                
                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl md:rounded-2xl overflow-hidden border border-gray-700 group-hover:border-transparent transition-all duration-300">
                  <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                    <img 
                      src={car.img} 
                      alt={car.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 md:p-6">
                    <h3 className="text-base md:text-lg lg:text-xl font-bold text-white mb-1 md:mb-2">{car.name}</h3>
                    <div className="flex justify-between text-xs md:text-sm text-white/60 mb-2 md:mb-3">
                      <span>{car.speed}</span>
                      <span>{car.range}</span>
                    </div>
                    <p className="text-base md:text-lg lg:text-2xl font-bold text-white mb-3 md:mb-4">{car.price}</p>
                    <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-2 md:py-3 rounded-lg md:rounded-xl text-sm md:text-base font-semibold transition-all duration-300">
                      Buy with Crypto
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tesla Giveaway Section - Responsive */}
      <section className="py-12 md:py-20 bg-black relative overflow-hidden">
        {/* Background image of Elon */}
        <div 
          className="absolute inset-0 opacity-10 md:opacity-20"
          style={{
            backgroundImage: `url(${musk5})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <div className="inline-flex items-center gap-2 bg-yellow-600/20 rounded-full px-3 md:px-4 py-1 md:py-2 mb-4 md:mb-6 border border-yellow-500/30">
                <Award className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
                <span className="text-yellow-400 text-xs md:text-sm font-semibold">LIMITED TIME</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
                TESLA
                <br />
                <span className="text-yellow-500">GIVEAWAY</span>
              </h2>

              <p className="text-sm md:text-base lg:text-xl text-white/80 mb-6 md:mb-8 px-4 md:px-0">
                Win a brand new Tesla Model S Plaid! Enter now for a chance to drive the future.
              </p>

              <div className="space-y-2 md:space-y-4 mb-6 md:mb-8 max-w-md mx-auto md:mx-0">
                {[
                  "One lucky winner every month",
                  "Fully loaded Tesla Model S Plaid",
                  "Includes lifetime supercharging",
                  "Winner announced live on Twitter",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 md:gap-3 justify-center md:justify-start"
                  >
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-yellow-500 flex-shrink-0" />
                    <span className="text-xs md:text-sm lg:text-base text-white/90">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* Big Giveaway Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGiveawayClick}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 md:px-8 lg:px-12 py-4 md:py-5 lg:py-6 rounded-xl md:rounded-2xl text-lg md:text-xl lg:text-2xl font-bold shadow-2xl hover:shadow-yellow-500/30 transition-all duration-300 w-full md:w-auto"
              >
                APPLY FOR GIVEAWAY
              </motion.button>
            </motion.div>

            {/* Right side - Elon image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative max-w-md mx-auto md:max-w-none"
            >
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border-4 border-yellow-500/30">
                <img 
                  src={tesss} 
                  alt="Elon Musk"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 md:bottom-4 lg:bottom-6 left-3 md:left-4 lg:left-6 right-3 md:right-4 lg:right-6">
                  <p className="text-white text-xs md:text-sm lg:text-lg font-semibold">"The future is electric"</p>
                  <p className="text-white/80 text-xs md:text-sm lg:text-base">- Elon Musk</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Modal - Responsive */}
      {showInvestmentModal && selectedPlan && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-3 md:p-4"
          onClick={() => setShowInvestmentModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl md:rounded-3xl p-5 md:p-8 max-w-md w-full border border-blue-500/30 relative mx-3 md:mx-0"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowInvestmentModal(false)}
              className="absolute top-3 right-3 md:top-4 md:right-4 text-white/60 hover:text-white text-xl md:text-2xl"
            >
              ×
            </button>

            <div className="text-center mb-6 md:mb-8">
              <TrendingUp className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-green-500 mx-auto mb-3 md:mb-4" />
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">Confirm Investment</h3>
              <p className="text-xs md:text-sm lg:text-base text-white/60">You've selected the following plan:</p>
            </div>

            <div className="bg-gray-800/50 rounded-lg md:rounded-xl p-4 md:p-6 mb-4 md:mb-6">
              <div className="flex justify-between mb-2 text-xs md:text-sm lg:text-base">
                <span className="text-white/60">Investment Range:</span>
                <span className="text-white font-bold">{selectedPlan.min} - {selectedPlan.max}</span>
              </div>
              <div className="flex justify-between mb-2 text-xs md:text-sm lg:text-base">
                <span className="text-white/60">Return Rate:</span>
                <span className="text-green-400 font-bold">{selectedPlan.return}</span>
              </div>
              <div className="flex justify-between mb-2 text-xs md:text-sm lg:text-base">
                <span className="text-white/60">Estimated Profit:</span>
                <span className="text-white font-bold">{selectedPlan.profit}</span>
              </div>
              <div className="flex justify-between text-xs md:text-sm lg:text-base">
                <span className="text-white/60">Payout Time:</span>
                <span className="text-blue-400 font-bold">{selectedPlan.time}</span>
              </div>
            </div>

            <p className="text-white/60 text-xs md:text-sm text-center mb-4 md:mb-6">
              Our team will contact you within 5 minutes to complete your investment.
            </p>

            <div className="space-y-2 md:space-y-3">
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 md:py-4 rounded-lg md:rounded-xl text-sm md:text-base font-semibold flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                Contact via WhatsApp
              </button>
              <button
                onClick={handleTelegramClick}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 md:py-4 rounded-lg md:rounded-xl text-sm md:text-base font-semibold flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 md:w-5 md:h-5" />
                Contact via Telegram
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Giveaway Modal - Responsive */}
      {showGiveawayModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-3 md:p-4"
          onClick={() => setShowGiveawayModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl md:rounded-3xl p-5 md:p-8 max-w-md w-full border border-yellow-500/30 relative mx-3 md:mx-0"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowGiveawayModal(false)}
              className="absolute top-3 right-3 md:top-4 md:right-4 text-white/60 hover:text-white text-xl md:text-2xl"
            >
              ×
            </button>

            <div className="text-center mb-6 md:mb-8">
              <Award className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-yellow-500 mx-auto mb-3 md:mb-4" />
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">Enter Giveaway</h3>
              <p className="text-xs md:text-sm lg:text-base text-white/60">Contact us via WhatsApp or Telegram to enter</p>
            </div>

            <div className="space-y-3 md:space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 md:py-4 lg:py-5 rounded-lg md:rounded-xl font-semibold text-sm md:text-base lg:text-lg flex items-center justify-center gap-2 md:gap-3 transition-all duration-300"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                <span className="hidden sm:inline">WhatsApp:</span> +1 (908) 635-1302
                <ExternalLink className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleTelegramClick}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 md:py-4 lg:py-5 rounded-lg md:rounded-xl font-semibold text-sm md:text-base lg:text-lg flex items-center justify-center gap-2 md:gap-3 transition-all duration-300"
              >
                <Send className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                <span className="hidden sm:inline">Telegram:</span> @Welcome1190
                <ExternalLink className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
              </motion.button>
            </div>

            <p className="text-white/40 text-xs text-center mt-6">
              By proceeding, you agree to our terms and conditions
            </p>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
};

export default TeslaMiningPage;