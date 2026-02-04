import { motion } from "framer-motion";

const partners = [
  "NASDAQ",
  "Bloomberg",
  "Reuters",
  "TradingView",
  "Coinbase",
  "Robinhood",
  "Fidelity",
  "Schwab",
];

const PartnersSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
        >
          <div className="text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Trusted By More
              <br />
              Than <span className="gradient-text">+90,000</span>
              <br />
              Users
            </h3>
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap justify-center gap-3">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, borderColor: "hsl(185 85% 50% / 0.5)" }}
                  className="partner-badge cursor-default"
                >
                  {partner}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
