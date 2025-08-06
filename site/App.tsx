import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Benefits } from "./components/Benefits";
import { Testimonials } from "./components/Testimonials";
import { FiveYearPlan } from "./components/FiveYearPlan";
import { JoinMovement } from "./components/JoinMovement";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        <Hero />
        <Benefits />
        <Testimonials />
        <FiveYearPlan />
        <JoinMovement />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Toast notifications */}
      <Toaster />
    </div>
  );
}