import type { Metadata } from "next"
import ManualClient from "./manual-client"

export const metadata: Metadata = {
  title: "Manual de usuario — Inteliar Labels",
  description:
    "Guía completa de Inteliar Labels: variables dinámicas, códigos QR y de barras, numeración automática, tamaño de etiqueta, calibración y solución de problemas.",
  alternates: { canonical: "/manual" },
}

export default function ManualPage() {
  return <ManualClient />
}
