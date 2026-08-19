import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Biomision | Mantenimiento de equipos biomédicos",
  description:
    "Servicios de mantenimiento preventivo, correctivo y calibración para equipos biomédicos en hospitales y clínicas.",
  openGraph: {
    title: "Biomision | Mantenimiento de equipos biomédicos",
    description:
      "Ingeniería clínica confiable para instituciones de salud. Respuesta técnica certificada y trazabilidad completa.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
