import { Reveal } from "./ui/reveal";

export function Testimonial() {
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <figure className="rounded-3xl px-8 py-10 text-center neu-raised md:px-14 md:py-14">
            <blockquote className="text-xl font-medium leading-relaxed text-foreground md:text-2xl">
              &ldquo;Desde que externalizamos el mantenimiento con Biomision,
              redujimos paradas no planificadas y mejoramos la trazabilidad
              para auditorías internas.&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-sm text-muted">
              <span className="font-semibold text-foreground">
                Dra. Mariana Restrepo
              </span>
              <br />
              Directora de Ingeniería Clínica, Clínica del Norte
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
