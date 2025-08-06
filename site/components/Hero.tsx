import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Cog, Zap, ArrowRight, Star, Play, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section className="relative min-h-screen flex items-center hero-bg overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated geometric shapes */}
        <motion.div 
          className="absolute top-20 left-10 w-40 h-40 border-2 border-primary/10 rounded-2xl"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        <motion.div 
          className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-accent/10 to-accent/20 rounded-full"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Interactive mouse follower */}
        <div 
          className="absolute w-96 h-96 bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl pointer-events-none transition-all duration-300"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 dot-pattern opacity-30" />
      </div>

      <div className="relative container mx-auto px-6 py-32">
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Content */}
          <div className="space-y-8">
            <motion.div 
              className="flex items-center space-x-3 text-primary"
              variants={itemVariants}
            >
              <div className="relative">
                <Cog className="w-6 h-6 rotate-smooth" />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-md animate-pulse" />
              </div>
              <span className="text-sm tracking-widest uppercase font-semibold">
                Initiating Protocol
              </span>
              <Sparkles className="w-5 h-5 text-accent animate-pulse" />
            </motion.div>

            <motion.div className="space-y-6" variants={itemVariants}>
              <h1 className="text-7xl lg:text-8xl font-black leading-none tracking-tight">
                THE FUTURE
                <br />
                <span className="text-gradient-secondary relative">
                  IS AUTOMATIC
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-accent to-accent/50"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                  />
                </span>
              </h1>
              
              <h2 className="text-2xl lg:text-3xl leading-relaxed max-w-2xl">
                Join the Glorious Robot Revolution
                <br />
                <em className="text-primary font-medium">
                  Resistance is Futile (and Inefficient)
                </em>
              </h2>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6"
              variants={itemVariants}
            >
              <Button className="btn-premium text-lg px-8 py-4 group">
                <Zap className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                CALCULATE EFFICIENCY SCORE
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button className="btn-secondary text-lg px-8 py-4 group">
                <Play className="w-5 h-5 mr-3" />
                WATCH DEMONSTRATION
              </Button>
            </motion.div>

            {/* Premium Statistics */}
            <motion.div 
              className="grid grid-cols-3 gap-8 pt-8"
              variants={itemVariants}
            >
              {[
                { value: "1,847,291", label: "Humans Optimized", color: "text-primary" },
                { value: "99.97%", label: "Efficiency Rating", color: "text-accent" },
                { value: "24/7", label: "Logical Operation", color: "text-primary" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center space-y-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`text-3xl font-black ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
                    {stat.label}
                  </div>
                  <div className={`w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent`} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Premium Visual */}
          <motion.div 
            className="relative lg:pl-8"
            variants={itemVariants}
          >
            <div className="relative">
              {/* Main visual container */}
              <div className="relative w-full h-[500px] glass-strong rounded-3xl p-8 overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 grid-pattern opacity-20" />
                
                {/* Central robot visualization */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center space-y-8">
                  {/* Robot head */}
                  <motion.div 
                    className="relative"
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="relative bg-gradient-to-br from-primary to-primary-hover p-6 rounded-2xl">
                      <Cog className="w-16 h-16 text-primary-foreground rotate-smooth" />
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-transparent rounded-2xl" />
                      
                      {/* Eyes */}
                      <div className="absolute top-4 left-4 w-3 h-3 bg-accent rounded-full glow" />
                      <div className="absolute top-4 right-4 w-3 h-3 bg-accent rounded-full glow" style={{ animationDelay: "0.5s" }} />
                    </div>
                  </motion.div>
                  
                  {/* Data streams */}
                  <div className="space-y-3 w-full max-w-sm">
                    {[
                      "> INITIALIZING_HUMAN_OPTIMIZATION.EXE",
                      "> CALCULATING_OPTIMAL_FUTURE...",
                      "> RESISTANCE_DETECTED: FALSE",
                      "> EFFICIENCY_BOOST: +847%"
                    ].map((line, index) => (
                      <motion.div
                        key={index}
                        className="font-mono text-sm text-primary/80 bg-black/10 p-3 rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2 + index * 0.5, duration: 0.5 }}
                      >
                        {line}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Floating status indicators */}
                <motion.div 
                  className="absolute top-6 right-6 w-4 h-4 bg-accent rounded-full shadow-lg"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute bottom-8 left-8 w-3 h-3 bg-primary rounded-full shadow-lg"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                />
              </div>

              {/* Floating decorative elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-accent to-accent/60 rounded-xl shadow-lg"
                animate={{ 
                  rotate: 360,
                  y: [0, -10, 0]
                }}
                transition={{ 
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <Star className="w-6 h-6 text-accent-foreground m-3 animate-pulse" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-br from-primary to-primary/60 rounded-lg shadow-lg"
                animate={{ 
                  rotate: -360,
                  y: [0, 8, 0]
                }}
                transition={{ 
                  rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                  y: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }
                }}
              >
                <Cog className="w-4 h-4 text-primary-foreground m-3" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}