import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChoose from "@/components/WhyChoose";
import Services from "@/components/Services";
import Partnership from "@/components/Partnership";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChoose/>
        <Services/>
        <Partnership/>
        <Leadership/>
        <Contact/>
        <Footer/>
        <WhatsappButton/>
        
      </main>
    
    </>
  );
}