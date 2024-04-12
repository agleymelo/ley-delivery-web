"use client";

import {
  type ReactNode,
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";

export type OrderItemCart = {
  id: string;
  photo: string;
  name: string;
  totalInCents: number;
  quantity: number;
};

type Product = {
  id: string;
  name: string;
  photo: string;
  priceInCents: number;
};

type CartContextProps = {
  cart: OrderItemCart[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  incrementItemCart: (productId: string) => void;
  decrementItemCart: (productId: string) => void;
  clearCart: () => void;
};

export const CartContext = createContext({} as CartContextProps);

type CartProviderProps = {
  children: ReactNode;
};

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<OrderItemCart[]>([]);

  function addToCart(product: Product) {
    const productAlreadyInCart = cart.find((item) => item.id === product.id);

    if (productAlreadyInCart) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        ),
      );
    } else {
      setCart([
        ...cart,
        {
          id: product.id,
          name: product.name,
          photo: product.photo,
          totalInCents: product.priceInCents,
          quantity: 1,
        },
      ]);
    }

    localStorage.setItem("@ley-delivery-web:cart", JSON.stringify(cart));
  }

  function removeFromCart(productId: string) {
    const productAlreadyInCart = cart.find((item) => item.id === productId);

    if (productAlreadyInCart) {
      setCart(cart.filter((item) => item.id !== productId));

      const updatedCart = cart.filter((item) => item.id !== productId);
      localStorage.setItem(
        "@ley-delivery-web:cart",
        JSON.stringify(updatedCart),
      );
    } else {
      console.log("Product not found in cart");
    }
  }

  function incrementItemCart(productId: string) {
    const findProduct = cart.find((item) => item.id === productId);

    if (findProduct) {
      const updatedCart = cart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      );
      setCart(updatedCart);
      localStorage.setItem(
        "@ley-delivery-web:cart",
        JSON.stringify(updatedCart),
      );
    }
  }

  function decrementItemCart(productId: string) {
    const productAlreadyInCart = cart.find((item) => item.id === productId);

    if (productAlreadyInCart) {
      if (productAlreadyInCart.quantity <= 1) {
        const updatedCart = cart.filter((item) => item.id !== productId);

        setCart(updatedCart);

        localStorage.setItem(
          "@ley-delivery-web:cart",
          JSON.stringify(updatedCart),
        );
      } else {
        const updatedCart = cart.map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        );
        setCart(updatedCart);
        localStorage.setItem(
          "@ley-delivery-web:cart",
          JSON.stringify(updatedCart),
        );
      }
    }
  }

  function clearCart() {
    setCart([]);
    localStorage.setItem("@ley-delivery-web:cart", JSON.stringify([]));
  }

  useEffect(() => {
    const cart = localStorage.getItem("@ley-delivery-web:cart");

    if (cart) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      setCart(JSON.parse(cart));
    }

    if (!cart) {
      localStorage.setItem("@ley-delivery-web:cart", JSON.stringify([]));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        incrementItemCart,
        decrementItemCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}
