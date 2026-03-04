import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, DollarSign, PieChart, Calendar, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const portfolioData = {
    initialInvestment: 500,
    currentValue: 500000,
    growthPercentage: 99900, // 500000/500 * 100 - 100
    investmentDate: "February 5, 2026",
    projectedValue: 750000,
    riskLevel: "Low",
    minerCount: "2,500",
  };

  const stats = [
    { label: "Initial Investment", value: `$${portfolioData.initialInvestment}`, icon: DollarSign },
    { label: "Current Value", value: `$${portfolioData.currentValue.toLocaleString()}`, icon: TrendingUp },
    { label: "Growth", value: `${portfolioData.growthPercentage}%`, icon: PieChart },
    { label: "Invested On", value: portfolioData.investmentDate, icon: Calendar },
    { label: "Risk Level", value: portfolioData.riskLevel, icon: Shield },
    { label: "Active Miners", value: portfolioData.minerCount, icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="glass-card mx-4 md:mx-8 mt-4 rounded-xl">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-xl font-bold gradient-text">Tesla Mining Portfolio</h1>
        </div>
      </nav>

      <div className="container mx-auto px-4 md:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome, <span className="gradient-text"></span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your Tesla Mining investment is actively generating returns through our sustainable mining operations.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Portfolio Overview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Portfolio Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-card p-6 rounded-xl"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <stat.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-sm font-medium text-muted-foreground">{stat.label}</h3>
                  </div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Investment Growth Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card p-8 rounded-xl glow-border"
            >
              <h3 className="text-2xl font-bold mb-6">Investment Growth</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Initial Investment</span>
                  <span className="font-bold">${portfolioData.initialInvestment}</span>
                </div>
                <div className="h-4 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-primary to-primary/60"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Current Value</span>
                  <span className="font-bold text-green-400">${portfolioData.currentValue.toLocaleString()}</span>
                </div>
                <div className="text-center mt-6">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-green-400 font-bold">+{portfolioData.growthPercentage}%</span> total return
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Elon Image & Mining Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Elon Image Card */}
            <div className="glass-card p-6 rounded-xl overflow-hidden">
              <div className="relative group">
                <img 
                  src="/src/assets/ellon.jpg" 
                  alt="Elon Musk Tesla Mining" 
                  className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-2">Tesla Sustainable Mining</h3>
                <p className="text-muted-foreground text-sm">
                  Powered by Tesla's renewable energy infrastructure, our mining operations are 100% carbon neutral.
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Verified Sustainable Energy Source</span>
                </div>
              </div>
            </div>

            {/* Mining Status Card */}
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Mining Status</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Active Miners</span>
                  <span className="font-bold text-primary">{portfolioData.minerCount}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Daily Earnings</span>
                  <span className="font-bold text-green-400">~$1,370</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Monthly Projection</span>
                  <span className="font-bold">~$41,000</span>
                </div>
              </div>
              <button className="w-full mt-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition">
                Withdraw Earnings
              </button>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 glass-card p-8 rounded-xl text-center glow-border"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Scale Your Investment?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Add more funds to your mining portfolio and increase your daily returns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition">
              Invest Additional $500
            </button>
            <button className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition">
              View Mining Dashboard
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;