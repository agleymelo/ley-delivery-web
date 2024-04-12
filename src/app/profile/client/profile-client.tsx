"use client";

import { useFormState, useFormStatus } from "react-dom";
import { updateProfile } from "../action/update-profile";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { useEffect } from "react";
import { toast } from "sonner";

const initialState = {
  message: "",
};

type ProfileClientProps = {
  name: string;
  email: string;
};

export function ProfileClient({ name, email }: ProfileClientProps) {
  const [state, formAction] = useFormState(updateProfile, initialState);
  const { pending } = useFormStatus();

  useEffect(() => {
    if (state?.message) {
      toast.success(state?.message);
    }
  }, [state]);

  return (
    <form
      className="mx-auto my-4 flex w-2/3 flex-col items-center gap-4"
      action={formAction}
    >
      <div className="w-full ">
        <Label
          htmlFor="name"
          className="text-sm font-normal text-muted-foreground"
        >
          Nome
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Ex: João"
          defaultValue={name}
        />
      </div>
      <div className="w-full ">
        <Label
          htmlFor="email"
          className="text-sm font-normal text-muted-foreground"
        >
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Ex: email@test.com"
          defaultValue={email}
        />
      </div>

      <div className="w-full ">
        <Label
          htmlFor="oldPassword"
          className="text-sm font-normal text-muted-foreground"
        >
          Senha
        </Label>
        <Input
          id="oldPassword"
          name="oldPassword"
          type="password"
          placeholder="Digite sua senha antiga"
        />
      </div>

      <div className="w-full ">
        <Label
          htmlFor="password"
          className="text-sm font-normal text-muted-foreground"
        >
          Confirmar Senha
        </Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Digite sua nova senha"
        />
      </div>

      <Button className="w-full" disabled={pending}>
        Atualizar perfil
      </Button>
    </form>
  );
}
