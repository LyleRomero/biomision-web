import Image from "next/image";
import { Reveal } from "./ui/reveal";

const metrics = [
  { value: "98%", label: "disponibilidad promedio de equipos" },
  { value: "4 horas", label: "respuesta en urgencias" },
  { value: "15 años", label: "de experiencia técnica" },
];

export function Trust() {
  return (
    <section id="nosotros" className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="overflow-hidden rounded-3xl neu-raised">
              <Image
                src="/images/team-trust.png"
                alt="Equipo técnico de Biomision revisando documentación de equipos médicos"
                width={900}
                height={1200}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
                Ingeniería clínica con enfoque en confianza
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
                Biomision acompaña a instituciones de salud que necesitan
                continuidad operativa, cumplimiento normativo y soporte técnico
                confiable en cada servicio.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {metrics.map((metric, index) => (
                <Reveal key={metric.label} delay={index * 0.05}>
                  <div className="rounded-2xl p-5 text-center neu-soft">
                    <p className="text-2xl font-semibold tracking-tight text-accent">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-muted">
                      {metric.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
