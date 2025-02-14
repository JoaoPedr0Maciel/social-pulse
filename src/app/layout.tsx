import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"
import MouseMoveEffect from "@/components/mouse-move-effect"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Social Pulse - Análises Inteligentes para Redes Sociais",
  description: "Aprimore sua presença digital com análises avançadas e insights estratégicos. Aumente o engajamento e alcance do seu conteúdo.",
  keywords: [
    "Social Pulse",
    "Métricas para redes sociais",
    "redes sociais",
    "análises de engajamento",
    "marketing digital",
    "social media analytics",
    "gestão de redes sociais",
    "estratégias de conteúdo",
    "aumento de engajamento",
    "tráfego orgânico",
    "ferramenta de redes sociais",
    "otimização de postagens",
    "inteligência artificial para social media",
  ],
  openGraph: {
    title: "Social Pulse - Análises Inteligentes para Redes Sociais",
    description: "Impulsionando o engajamento nas redes sociais com análises inteligentes.",
    siteName: "Social Pulse",
    type: "website",
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <MouseMoveEffect />
        <Toaster richColors theme="dark" />
        {children}
      </body>
    </html>
  )
}

