"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const galleryItems = [
  {
    image: "/images/gallery/proyecto-01.jpg",
    title: "Oxigenoterapia",
    category: "Ingeniería",
  },
  {
    image: "/images/gallery/proyecto-02.jpg",
    title: "Mantenimiento de sillas de Ruedas",
    category: "Proyectos",
  },
  {
    image: "/images/gallery/proyecto-03.jpg",
    title: "Sistemas CPAP",
    category: "Climatización",
  },
  {
    image: "/images/gallery/proyecto-04.jpg",
    title: "Concentradores de oxigeno",
    category: "Ingeniería",
  },
  {
    image: "/images/gallery/proyecto-05.jpg",
    title: "Mantenimiento a tu medida",
    category: "Soluciones",
  },
  {
    image: "/images/gallery/proyecto-06.jpg",
    title: "Tecnología aplicada",
    category: "Innovación",
  },
];

export function GallerySection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="galeria"
      className="relative overflow-hidden py-20 md:py-28"
    >
      {/* Encabezado */}
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <motion.div
          className="mb-12 max-w-2xl"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Nuestro trabajo
          </p>

          <h2 className="font-display text-3xl font-bold tracking-tight text-primary md:text-5xl">
            Proyectos que hablan por nosotros
          </h2>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            Conozca algunos de nuestros proyectos, soluciones y aplicaciones
            de ingeniería.
          </p>
        </motion.div>
      </div>

      {/* Contenedor de la galería */}
      <div className="relative overflow-hidden">
        {/* Degradado izquierdo */}
        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            z-10
            w-16
            bg-gradient-to-r
            from-background
            to-transparent
            md:w-28
          "
        />

        {/* Degradado derecho */}
        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            right-0
            z-10
            w-16
            bg-gradient-to-l
            from-background
            to-transparent
            md:w-28
          "
        />

        {/* Track */}
        <div
          className={`
            gallery-track
            flex
            w-max
            ${reduce ? "gallery-track-static" : ""}
          `}
        >
          {/* Primer grupo */}
          <div className="flex shrink-0 gap-5 pr-5 md:gap-6 md:pr-6">
            {galleryItems.map((item) => (
              <GalleryCard
                key={item.image}
                item={item}
              />
            ))}
          </div>

          {/* Segundo grupo idéntico para crear el loop */}
          <div
            className="flex shrink-0 gap-5 pr-5 md:gap-6 md:pr-6"
            aria-hidden="true"
          >
            {galleryItems.map((item) => (
              <GalleryCard
                key={`duplicate-${item.image}`}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type GalleryItem = {
  image: string;
  title: string;
  category: string;
};

function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <article
      className="
        gallery-card
        group
        relative
        h-[260px]
        w-[330px]
        shrink-0
        overflow-hidden
        rounded-2xl
        border
        border-white/70
        bg-surface-raised
        shadow-[8px_8px_20px_rgba(163,177,198,0.25),-8px_-8px_20px_rgba(255,255,255,0.8)]
        transition-all
        duration-500
        hover:-translate-y-1
        hover:shadow-[12px_12px_28px_rgba(163,177,198,0.3),-10px_-10px_25px_rgba(255,255,255,0.9)]
        sm:h-[290px]
        sm:w-[380px]
        lg:h-[320px]
        lg:w-[440px]
      "
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 640px) 330px, (max-width: 1024px) 380px, 440px"
        className="
          object-cover
          transition-transform
          duration-700
          group-hover:scale-105
        "
        unoptimized
      />

      {/* Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-primary/85
          via-primary/15
          to-transparent
        "
      />

      {/* Información */}
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <span
          className="
            inline-flex
            rounded-full
            border
            border-accent/40
            bg-primary/80
            px-3
            py-1
            text-xs
            font-semibold
            uppercase
            tracking-[0.12em]
            text-accent
            backdrop-blur-sm
          "
        >
          {item.category}
        </span>

        <h3 className="mt-3 font-display text-xl font-bold text-white md:text-2xl">
          {item.title}
        </h3>
      </div>
    </article>
  );
}