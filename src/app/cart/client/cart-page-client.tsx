"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { CartDetail } from "./cart-detail";

export function CartPageClient() {
  return (
    <>
      <div className="mx-auto grid h-full w-full grid-cols-2 gap-4 px-10 py-4">
        <div className="flex flex-col">
          <h2 className="font-sans text-2xl font-normal tracking-tight text-primary">
            Order Summary
          </h2>

          <Separator className="my-8 w-9/12 self-center" />

          <div className="flex flex-col">
            <div className="flex gap-4">
              <img
                src="https://placehold.co/100x100"
                alt=""
                className="rounded-md"
              />

              <h3 className="mt-1 font-sans text-base text-primary/80">
                Cafe gostoso
              </h3>

              <div className="ml-auto flex flex-col">
                <span className="self-end px-4 text-foreground/85">
                  RS 59,90
                </span>

                <div className="mt-auto flex items-center gap-2">
                  <Button type="button" variant="ghost" className="p-2">
                    <Minus className="" />
                  </Button>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                    <span className="text-sm font-bold">1</span>
                  </div>

                  <Button type="button" variant="ghost" className="p-2">
                    <Plus className="" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-4 w-2/3 self-center" />
        </div>

        <CartDetail />
      </div>
    </>
  );
}
