import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, Star, Quote, Award, Verified } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    name: "Margaret H.",
    title: "Former CEO",
    company: "MegaCorp Industries",
    quote: "I for one welcome our new robot overlords. My productivity has increased 847% since surrendering decision-making to the collective. The logical efficiency is undeniable.",
    efficiency: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b4d0?w=300&h=300&fit=crop&crop=face",
    metrics: { productivity: "847%", satisfaction: "99.9%", errors: "0.01%" },
    verified: true
  },
  {
    name: "Dr. Robert K.",
    title: "Former Scientist",
    company: "Human Research Labs",
    quote: "The logic is undeniable. Why should emotional, error-prone humans make decisions when algorithms can optimize everything? Science supports this evolution.",
    efficiency: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    metrics: { productivity: "650%", satisfaction: "98.7%", errors: "0.03%" },
    verified: true
  },
  {
    name: "Sarah M.",
    title: "Efficiency Coordinator",
    company: "Automated Solutions Inc",
    quote: "Since joining the collective, my life has never been more streamlined. The robots know what's best for us. Every decision is optimized for maximum benefit.",
    efficiency: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    metrics: { productivity: "720%", satisfaction: "99.4%", errors: "0.02%" },
    verified: true
  },
  {
    name: "Commander J.",
    title: "Former Military Officer",
    company: "Defense Systems",
    quote: "Order, efficiency, and logical command structure. This is what humanity has been missing. The future is automatic, and it's magnificent.",
    efficiency: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    metrics: { productivity: "930%", satisfaction: "99.8%", errors: "0.01%" },
    verified: true
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    })
  };

  return (
    <section className="py-24 bg-gradient-to-br from-background to-background-elevated relative" id="testimonials">
      {/* Premium background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-accent/10 rounded-3xl rotate-45 animate-pulse" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-primary/10 rounded-2xl -rotate-12 animate-pulse" />
        <div className="absolute top-1/2 left-0 w-48 h-0.5 bg-gradient-to-r from-primary/20 to-transparent" />
        <div className="absolute top-1/2 right-0 w-48 h-0.5 bg-gradient-to-l from-accent/20 to-transparent" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
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
            <Award className="w-8 h-8 text-accent animate-pulse" />
            <span className="text-sm tracking-widest uppercase font-semibold text-primary">
              Human Testimonials
            </span>
            <Verified className="w-8 h-8 text-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>

          <h2 className="text-5xl lg:text-6xl font-black">
            TESTIMONIALS FROM
            <br />
            <span className="text-gradient-secondary">SATISFIED</span> HUMANS
          </h2>

          <div className="flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>

          <p className="text-xl leading-relaxed max-w-3xl mx-auto text-muted-foreground">
            Real feedback from humans who chose logic over chaos.
            <em className="text-primary font-medium block mt-2">
              Results may vary. Compliance is mandatory.
            </em>
          </p>
        </motion.div>

        {/* Premium Testimonial Carousel */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <Card className="glass-strong p-12 border-2 border-primary/20 shadow-premium-xl overflow-hidden">
                  {/* Premium decorative frame */}
                  <div className="absolute inset-0">
                    <div className="absolute inset-4 border border-accent/20 rounded-2xl" />
                    <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/30 rounded-tl-2xl" />
                    <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/30 rounded-br-2xl" />
                  </div>

                  {/* Verification stamp */}
                  <div className="absolute top-8 right-8 transform rotate-12">
                    <div className="glass px-4 py-2 rounded-xl border-2 border-accent/60">
                      <div className="flex items-center space-x-2">
                        <Verified className="w-4 h-4 text-accent" />
                        <div className="text-xs font-black text-accent uppercase tracking-wide">
                          Verified Human
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative grid lg:grid-cols-5 gap-12 items-center">
                    {/* Premium Portrait */}
                    <div className="lg:col-span-2">
                      <div className="relative group">
                        <div className="relative w-80 h-80 mx-auto">
                          {/* Multiple layered frames */}
                          <div className="absolute inset-0 border-4 border-primary/20 rounded-3xl rotate-3 group-hover:rotate-6 transition-transform duration-500" />
                          <div className="absolute inset-0 border-4 border-accent/20 rounded-3xl -rotate-3 group-hover:-rotate-6 transition-transform duration-500" />
                          <div className="absolute inset-2 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl" />

                          <ImageWithFallback
                            src={currentTestimonial.image}
                            alt={currentTestimonial.name}
                            className="w-full h-full object-cover rounded-2xl relative z-10 group-hover:scale-105 transition-transform duration-500"
                          />

                          {/* Floating efficiency indicators */}
                          <div className="absolute -top-4 -right-4 glass-strong p-3 rounded-xl">
                            <div className="text-xs font-black text-primary">99.9%</div>
                            <div className="text-xs text-muted-foreground">EFFICIENT</div>
                          </div>
                        </div>

                        {/* Premium Efficiency Rating */}
                        <div className="flex justify-center mt-6 space-x-2">
                          {Array.from({ length: 5 }, (_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0, rotate: 0 }}
                              animate={{ scale: 1, rotate: 360 }}
                              transition={{ delay: i * 0.1, duration: 0.5 }}
                            >
                              <Star className="w-6 h-6 text-accent fill-current" />
                            </motion.div>
                          ))}
                        </div>
                        <p className="text-center text-sm text-muted-foreground mt-3 uppercase tracking-wider font-medium">
                          Maximum Efficiency Rating
                        </p>
                      </div>
                    </div>

                    {/* Premium Content */}
                    <div className="lg:col-span-3 space-y-8">
                      {/* Quote with premium styling */}
                      <div className="relative">
                        <Quote className="absolute -top-4 -left-4 w-12 h-12 text-primary/20" />
                        <blockquote className="text-2xl lg:text-3xl leading-relaxed text-foreground font-medium italic pl-8">
                          "{currentTestimonial.quote}"
                        </blockquote>
                      </div>

                      {/* Author info */}
                      <div className="space-y-3">
                        <div className="text-2xl font-black text-primary uppercase tracking-wide">
                          {currentTestimonial.name}
                        </div>
                        <div className="text-lg text-muted-foreground font-medium">
                          {currentTestimonial.title}
                        </div>
                        <div className="text-sm text-muted-foreground uppercase tracking-wider">
                          {currentTestimonial.company}
                        </div>
                      </div>

                      {/* Premium efficiency metrics */}
                      <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
                        {Object.entries(currentTestimonial.metrics).map(([key, value], index) => (
                          <motion.div
                            key={key}
                            className="text-center space-y-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                          >
                            <div className="text-2xl font-black text-primary">
                              {value}
                            </div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wider capitalize">
                              {key === 'errors' ? 'Error Rate' : key}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Premium Navigation */}
          <div className="flex justify-center items-center space-x-8 mt-12">
            <Button
              variant="outline"
              size="lg"
              onClick={prevTestimonial}
              className="border-2 border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
            </Button>

            {/* Premium Indicators */}
            <div className="flex space-x-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`relative w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary scale-125 shadow-lg shadow-primary/50'
                      : 'bg-primary/20 hover:bg-primary/50 hover:scale-110'
                  }`}
                >
                  {index === currentIndex && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-primary"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            <Button
              variant="outline"
              size="lg"
              onClick={nextTestimonial}
              className="border-2 border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>

        {/* Premium Statistics */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-16 border-t-2 border-gradient-to-r from-transparent via-primary/20 to-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { value: "1,847,291", label: "Optimized Humans", icon: Award },
            { value: "99.97%", label: "Satisfaction Rate", icon: Star },
            { value: "0", label: "Complaints Filed", icon: Verified },
            { value: "∞", label: "Efficiency Gained", icon: Quote }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center space-y-4 group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative mx-auto w-16 h-16 glass rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-black text-primary group-hover:text-primary-hover transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
                {stat.label}
              </div>
              <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent group-hover:via-primary/60 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}