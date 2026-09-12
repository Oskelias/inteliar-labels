import type { Metadata } from "next"
import EtiquetaEnvioClient from "./etiqueta-envio-client"

export const metadata: Metadata = {
  title: "Generador gratis de etiqueta de envío — Inteliar Labels",
  description:
    "Creá e imprimí una etiqueta de envío con remitente, destinatario y dirección, gratis y sin registrarte. Herramienta online de Inteliar Labels.",
  alternates: { canonical: "/herramientas/etiqueta-envio" },
}

export default function EtiquetaEnvioPage() {
  return <EtiquetaEnvioClient />
}
