"use client";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { SignUp } from "./action";
import { useFormState } from "react-dom";
import { toast } from "sonner";

const initialState = {
  message: "",
};
export function SignUpClient() {
  const [state, formAction] = useFormState(SignUp, initialState);

  if (state) {
    toast.error(state.message);
  }
  

  return (
    <div className="p-8">
      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Crie sua conta
          </h1>
          <p className="text-sm text-muted-foreground ">
            Crie sua conta e comece a fazer pedidos agora mesmo!
          </p>
        </div>

        <form className="space-y-4" action={formAction}>
          <div className="space-y-2">
            <Label htmlFor="name">Seu nome</Label>
            <Input
              id="name"
              name="name"
              type="name"
              placeholder="Exemplo: João da Silva"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Seu e-mail</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="seu@email.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="******"
            />
          </div>

          <Button type="submit" className="w-full">
            Criar conta
          </Button>
        </form>

        <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
          Ao continuar, você concorda com nossos{" "}
          <a
            href="/terms"
            className="underline underline-offset-4 hover:text-primary"
          >
            Termos de serviço
          </a>{" "}
          e{" "}
          <a
            href="/privacy"
            className="underline underline-offset-4 hover:text-primary"
          >
            Políticas de privacidade
          </a>
          .
        </p>
      </div>
    </div>
  );
}
