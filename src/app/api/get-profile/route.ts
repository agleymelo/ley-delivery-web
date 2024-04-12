import { NextResponse, type NextRequest } from "next/server";
import { api } from "~/lib/axios";

export async function GET(request: NextRequest) {
  const headers = request.headers;

  try {
    api.defaults.headers.Authorization = headers.get("authorization");

    const response = await api.get("/users/profile");

    return NextResponse.json(response.data);
  } catch (err) {
    headers.delete("authorization");

    request.cookies.delete("@ley-delivery-web:token");
    
    return Response.json(err.response.data, { status: err.response.status })
  }
}
