import { BarChart2, Clock, LetterText, Plus, Users, Zap } from "lucide-react"
import { Webhook, BarChart } from "lucide-react"

const features = [
  {
    name: "Dashboard Completo",
    description:
      "Visualize métricas principais como curtidas, compartilhamentos, alcance e engajamento em um só lugar.",
    icon: BarChart2,
  },
  {
    name: "Comparação de Posts",
    description: "Identifique facilmente os conteúdos com melhor performance para replicar o sucesso.",
    icon: Users,
  },
  {
    name: "Sugestões Inteligentes",
    description: "Receba dicas personalizadas, como 'Poste mais reels' ou 'Melhor horário para postar: 19h'.",
    icon: Zap,
  },
  {
    name: "Geração de posts",
    description: "Geramos posts que vão engajar seu perfil, apenas nos de um tópico, que fazemos o trabalho dificil.",
    icon: Plus,
  },
  {
    name: "Relatórios via e-mail",
    description: "Receba relatórios semanais sobre as suas redes sociais, tudo detalhadamente direto no seu email.",
    icon: LetterText,
  },
  {
    name: "Análise Comparativa",
    description: "Compare o desempenho entre diferentes redes sociais para otimizar sua estratégia em cada plataforma.",
    icon: BarChart,
  },
]

export default function Features() {
  return (
    <section id="funcionalidades" className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Funcionalidades Poderosas</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Descubra como o SocialPulse pode transformar sua presença nas redes sociais com nossas ferramentas inovadoras.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.name} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <div className="flex items-center gap-4">
              <feature.icon className="h-8 w-8" />
              <h3 className="font-bold">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

