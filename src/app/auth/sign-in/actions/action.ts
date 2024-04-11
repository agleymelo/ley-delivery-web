"use server"

import { cookies } from "next/headers"
import { api } from "~/lib/axios"

type SignInAuthenticateReply = {
  token: string
}

export async function signInAuthenticate(prevState: any, formData: FormData) {
  const email = formData.get("email")
  const password = formData.get("password")

  try {
    const result = await api.post<SignInAuthenticateReply>("/users/sessions", {
      email,
      password
    })
  
    cookies().set("@ley-delivery-web:token", result.data.token, {
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
      httpOnly: true,
    })

    api.defaults.headers.Authorization = `Bearer ${result.data.token}`

    return {
      success: "Usuário autenticado com sucesso",
      redirect: "/",
    }

  }  catch (err) {
    throw err
  }

}