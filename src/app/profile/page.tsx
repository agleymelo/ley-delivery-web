import { AxiosError } from "axios";
import { cookies } from "next/headers";
import Link from "next/link";
import { api } from "~/lib/axios";
import { ProfileClient } from "./client/profile-client";
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

export async function getProfile(): Promise<
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


export default async function Page() {
  const profile = await getProfile();

  const user = profile?.user

  if (!user) {
    return null
  }

  return (
    <div className="mx-auto h-full w-full px-10 py-4">
      <div>
        <div className="flex items-center">
          <Link href="/">
            
            <span className="text-muted-foreground flex items-center hover:underline"> Voltar</span>
          </Link>
        </div>
        <h1 className="text-2xl font-semibold">Perfil</h1>
      </div>

      <ProfileClient name={user.name} email={user.email} />
    </div>
  );
}
