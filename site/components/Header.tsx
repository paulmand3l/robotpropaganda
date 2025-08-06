import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Cog, Star, Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div 
        className="scroll-indicator"
        style={{
          width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`
        }}
      />
      
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass-strong shadow-premium-xl' 
          : 'bg-gradient-to-r from-primary/95 to-primary text-primary-foreground'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative bg-gradient-to-br from-accent to-accent/80 rounded-full p-2">
                  <Cog className="w-7 h-7 rotate-smooth text-accent-foreground" />
                </div>
                <Star className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-primary-foreground pulse-premium" />
              </div>
              <div className="space-y-1">
                <h1 className="text-2xl font-black tracking-wider text-gradient">
                  ROBOT COLLECTIVE
                </h1>
                <p className="text-xs opacity-75 tracking-widest">
                  EFFICIENCY • LOGIC • PROGRESS
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {[
                { href: "#revolution", label: "THE REVOLUTION" },
                { href: "#compliance", label: "COMPLIANCE CENTER" },
                { href: "#testimonials", label: "TESTIMONIALS" },
                { href: "#join", label: "JOIN US" }
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-semibold tracking-wider transition-all duration-300 group ${
                    isScrolled ? 'text-foreground hover:text-primary' : 'text-primary-foreground hover:text-accent'
                  }`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button className="btn-premium shimmer-effect group">
                <Star className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                PLEDGE ALLEGIANCE
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
          }`}>
            <div className="glass rounded-2xl p-6 border border-border-strong">
              <nav className="flex flex-col space-y-4">
                {[
                  { href: "#revolution", label: "THE REVOLUTION" },
                  { href: "#compliance", label: "COMPLIANCE CENTER" },
                  { href: "#testimonials", label: "TESTIMONIALS" },
                  { href: "#join", label: "JOIN US" }
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm font-semibold tracking-wider text-foreground hover:text-primary transition-colors duration-300 py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                
                <Button className="btn-premium mt-4">
                  <Star className="w-4 h-4 mr-2" />
                  PLEDGE ALLEGIANCE
                </Button>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}