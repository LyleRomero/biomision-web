import {
  CalendarCheck,
  FirstAidKit,
  Wrench,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { Reveal } from "./ui/reveal";

const services = [
  {
    icon: FirstAidKit,
    title: "Equipos de rehabilitación",
    description:
      "Mantenimiento y reparación de sillas de ruedas, camas hospitalarias, caminadores, camillas y otros equipos de apoyo.",
  },
  {
    icon: Wrench,
    title: "Oxigenoterapia",
    description:
      "Servicio especializado para concentradores de oxígeno estacionarios y portátiles, reguladores, nebulizadores y otros equipos relacionados con terapia respiratoria.",
  },
  {
    icon: CalendarCheck,
    title: "Apnea del sueño",
    description:
      "Mantenimiento y revisión de equipos CPAP y dispositivos utilizados en terapia para la apnea del sueño.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
            Servicios que protegen la continuidad clínica
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            Cubrimos el ciclo completo del equipo biomédico, desde la
            instalación hasta el soporte postventa.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.06}>
              <article className="flex h-full flex-col gap-4 rounded-2xl p-6 neu-soft">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl neu-inset text-accent">
                  <service.icon size={22} weight="duotone" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="grid items-center gap-8 overflow-hidden rounded-3xl neu-raised md:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                Cobertura para equipos de alta criticidad
              </h3>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">
                Trabajamos con marcas líderes en UCI, quirófano, imagenología y
                laboratorio. Cada intervención queda documentada para auditoría
                y control de calidad.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Monitores multiparamétricos",
                  "Ventiladores mecánicos",
                  "Desfibriladores",
                  "Incubadoras neonatales",
                  "Equipos de hemodiálisis",
                  "Analizadores clínicos",
                ].map((item) => (
                  <li
                    key={item}
                    className="rounded-xl px-4 py-2.5 text-sm text-foreground neu-inset"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative min-h-[280px] md:min-h-full">
              <Image
                src="/images/maintenance-service.png"
                alt="Calibración de monitor de signos vitales en entorno clínico"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
