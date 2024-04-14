"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { type ComponentProps } from "react";
import { useCart } from "~/providers/cart-provider";

type CartHeaderProps = ComponentProps<"a">

export function CartHeader({ ...props }: CartHeaderProps) {
  const { cart } = useCart();

  return (
    <Link href="/cart" className="px-4 h-min outline-none" {...props}>
      <div className="relative cursor-pointer">
        <ShoppingCart />

        <span className="absolute -right-2 -top-2 rounded-full bg-rose-500 p-[2px] px-1 text-xs text-primary-foreground">
          {cart.length}
        </span>
      </div>
    </Link>
  );
}
