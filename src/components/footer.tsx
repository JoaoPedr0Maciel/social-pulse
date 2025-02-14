import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12">
        <div className="flex-1 space-y-4">
          <h2 className="font-bold">SocialPulse</h2>
          <p className="text-sm text-muted-foreground">
            Impulsionando o engajamento nas redes sociais com análises inteligentes.
          </p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-12 sm:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Produto</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/dashboard" className="text-muted-foreground transition-colors hover:text-primary">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/integrações" className="text-muted-foreground transition-colors hover:text-primary">
                  Integrações
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Empresa</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/sobre" className="text-muted-foreground transition-colors hover:text-primary">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground transition-colors hover:text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Conecte-se</h3>
            <div className="flex space-x-4">
              <Link
                target="_blank" href="https://api.whatsapp.com/send/?phone=5566999028161"
                className="text-muted-foreground transition-colors hover:text-primary flex item-center gap-2"
              >

                <span className="text-sm">WhatsApp</span>
              </Link>
              {/* <Link
                href="https://twitter.com/socialpulse"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://linkedin.com/company/socialpulse"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container border-t py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} SocialPulse. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

