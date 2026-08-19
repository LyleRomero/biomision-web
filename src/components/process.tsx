import { Reveal } from "./ui/reveal";

const steps = [
  {
    title: "Diagnóstico inicial",
    body: "Evaluamos estado, historial y criticidad operativa de cada equipo en su institución.",
  },
  {
    title: "Plan de mantenimiento",
    body: "Definimos frecuencias, repuestos críticos y ventanas de servicio según su flujo clínico.",
  },
  {
    title: "Ejecución y reporte",
    body: "Realizamos la intervención, entregamos evidencia técnica y seguimiento posterior.",
  },
];

export function Process() {
  return (
    <section id="proceso" className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="max-w-xl text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
            Un proceso claro, medible y trazable
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.06}>
              <article className="relative rounded-2xl p-7 neu-raised">
                <div className="mb-4 h-1 w-10 rounded-full bg-accent" />
                <h3 className="text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
