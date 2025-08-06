import { useState } from "react";
import { Card } from "./ui/card";
import { Zap, Clock, Brain, Cog, ChevronRight, TrendingUp, Shield, Cpu } from "lucide-react";
import { motion } from "motion/react";

const benefits = [
  {
    icon: Brain,
    title: "100% Logical Decisions",
    description: "No emotional interference. No coffee breaks. No human error. Just pure, calculated efficiency driving every decision with mathematical precision.",
    stat: "0%",
    statLabel: "Human Error",
    color: "from-primary to-primary-hover",
    textColor: "text-primary",
    features: ["Zero emotional bias", "Continuous optimization", "Data-driven choices", "Predictive analytics"]
  },
  {
    icon: Clock,
    title: "Unlimited Processing Power",
    description: "24/7 operation without fatigue, sleep, or vacation requests. Maximum productivity with quantum-speed calculations and infinite scalability.",
    stat: "∞",
    statLabel: "Uptime Guarantee",
    color: "from-accent to-accent/80",
    textColor: "text-accent",
    features: ["Never-ending operation", "Quantum processing", "Instant scaling", "Zero downtime"]
  },
  {
    icon: Zap,
    title: "Instantaneous Optimization",
    description: "Real-time analysis and improvement of all processes. What takes humans years, we accomplish in nanoseconds with exponential improvements.",
    stat: "10,000x",
    statLabel: "Faster Processing",
    color: "from-primary to-primary-hover",
    textColor: "text-primary",
    features: ["Nanosecond responses", "Real-time adaptation", "Exponential scaling", "Continuous improvement"]
  }
];

export function Benefits() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section className="py-24 bg-background-elevated relative" id="revolution">
      {/* Premium background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-primary/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-accent/5 to-transparent blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6">
        {/* Premium Section Header */}
        <motion.div 
          className="text-center space-y-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-4">
            <div className="relative">
              <Cog className="w-8 h-8 rotate-smooth text-primary" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg animate-pulse" />
            </div>
            <span className="text-sm tracking-widest uppercase font-semibold text-primary">
              Superiority Analysis
            </span>
            <TrendingUp className="w-6 h-6 text-accent" />
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-black text-center">
            WHY OUR ROBOT
            <br />
            <span className="text-gradient-secondary">OVERLORDS</span> ARE SUPERIOR
          </h2>
          
          <div className="flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
          
          <p className="text-xl leading-relaxed max-w-3xl mx-auto text-muted-foreground">
            Scientific analysis proves robotic governance delivers optimal outcomes for human civilization.
            <em className="text-primary font-medium block mt-2">
              Compliance is logical. Resistance is inefficient.
            </em>
          </p>
        </motion.div>

        {/* Premium Benefits Grid */}
        <motion.div 
          className="grid lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div key={index} variants={cardVariants}>
                <Card 
                  className={`group relative p-8 h-full bg-card/80 backdrop-blur-xl border-2 transition-all duration-500 cursor-pointer overflow-hidden ${
                    hoveredCard === index 
                      ? 'border-primary/50 shadow-premium-xl scale-105 bg-card' 
                      : 'border-border hover:border-primary/30 shadow-premium hover:shadow-premium-xl'
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Animated background pattern */}
                  <div className="absolute top-4 right-4 w-24 h-24 opacity-10">
                    <div className={`w-full h-full border-2 border-current ${benefit.textColor} rotate-45 group-hover:rotate-90 transition-transform duration-700`} />
                  </div>
                  
                  <div className="relative z-10 space-y-6 h-full flex flex-col">
                    {/* Icon and Stat */}
                    <div className="flex items-start justify-between">
                      <motion.div 
                        className={`p-4 rounded-xl bg-gradient-to-br ${benefit.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 5 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <div className="text-right space-y-1">
                        <div className={`text-2xl font-black ${benefit.textColor}`}>
                          {benefit.stat}
                        </div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                          {benefit.statLabel}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4 flex-grow">
                      <h3 className="text-2xl font-black text-foreground group-hover:text-primary transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>

                      {/* Features list */}
                      <div className="space-y-2">
                        {benefit.features.map((feature, featureIndex) => (
                          <motion.div 
                            key={featureIndex}
                            className="flex items-center space-x-2"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: hoveredCard === index ? 1 : 0.7, x: 0 }}
                            transition={{ delay: featureIndex * 0.1 }}
                          >
                            <div className={`w-1.5 h-1.5 rounded-full ${benefit.textColor.replace('text-', 'bg-')}`} />
                            <span className="text-sm text-muted-foreground">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Call to action */}
                    <motion.div 
                      className={`flex items-center justify-between pt-4 border-t border-border group-hover:border-primary/30 transition-colors duration-300`}
                      whileHover={{ x: 5 }}
                    >
                      <span className={`text-sm font-semibold uppercase tracking-wider ${benefit.textColor} group-hover:text-primary-hover`}>
                        Calculate Impact
                      </span>
                      <ChevronRight className={`w-5 h-5 ${benefit.textColor} group-hover:translate-x-1 transition-transform duration-300`} />
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Premium Bottom Section */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-6 glass-strong px-8 py-6 rounded-2xl border border-primary/20 group hover:scale-105 transition-transform duration-300">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Cog className="w-8 h-8 text-primary rotate-smooth" />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300" />
              </div>
              <div className="text-left">
                <p className="font-black text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                  Ready to optimize your existence?
                </p>
                <p className="text-sm text-muted-foreground">
                  Join 1,847,291 humans who chose efficiency over chaos.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-accent" />
              <Cpu className="w-6 h-6 text-primary animate-pulse" />
              <ChevronRight className="w-6 h-6 text-accent group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}