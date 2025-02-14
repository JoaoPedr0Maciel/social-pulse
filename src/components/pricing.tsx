'use client'
import { Check } from "lucide-react"
import { Badge } from "./ui/badge"
import Preregister from "./pre-register"

const plans = [
  {
    name: "Básico",
    price: "R$99",
    description: "Ideal para influenciadores iniciantes e pequenas marcas",
    moreChoosed: false,
    features: [
      "Análise de 3 redes sociais",
      "Dashboard com métricas principais",
      "Comparação de até 10 posts por mês",
      "Sugestões de melhoria básicas",
      "Suporte por email",
    ],
  },
  {
    name: "Profissional",
    price: "R$299",
    description: "Perfeito para influenciadores em crescimento e empresas de médio porte",
    moreChoosed: true,
    features: [
      "Análise de todas as redes sociais",
      "Dashboard avançado com métricas detalhadas",
      "Comparação ilimitada de posts",
      "Sugestões de melhoria personalizadas",
      "Monitoramento de até 3 concorrentes",
      "Integração com Notion e Slack",
      "Suporte prioritário",
    ],
  },
  {
    name: "Empresarial",
    price: "Personalizado",
    description: "Solução completa para grandes marcas e agências",
    moreChoosed: false,
    features: [
      "Todas as funcionalidades do plano Profissional",
      "Análise de múltiplas contas",
      "API personalizada",
      "Monitoramento ilimitado de concorrentes",
      "Integrações personalizadas",
      "Gerente de conta dedicado",
      "Treinamento e consultoria",
    ],
  },
]

export default function Pricing() {
  return (
    <section id="precos" className="py-20 dark">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Escolha o Plano Ideal para Você</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={plan.name} className="border p-8 rounded-lg shadow-md flex flex-col">
              {plan.moreChoosed && <Badge className="flex self-end bg-cyan-300">Mais escolhido</Badge>}
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">
                {plan.price}
                {plan.price !== "Personalizado" && <span className="text-lg font-normal text-gray-600">/mês</span>}
              </p>
              <p className="text-gray-300 mb-6">{plan.description}</p>
              <ul className="mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Preregister buttonText='Impulsone seu engajamento' />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

