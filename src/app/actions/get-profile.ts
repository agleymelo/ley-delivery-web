import { AxiosError } from "axios";
import { cookies } from "next/headers";
import { api } from "~/lib/axios";

type GetProfileReply = {
  user: {
    id: string;
    name: string;
    email: string;
    phone: string;
    role: string;
  };
  signed: boolean;
};

export async function getProfile(): Promise<GetProfileReply | null | undefined> {
  const tokenCookies = cookies().get("@ley-delivery-web:token")?.value;

  if (!tokenCookies) {
    return null;
  }

  if (tokenCookies) {
    api.defaults.headers.common.Authorization = `Bearer ${tokenCookies}`;

    try {
      const result = await api.get<GetProfileReply>("/users/profile");

      return {
        user: {
          id: result.data.user.id,
          name: result.data.user.name,
          email: result.data.user.email,
          phone: result.data.user.phone,
          role: result.data.user.role,
        },
        signed: true,
      };
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response?.status === 401) {
          console.log("Usuário não autenticado");

          cookies().delete("@ley-delivery-web:token");
        }
      }
    }
  }

  return {
    user: {
      id: "",
      name: "",
      email: "",
      phone: "",
      role: "",
    },
    signed: false,
  }
  
}
