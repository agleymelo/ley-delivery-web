"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useCart } from "~/provider/cart-provider";

export function CartHeader() {
  const { cart } = useCart();

  return (
    <Link href="/cart">
    <div className="relative cursor-pointer">
      <ShoppingCart />

      <span className="absolute -right-2 -top-2 rounded-full bg-rose-500 p-[2px] px-1 text-xs text-primary-foreground">
        {cart.length}
      </span>
    </div>
    </Link>
  );
}
