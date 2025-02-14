'use client'
import { FormEvent, useState } from "react"
import Preregister from "./pre-register"



export default function Hero() {

  return (
    <section id="home" className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
      <div className="space-y-4">
        <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          Potencialize seu
          <br />
          Engajamento Social
        </h1>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Análise avançada e estratégias inteligentes para impulsionar seu desempenho nas redes sociais.
          Domine o Instagram, TikTok, LinkedIn e YouTube com insights poderosos.
        </p>
      </div>
      <div className="flex gap-4">
        <Preregister buttonText="Faça seu pré registro" />
      </div>
    </section >
  )
}
