
import { type OrderItemCart } from "~/providers/cart-provider";

type OrderItems = {
  id: string;
  totalInCents: number;
  quantity: number;
}

type GetProductsCartReply = {
  totalInCents: number;
  orderItems: OrderItems[];
};

export function getProductsCart(): GetProductsCartReply | null {
  if (typeof window !== "undefined") {

    const cart = global.localStorage?.getItem("@ley-delivery-web:cart");

    console.log(cart)


  }

  const cart = global.localStorage?.getItem("@ley-delivery-web:cart");

  console.log(cart)


  if (!cart) {
    return null;
  }

  const cartJSON = JSON.parse(cart) as OrderItemCart[];



  if (!cartJSON) {
    return null;
  }


  const cartFormatted = cartJSON.map((item) => {
    return {
      id: item.id,
      totalInCents: item.totalInCents,
      quantity: item.quantity,
    };
  });

  const totalInCents = cartFormatted.reduce((acc, item) => {
    return acc + item.totalInCents * item.quantity;
  }, 0);

  return {
    totalInCents,
    orderItems: cartFormatted,
  };
}
