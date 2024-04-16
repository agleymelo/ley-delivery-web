"use server";

import { AxiosError } from "axios";
import { redirect } from "next/navigation";
import { api } from "~/lib/axios";

export async function SignUp(prevState: unknown, formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    await api.post("/users/register", {
      name,
      email,
      password,
    });

    const redirectAfterCreatedUser = redirect("/auth/sign-in");

    return {
      message: "Usuário cadastrado com sucesso",
      redirect: redirectAfterCreatedUser,
    };
  } catch (err) {
    if (err instanceof AxiosError) {
      if (err.response?.status === 409) {
        return {
          message: "E-mail já cadastrado",
        };
      }
    }

    throw err;
  }
}
