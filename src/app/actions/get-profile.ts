// "use server";

import { AxiosError } from "axios";
import { cookies } from "next/headers";
import { api } from "~/lib/axios";

type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
};

type GetProfileReply = {
  user: User | undefined;
  signed: boolean;
};

export async function getProfile(): Promise<
  GetProfileReply | null | undefined
> {
  const tokenCookies = cookies().get("@ley-delivery-web:token")?.value;

  if (!tokenCookies) {
    return null;
  }

  if (tokenCookies) {
    api.defaults.headers.common.Authorization = `Bearer ${tokenCookies}`;

    try {
      const result = await api.get<GetProfileReply>("/users/profile");

      const { user } = result.data;

      if (!user) {
        return null;
      }

      return {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          role: user.role,
        },
        signed: true,
      };
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response?.status === 401) {
          console.log("Usuário não autenticado");
        }
      }
    }
  }

  return {
    user: undefined,
    signed: false,
  };
}
