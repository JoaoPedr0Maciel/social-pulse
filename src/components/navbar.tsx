'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Preregister from "./pre-register"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-sm:flex max-sm:justify-between flex h-14 max-w-screen-2xl items-center">
        <Link href="#home" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">SocialPulse</span>
        </Link>
        <nav className="hidden md:flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link href="#funcionalidades" className="transition-colors hover:text-primary">
            Funcionalidades
          </Link>
          <Link href="#precos" className="transition-colors hover:text-primary">
            Preços
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            <Link target="_blank" href="https://api.whatsapp.com/send/?phone=5566999028161">
              Contato
            </Link>
          </Button>
          <div className="hidden lg:flex">
            <Preregister buttonText="Iniciar" />
          </div>
        </div>
      </div>
    </header>
  )
}

