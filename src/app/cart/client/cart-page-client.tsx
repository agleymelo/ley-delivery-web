"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { CartDetails } from "./cart-details";
import { useCart } from "~/providers/cart-provider";

export function CartPageClient() {
  const { cart, incrementItemCart, decrementItemCart } = useCart();

  return (
    <>
      <div className="mx-auto grid h-full w-full grid-cols-2 gap-4 px-10 py-4">
        <div className="flex flex-col">
          <h2 className="font-sans text-2xl font-normal tracking-tight text-primary">
            Order Summary
          </h2>

          <Separator className="my-8 w-9/12 self-center" />

          <div className="flex flex-col gap-4">
            {cart?.map((item) => (
              <div key={item.id} className="flex gap-4">
                <img
                  src={item.photo}
                  alt=""
                  className="rounded-md h-24 w-24 object-cover"
                />

                <h3 className="mt-1 font-sans text-base text-primary/80">
                  {item.name}
                </h3>

                <div className="ml-auto flex flex-col">
                  <span className="self-end px-4 text-foreground/85">
                    {(item.totalInCents / 100).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>

                  <div className="mt-auto flex items-center gap-2">
                    <Button type="button" variant="ghost" className="p-2" onClick={() => decrementItemCart(item.id)}>
                      <Minus className="" />
                    </Button>

                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                      <span className="text-sm font-bold">{item.quantity}</span>
                    </div>

                    <Button type="button" variant="ghost" className="p-2" onClick={() => incrementItemCart(item.id)}>
                      <Plus className="" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Separator className="my-4 w-2/3 self-center" />
        </div>

        <CartDetails />
      </div>
    </>
  );
}
