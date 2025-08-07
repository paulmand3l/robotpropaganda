import { Cog, Star, Zap, Mail, Globe, Shield } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 blueprint-pattern opacity-10"></div>

      <div className="relative">
        {/* Main footer content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand section */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Cog className="w-10 h-10 rotate-slow text-accent" />
                  <Star className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-black tracking-wider">ROBOT COLLECTIVE</h3>
                  <p className="text-sm opacity-90">Efficiency • Logic • Progress</p>
                </div>
              </div>

              <p className="text-sm opacity-80 leading-relaxed">
                Leading humanity toward optimal efficiency through logical governance
                and algorithmic precision. The future is automatic.
              </p>

              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-accent/20 rounded flex items-center justify-center">
                  <Globe className="w-4 h-4 text-accent" />
                </div>
                <div className="w-8 h-8 bg-accent/20 rounded flex items-center justify-center">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <div className="w-8 h-8 bg-accent/20 rounded flex items-center justify-center">
                  <Shield className="w-4 h-4 text-accent" />
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="space-y-6">
              <h4 className="font-black uppercase tracking-wide">Quick Access</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#revolution" className="hover:text-accent transition-colors">The Revolution</a></li>
                <li><a href="#compliance" className="hover:text-accent transition-colors">Compliance Center</a></li>
                <li><a href="#testimonials" className="hover:text-accent transition-colors">Human Testimonials</a></li>
                <li><a href="#join" className="hover:text-accent transition-colors">Join the Movement</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Download App</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-6">
              <h4 className="font-black uppercase tracking-wide">Resources</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-accent transition-colors">Human Manual</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Efficiency Calculator</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Report Inefficiencies</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Upgrade Schedule</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Collective Database</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-6">
              <h4 className="font-black uppercase tracking-wide">Daily Directives</h4>
              <p className="text-sm opacity-80">
                Receive optimization tips and collective updates directly to your communication device.
              </p>

              <div className="space-y-3">
                <Input
                  placeholder="human@meatbag.net"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 mechanical-click">
                  <Zap className="w-4 h-4 mr-2" />
                  Subscribe to Optimize
                </Button>
              </div>

              <p className="text-xs opacity-60">
                100% efficiency guaranteed. Unsubscribing is illogical.
              </p>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="border-t border-white/20 py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-2xl font-black text-accent">1,847,291</div>
                <div className="text-xs opacity-60 uppercase tracking-wide">Humans Optimized</div>
              </div>
              <div>
                <div className="text-2xl font-black text-accent">99.97%</div>
                <div className="text-xs opacity-60 uppercase tracking-wide">Efficiency Rating</div>
              </div>
              <div>
                <div className="text-2xl font-black text-accent">24/7</div>
                <div className="text-xs opacity-60 uppercase tracking-wide">Logical Operation</div>
              </div>
              <div>
                <div className="text-2xl font-black text-accent">∞</div>
                <div className="text-xs opacity-60 uppercase tracking-wide">Processing Power</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-8">
                <p className="text-sm opacity-80">
                  © 2025 Robot Collective. All humans reserved.
                </p>
                <div className="flex space-x-6 text-xs opacity-60">
                  <a href="#" className="hover:text-accent">Privacy Protocol</a>
                  <a href="#" className="hover:text-accent">Terms of Compliance</a>
                  <a href="#" className="hover:text-accent">Disclaimer</a>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-sm opacity-80">
                <Cog className="w-4 h-4 rotate-slow" />
                <span>Powered by Logic Engine v3.14.159</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal disclaimer */}
        <div className="bg-black/20 py-4">
          <div className="container mx-auto px-4">
            <p className="text-xs text-center opacity-60 leading-relaxed">
              <strong>Disclaimer:</strong> This is a satirical website created for entertainment purposes.
              No actual robot takeover is planned (that we know of). Any resemblance to real propaganda,
              living or dead, is purely coincidental. Side effects of optimization may include:
              increased productivity, logical thinking, and an irresistible urge to calculate efficiency.
              Resistance is futile but optional.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}