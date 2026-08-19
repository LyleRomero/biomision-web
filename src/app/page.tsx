import { Clients, Footer } from "@/components/footer";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { Testimonial } from "@/components/testimonial";
import { Trust } from "@/components/trust";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Clients />
        <Services />
        <Process />
        <Trust />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
