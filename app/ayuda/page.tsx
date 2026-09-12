import type { Metadata } from "next"
import AyudaClient from "./ayuda-client"

export const metadata: Metadata = {
  title: "Ayuda y preguntas frecuentes — Inteliar Labels",
  description:
    "Respuestas a las preguntas más comunes sobre Inteliar Labels: cómo funciona el sistema, variables de fecha, impresión y ZPL, y solución de problemas con el agente de impresión.",
  alternates: { canonical: "/ayuda" },
}

export default function AyudaPage() {
  return <AyudaClient />
}
