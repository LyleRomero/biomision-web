"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./ui/reveal";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-24 md:pb-24 md:pt-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6">
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.18em] text-accent"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Mantenimiento biomédico
          </motion.p>

          <motion.h1
            className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-tighter text-foreground md:text-5xl lg:text-6xl"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            Equipos críticos siempre listos para operar
          </motion.h1>

          <motion.p
            className="max-w-md text-base leading-relaxed text-muted md:text-lg"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            Preventivo, correctivo y calibración para hospitales y clínicas.
            Respuesta técnica certificada cuando su operación no puede detenerse.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Link
              href="#contacto"
              className="neu-pressable inline-flex rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(13,148,136,0.35)] transition-colors hover:bg-accent-hover"
            >
              Solicitar servicio
            </Link>
            <Link
              href="#servicios"
              className="neu-pressable neu-soft inline-flex rounded-xl px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:text-accent"
            >
              Ver servicios
            </Link>
          </motion.div>
        </div>

        <Reveal className="relative">
          <div className="overflow-hidden rounded-3xl neu-raised">
            <Image
              src="/images/hero-lab-equipment.png"
              alt="Técnico de Biomision realizando mantenimiento de equipos biomédicos en laboratorio clínico"
              width={1600}
              height={900}
              priority
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-2 hidden rounded-2xl px-5 py-4 neu-soft md:block">
            <p className="text-2xl font-semibold tracking-tight text-foreground">
              +120
            </p>
            <p className="text-sm text-muted">equipos bajo contrato</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
