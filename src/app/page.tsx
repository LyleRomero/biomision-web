import { Clients, Footer } from "@/components/footer";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { Testimonial } from "@/components/testimonial";
import { Trust } from "@/components/trust";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import { GallerySection } from "../components/GallerySection";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Process />
        <Trust />
        <GallerySection />
        <Testimonial />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
