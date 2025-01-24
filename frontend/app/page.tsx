import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Designs from "@/components/sections/designs";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Designs />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
