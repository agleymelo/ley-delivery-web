"use server";

import { cookies } from "next/headers";
import { api } from "~/lib/axios";

export type CartItem = {
  id: string;
  totalInCents: number;
  quantity: number;
};

export type CreateOrderState = {
  totalInCents: number;
  orderItems: CartItem[];
};

export async function createOrder(prevState: CreateOrderState) {
  const { totalInCents, orderItems } = prevState;

  try {
    const token = cookies().get("@ley-delivery-web:token")?.value;

    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    await api.post("/orders/create-order", {
      totalInCents,
      orderItems,
    });


    return {
      message: "Pedido criado com sucesso",
      success: true
    }
  } catch (err) {
    throw new Error("Erro ao criar pedido");
  }
}
