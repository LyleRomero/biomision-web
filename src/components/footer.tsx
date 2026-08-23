import Link from "next/link";
import { Logo } from "./logo";
import Image from "next/image";

const clients = [
  {
    name: "Clínica del Norte",
    logo: "/images/clients/metrosalud.png",
  },
  {
    name: "Hospital Central",
    logo: "/images/clients/oxysalud.png",  },
  {
    name: "Instituto Cardiovascular",
    logo: "/images/clients/las-americas.png",  },
  {
    name: "Red Salud Plus",
    logo: "/images/clients/vegas.png",  },
  {
    name: "Laboratorio Vida",
    logo: "/images/clients/st.png",  },
];

export function Clients() {
  return (
    <section
      className="px-4 pb-8 pt-4"
      aria-labelledby="clientes-title"
    >
      <div className="mx-auto max-w-7xl rounded-3xl px-6 py-8 neu-soft md:px-10">
        <h2 id="clientes-title" className="font-display text-center pb-10 text-3xl font-bold tracking-tight text-primary md:text-5xl">
            Instituciones que confían en Biomision
        </h2>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-5 md:gap-8 lg:gap-10">
          {clients.map((client) => (
            <li key={client.name}>
              <div
                className="
                  flex
                  h-20
                  w-36
                  items-center
                  justify-center
                  rounded-2xl
                  bg-surface-raised
                  px-5
                  py-4                  
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
                title={client.name}
              >
                <Image
                  src={client.logo}
                  alt={`Logo de ${client.name}`}
                  width={160}
                  height={80}
                  className="
                    h-auto
                    max-h-12
                    w-auto
                    max-w-[120px]
                    object-contain
                  "
                />
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
          <Logo className="h-7 w-auto sm:h-8" />
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
