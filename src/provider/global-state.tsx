"use client"

import { type ReactNode } from "react";
import { CartProvider } from "./cart-provider";

type GlobalStateProps = {
  children: ReactNode;
}

export function GlobalStateProvider({ children }:GlobalStateProps) {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  )
} 