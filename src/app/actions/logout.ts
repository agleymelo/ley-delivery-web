import { cookies } from "next/headers";

export async function logout() {
  cookies().delete("@ley-delivery-web:token");
}