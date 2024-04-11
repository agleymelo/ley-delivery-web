"use client";

import { type ReactNode, createContext, useState, useContext, useEffect } from "react";

type Cart = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type Product = {
  id: string;
  name: string;
  priceInCents: number;
};

type CartContextProps = {
  cart: Cart[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  incrementItemCart: (product: Product) => void;
  decrementItemCart: (product: Product) => void;
};

export const CartContext = createContext({} as CartContextProps);

type CartProviderProps = {
  children: ReactNode;
};

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Cart[]>([]);

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
          price: product.priceInCents,
          quantity: 1,
        },
      ]);
    }

    localStorage.setItem("@ley-delivery-web:cart", JSON.stringify(cart));
  }

  function removeFromCart(product: Product) {
    const productAlreadyInCart = cart.find((item) => item.id === product.id);

    if (productAlreadyInCart) {
      setCart(cart.filter((item) => item.id !== product.id));

      const updatedCart = cart.filter((item) => item.id !== product.id);
      localStorage.setItem("@ley-delivery-web:cart", JSON.stringify(updatedCart));
    } else {
      console.log("Product not found in cart");
    }
  }

  function incrementItemCart(product: Product) {
    const productAlreadyInCart = cart.find((item) => item.id === product.id);

    if (productAlreadyInCart) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
      setCart(updatedCart);
      localStorage.setItem("@ley-delivery-web:cart", JSON.stringify(updatedCart));
    }
  }

  function decrementItemCart(product: Product) {
    const productAlreadyInCart = cart.find((item) => item.id === product.id);

    if (productAlreadyInCart) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      );
      setCart(updatedCart);
      localStorage.setItem("@ley-delivery-web:cart", JSON.stringify(updatedCart));
    }
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


  }, [])

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        incrementItemCart,
        decrementItemCart,
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