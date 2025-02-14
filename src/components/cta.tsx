'use client'
import Preregister from "./pre-register"

export default function CTA() {
  return (
    <section className="border-t">
      <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Pronto para impulsionar seu engajamento?
        </h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Junte-se a influenciadores e marcas de sucesso que confiam no SocialPulse para dominar suas estratégias de
          redes sociais e se destacar na era digital.
        </p>
        <Preregister buttonText='Impulsone seu engajamento' />
      </div>
    </section>
  )
}

