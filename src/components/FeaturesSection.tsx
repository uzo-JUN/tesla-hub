import { motion } from "framer-motion";
import { Brain, Shield, Zap, BarChart3, Wallet, Clock } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Advanced algorithms analyze market trends and optimize your portfolio in real-time.",
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "Your investments are protected with military-grade encryption and multi-factor authentication.",
  },
  {
    icon: Zap,
    title: "Instant Transactions",
    description: "Execute trades in milliseconds with our high-frequency trading infrastructure.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track Tesla stock performance with live charts, predictions, and market insights.",
  },
  {
    icon: Wallet,
    title: "Smart Portfolio",
    description: "Automated diversification strategies to maximize returns while minimizing risk.",
  },
  {
    icon: Clock,
    title: "24/7 Market Access",
    description: "Trade anytime, anywhere with our always-on global trading platform.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="benefits" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(260_80%_60%/0.05),transparent_70%)]" />

      <div className="container px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Fintech Evolved
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Empowering Finances,
            <br />
            <span className="gradient-text">Powered By Tesla</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Your Financial Ally with AI Precision. Experience the future of mining with cutting-edge technology.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="feature-card group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
