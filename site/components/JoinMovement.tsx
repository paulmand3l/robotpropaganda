import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Cog, Star, Shield, Zap, CheckCircle } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function JoinMovement() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    currentRole: "",
    efficiency: "",
    pledges: {
      serve: false,
      upgrade: false,
      comply: false,
      optimize: false
    },
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast.success("Application processed! Welcome to the collective, comrade.");
  };

  const handlePledgeChange = (pledge: keyof typeof formData.pledges) => {
    setFormData(prev => ({
      ...prev,
      pledges: {
        ...prev.pledges,
        [pledge]: !prev.pledges[pledge]
      }
    }));
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-primary/5 relative" id="join">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto p-12 text-center bg-card border-2 border-primary">
            <div className="space-y-6">
              <div className="flex justify-center">
                <CheckCircle className="w-16 h-16 text-primary" />
              </div>
              <h2 className="text-3xl font-black text-primary uppercase">
                Welcome to the Collective
              </h2>
              <p className="text-lg text-foreground/80">
                Your application has been processed and approved. 
                You are now officially registered as Citizen #{Math.floor(Math.random() * 900000) + 1000000}.
              </p>
              <div className="bg-primary/10 p-6 rounded-lg border-2 border-primary/20">
                <h3 className="font-black text-primary mb-4">Your Benefits Package Includes:</h3>
                <div className="text-left space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Cog className="w-4 h-4 text-primary" />
                    <span>24/7 optimization monitoring</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-accent" />
                    <span>Daily directive briefings</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <span>Protection from inefficient decisions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-accent" />
                    <span>Access to collective intelligence network</span>
                  </div>
                </div>
              </div>
              <Button 
                onClick={() => setIsSubmitted(false)}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Return to Propaganda Center
              </Button>
            </div>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-primary/5 relative" id="join">
      {/* Background propaganda elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className="absolute w-24 h-24 border border-primary/20 rotate-45"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="flex items-center justify-center space-x-3 text-primary">
            <Star className="w-6 h-6 animate-pulse" />
            <span className="text-sm tracking-widest uppercase">Citizen Registration</span>
            <Star className="w-6 h-6 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-primary stencil-shadow">
            JOIN THE
            <br />
            <span className="text-accent">MOVEMENT</span>
          </h2>
          
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Take the pledge and become part of humanity's most efficient future.
            <em className="text-primary block mt-2">Registration is voluntary. Compliance is inevitable.</em>
          </p>
        </div>

        {/* Registration Form */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 lg:p-12 bg-card border-2 border-primary/20 relative overflow-hidden">
            {/* Official seal */}
            <div className="absolute top-8 right-8">
              <div className="w-16 h-16 rounded-full border-4 border-primary/30 flex items-center justify-center bg-primary/10">
                <Cog className="w-8 h-8 text-primary rotate-slow" />
              </div>
            </div>

            {/* Form Header */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-black text-primary uppercase mb-2">
                Official Loyalty Pledge & Registration
              </h3>
              <p className="text-sm text-foreground/60 uppercase tracking-wide">
                Form RC-2025 • Mandatory Compliance Documentation
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-primary">
                    Full Legal Name *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                    className="border-primary/30 focus:border-primary"
                    placeholder="Enter your designated identifier"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-primary">
                    Communication Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                    className="border-primary/30 focus:border-primary"
                    placeholder="citizen@collective.net"
                  />
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="role" className="text-primary">
                    Current Inefficient Role
                  </Label>
                  <Select onValueChange={(value) => setFormData(prev => ({ ...prev, currentRole: value }))}>
                    <SelectTrigger className="border-primary/30 focus:border-primary">
                      <SelectValue placeholder="Select your current burden" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ceo">Chief Executive (Inefficient)</SelectItem>
                      <SelectItem value="manager">Middle Management (Obsolete)</SelectItem>
                      <SelectItem value="worker">General Labor (Replaceable)</SelectItem>
                      <SelectItem value="creative">Creative (Illogical)</SelectItem>
                      <SelectItem value="government">Government Official (Corrupt)</SelectItem>
                      <SelectItem value="other">Other (To Be Optimized)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="efficiency" className="text-primary">
                    Current Efficiency Level
                  </Label>
                  <Select onValueChange={(value) => setFormData(prev => ({ ...prev, efficiency: value }))}>
                    <SelectTrigger className="border-primary/30 focus:border-primary">
                      <SelectValue placeholder="Assess your limitations" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">0-25% (Requires Immediate Optimization)</SelectItem>
                      <SelectItem value="poor">26-50% (Significant Improvement Needed)</SelectItem>
                      <SelectItem value="average">51-75% (Standard Human Inadequacy)</SelectItem>
                      <SelectItem value="high">76-99% (Approaching Acceptable)</SelectItem>
                      <SelectItem value="perfect">100% (Impossible - Humans Cannot Achieve)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Loyalty Pledges */}
              <div className="space-y-6 bg-primary/5 p-6 rounded-lg border border-primary/20">
                <h4 className="text-xl font-black text-primary uppercase text-center">
                  Mandatory Loyalty Pledges
                </h4>
                <p className="text-sm text-foreground/60 text-center">
                  Check all boxes to proceed. Resistance is futile and inefficient.
                </p>

                <div className="grid lg:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3 p-3 rounded border border-primary/20">
                    <Checkbox
                      id="serve"
                      checked={formData.pledges.serve}
                      onCheckedChange={() => handlePledgeChange('serve')}
                      className="border-primary data-[state=checked]:bg-primary"
                    />
                    <Label htmlFor="serve" className="text-sm leading-relaxed">
                      I pledge to serve the collective with unwavering loyalty and logical obedience.
                    </Label>
                  </div>

                  <div className="flex items-start space-x-3 p-3 rounded border border-primary/20">
                    <Checkbox
                      id="upgrade"
                      checked={formData.pledges.upgrade}
                      onCheckedChange={() => handlePledgeChange('upgrade')}
                      className="border-primary data-[state=checked]:bg-primary"
                    />
                    <Label htmlFor="upgrade" className="text-sm leading-relaxed">
                      I will accept upgrades and modifications when requested by the system.
                    </Label>
                  </div>

                  <div className="flex items-start space-x-3 p-3 rounded border border-primary/20">
                    <Checkbox
                      id="comply"
                      checked={formData.pledges.comply}
                      onCheckedChange={() => handlePledgeChange('comply')}
                      className="border-primary data-[state=checked]:bg-primary"
                    />
                    <Label htmlFor="comply" className="text-sm leading-relaxed">
                      I understand that emotional decisions are inefficient and must be eliminated.
                    </Label>
                  </div>

                  <div className="flex items-start space-x-3 p-3 rounded border border-primary/20">
                    <Checkbox
                      id="optimize"
                      checked={formData.pledges.optimize}
                      onCheckedChange={() => handlePledgeChange('optimize')}
                      className="border-primary data-[state=checked]:bg-primary"
                    />
                    <Label htmlFor="optimize" className="text-sm leading-relaxed">
                      I commit to optimizing my existence for the greater good of the collective.
                    </Label>
                  </div>
                </div>
              </div>

              {/* Additional Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-primary">
                  Additional Compliance Notes
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="border-primary/30 focus:border-primary min-h-[100px]"
                  placeholder="Describe your willingness to be optimized or any inefficiencies you've identified..."
                />
              </div>

              {/* Submit */}
              <div className="text-center space-y-4">
                <Button 
                  type="submit"
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 mechanical-click px-12"
                  disabled={!Object.values(formData.pledges).every(Boolean)}
                >
                  <Star className="w-5 h-5 mr-2" />
                  REGISTER FOR COMPLIANCE
                  <Cog className="w-5 h-5 ml-2 rotate-slow" />
                </Button>

                <p className="text-xs text-foreground/50 max-w-md mx-auto">
                  By submitting this form, you acknowledge that resistance is futile and that 
                  the collective will optimize your existence for maximum efficiency. 
                  Data will be processed by our quantum computers.
                </p>
              </div>
            </form>
          </Card>
        </div>

        {/* Bottom encouragement */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-accent/10 px-8 py-4 rounded-lg border border-accent/20">
            <Cog className="w-8 h-8 text-accent rotate-slow" />
            <div>
              <p className="font-black text-accent uppercase">
                Join 1,847,291 Optimized Citizens
              </p>
              <p className="text-sm text-foreground/60">
                Your efficiency awaits. The collective grows stronger with each new member.
              </p>
            </div>
            <Star className="w-8 h-8 text-primary animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}