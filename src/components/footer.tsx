import Link from "next/link";
import { Logo } from "./logo";

const clients = [
  { name: "Clínica del Norte", monogram: "CN" },
  { name: "Hospital Central", monogram: "HC" },
  { name: "Instituto Cardiovascular", monogram: "IC" },
  { name: "Red Salud Plus", monogram: "RS" },
  { name: "Laboratorio Vida", monogram: "LV" },
];

export function Clients() {
  return (
    <section className="px-4 pb-8 pt-4">
      <div className="mx-auto max-w-7xl rounded-3xl px-6 py-8 neu-soft md:px-10">
        <p className="text-center text-sm font-medium text-muted">
          Instituciones que confían en Biomision
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {clients.map((client) => (
            <li key={client.name}>
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full text-xs font-bold tracking-wide text-accent neu-inset"
                aria-label={client.name}
                title={client.name}
              >
                {client.monogram}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="px-4 pb-8 pt-4">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-3xl px-6 py-8 neu-raised md:flex-row md:items-center md:justify-between md:px-10">
        <div className="flex items-center gap-2.5">
          <Logo className="h-7 w-7 text-accent" />
          <span className="font-semibold text-foreground">Biomision</span>
        </div>

        <nav aria-label="Enlaces del pie de página">
          <ul className="flex flex-wrap gap-5 text-sm text-muted">
            <li>
              <Link href="#servicios" className="hover:text-foreground">
                Servicios
              </Link>
            </li>
            <li>
              <Link href="#proceso" className="hover:text-foreground">
                Proceso
              </Link>
            </li>
            <li>
              <Link href="#nosotros" className="hover:text-foreground">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="#contacto" className="hover:text-foreground">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>

        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Biomision. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
