"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { api } from "~/lib/axios";

export async function updateProfile(prevState: unknown, formData: FormData) {
  const email = formData.get("email");
  const name = formData.get("name");
  const oldPassword = formData.get("oldPassword");
  const password = formData.get("password");

  const token = cookies().get("@ley-delivery-web:token")?.value;

  try {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    await api.put("/users", {
      email,
      name,
      oldPassword,
      password,
    });


    revalidateTag("/perfil");

    return {
      message: "Perfil atualizado com sucesso",
    };
  } catch (err) {
    // throw new Error("Erro ao atualizar perfil")
    console.log("Erro ao atualizar perfil");
  }
}
