import { Reveal } from "./ui/reveal";

export function Testimonial() {
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <figure className="rounded-3xl px-8 py-10 text-center neu-raised md:px-14 md:py-14">
            <blockquote className="text-xl font-medium leading-relaxed text-foreground md:text-2xl">
              &ldquo;En BIOMISION nos especializamos en el mantenimiento, reparación y puesta a punto 
              de equipos biomédicos, brindando atención 24 horas para garantizar que cada equipo funcione 
              de manera segura, confiable y oportuna&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-sm text-muted">
              <span className="font-semibold text-foreground">
                Equipo Tecnico Biomision
              </span>
              <br />
              Profesionales Colombianos con mas de 10 años de Experiencia en el sector Biomedico
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
