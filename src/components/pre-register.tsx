import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2 } from "lucide-react";
import {
  Dialog, DialogContent, DialogDescription,
  DialogFooter, DialogHeader, DialogTitle, DialogTrigger
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

interface DialogProps {
  buttonText: string;
}
export default function Preregister({ buttonText }: DialogProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsApp, setWhatsApp] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true)


    try {
      const response = await fetch('/api/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, whatsApp }),
      });

      const data = await response.json();
      if (data.success) {
        toast.success("Em breve entraremos em contato!");
      } else {
        toast.error("No momento estamos passando por uma manutenção, tente novamente dentro de 15 minutos");
      }
    } catch (error) {
      toast.error("No momento estamos passando por uma manutenção, tente novamente dentro de 15 minutos");
      console.error(error);
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg">
          {buttonText}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Pré-registro Social Pulse</DialogTitle>
          <DialogDescription>
            Impulsionando o engajamento nas redes sociais com análises inteligentes.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={sendEmail} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">Nome</Label>
            <Input
              id="name" value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="João Pedro Maciel" className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">Email</Label>
            <Input
              id="email" value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="joaopedromaciel@gmail.com" className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="whatsApp" className="text-right">WhatsApp</Label>
            <Input
              id="whatsApp" value={whatsApp}
              onChange={(e) => setWhatsApp(e.target.value)}
              placeholder="66 9.9999-9999" className="col-span-3"
            />
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isLoading} className="w-20">
              {isLoading ? < Loader2 className="animate-spin size-5" /> : 'Enviar'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
