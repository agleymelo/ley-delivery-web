"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { signInAuthenticate } from "./actions/action";

const initialState = {
  success: "",
  redirect: "",
};

export function SignInClient() {
  const [state, formAction] = useFormState(signInAuthenticate, initialState);
  const router = useRouter();

  useEffect(() => {
    if (state) {
      if (state.success) {
        toast.success(state.success);
        router.push(state.redirect);
      }
    }
  }, [router, state]);

  return (
    <div className="p-8 ">
      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Fazer login</h1>
          <p className="text-sm text-muted-foreground ">
            Faça login e compre seus produtos favoritos!
          </p>
        </div>

        <form className="space-y-4" action={formAction}>
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
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
