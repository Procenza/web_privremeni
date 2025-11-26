import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { GridBackground } from "@/components/GridBackground";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background Grid */}
      <GridBackground />

      {/* Main Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Contact />
        <Footer />
      </div>

      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
}

export default App;
