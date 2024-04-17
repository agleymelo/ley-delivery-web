import { cookies } from "next/headers";
import { CartPageClient } from "./client/cart-page-client";
import { api } from "~/lib/axios";
import { AxiosError } from "axios";
import { redirect } from "next/navigation";

type GetProfileReply = {
  user: {
    id: string;
    name: string;
    email: string;
    phone: string;
    role: string;
  } | null;
  signed: boolean;
};

async function getProfile(): Promise<
  GetProfileReply | null | undefined
> {
  const token = cookies().get("@ley-delivery-web:token")?.value;

  if (!token) {
    return null;
  }

  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    try {
      const result = await api.get<GetProfileReply>("/users/profile");

      return {
        user: result.data.user,
        signed: true,
      };
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response?.status === 401 ) {
          console.log("Usuário não autenticado");

          redirect("/auth/sign-in");
        }
      }
    }
  }

  return {
    user: null,
    signed: false,
  };
}


export default async function page() {
  const profile = await getProfile()

  const signed = profile?.signed

  return <CartPageClient signed={signed ?? false} />
}
