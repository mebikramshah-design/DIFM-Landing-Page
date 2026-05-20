import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Brochure from "@/components/Brochure";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Clients from "@/components/Clients";
import InquiryForm from "@/components/InquiryForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Brochure />
      <Services />
      <WhyChooseUs />
      <Clients />
      <InquiryForm />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}
