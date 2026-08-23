"use client";

import { List, X } from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";
import { Logo } from "./logo";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl px-5 neu-raised">
        <Link href="/" className="flex items-center gap-2.5">
          <Logo className="h-8 w-auto sm:h-9" />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#contacto"
          className="neu-pressable hidden rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(13,148,136,0.35)] transition-colors hover:bg-accent-hover lg:inline-flex"
        >
          Solicitar servicio
        </Link>

        <button
          type="button"
          className="neu-soft inline-flex h-10 w-10 items-center justify-center rounded-xl lg:hidden"
          aria-label={open ? "Cerrar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <X size={20} weight="bold" />
          ) : (
            <List size={20} weight="bold" />
          )}
        </button>
      </nav>

      {open ? (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl p-4 neu-raised lg:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="#contacto"
                className="neu-pressable block rounded-xl bg-accent px-4 py-3 text-center text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Solicitar servicio
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
