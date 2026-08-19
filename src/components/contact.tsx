"use client";

import { PaperPlaneTilt } from "@phosphor-icons/react";
import { FormEvent, useState } from "react";
import { Reveal } from "./ui/reveal";

type FormState = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");

    await new Promise((resolve) => setTimeout(resolve, 900));

    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "");

    if (!email.includes("@")) {
      setState("error");
      return;
    }

    setState("success");
    form.reset();
  }

  return (
    <section id="contacto" className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tighter text-foreground md:text-4xl">
              Hablemos de su operación
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
              Cuéntenos qué equipos necesita cubrir. Un ingeniero de Biomision
              le responderá con una propuesta técnica en menos de un día hábil.
            </p>

            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-foreground">Correo</dt>
                <dd className="text-muted">contacto@biomision.com</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Teléfono</dt>
                <dd className="text-muted">+57 (601) 482-1930</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Horario</dt>
                <dd className="text-muted">Lunes a viernes, 7:00 - 18:00</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.08}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl p-6 neu-raised md:p-8"
            >
              <div className="grid gap-5">
                <div className="grid gap-2">
                  <label htmlFor="nombre" className="text-sm font-medium text-foreground">
                    Nombre completo
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    autoComplete="name"
                    className="rounded-xl border border-transparent bg-surface px-4 py-3 text-sm text-foreground outline-none ring-accent/30 transition-shadow focus:ring-2 neu-inset"
                  />
                </div>

                <div className="grid gap-2">
                  <label htmlFor="institucion" className="text-sm font-medium text-foreground">
                    Institución
                  </label>
                  <input
                    id="institucion"
                    name="institucion"
                    type="text"
                    required
                    className="rounded-xl border border-transparent bg-surface px-4 py-3 text-sm text-foreground outline-none ring-accent/30 transition-shadow focus:ring-2 neu-inset"
                  />
                </div>

                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="rounded-xl border border-transparent bg-surface px-4 py-3 text-sm text-foreground outline-none ring-accent/30 transition-shadow focus:ring-2 neu-inset"
                  />
                </div>

                <div className="grid gap-2">
                  <label htmlFor="mensaje" className="text-sm font-medium text-foreground">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    required
                    className="resize-none rounded-xl border border-transparent bg-surface px-4 py-3 text-sm text-foreground outline-none ring-accent/30 transition-shadow focus:ring-2 neu-inset"
                  />
                  <p className="text-xs text-muted">
                    Incluya tipo de equipos, cantidad aproximada y ciudad.
                  </p>
                </div>

                {state === "error" ? (
                  <p className="text-sm text-red-600 dark:text-red-400">
                    Verifique el correo electrónico e intente de nuevo.
                  </p>
                ) : null}

                {state === "success" ? (
                  <p className="text-sm text-accent">
                    Mensaje recibido. Nos comunicaremos pronto.
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={state === "loading"}
                  className="neu-pressable inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {state === "loading" ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar solicitud
                      <PaperPlaneTilt size={18} weight="bold" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
