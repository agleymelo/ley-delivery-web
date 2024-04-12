/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";

import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { useCart } from "~/providers/cart-provider";
import { createOrder, type CreateOrderState } from "../action/create-order";


export function CartDetails() {
  const { cart, clearCart } = useCart();

  // const [paymentMethod, setPaymentMethod] = useState("credit-cart");
  const [taxShippingDelivery] = useState(1290);

  const total = cart.reduce(
    (acc, item) => acc + item.totalInCents * item.quantity,
    0,
  );

  const initialState: CreateOrderState = {
    totalInCents: total,
    orderItems: cart.map((item) => {
      return {
        id: item.id,
        totalInCents: item.totalInCents,
        quantity: item.quantity,
      };
    }),
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment
  const [state, formAction, isPending] = useFormState<any>(createOrder, initialState);


  useEffect(() => {
    if (state.message) {
      toast.success(state.message);
    }
  }, [state.message])

  if (state.success) {
    clearCart();
  }


  return (
    <div>
      <form className="flex flex-col" action={formAction}>
        <div className="flex justify-between">
          <h1 className="font-sans text-2xl font-normal tracking-tight text-primary">
            Seu carrinho
          </h1>
          <strong>{cart.length ?? 0} Items</strong>
        </div>

        <Separator className="my-8 w-9/12 self-center" />

        {/* Cart Details  */}
        <div className="rounded-sm border p-4">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <span className="text-base text-muted-foreground">Subtotal:</span>
              <strong className="font-">
                {(total / 100).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </strong>
            </div>

            <div className="flex justify-between">
              <span className="text-base text-muted-foreground">
                Taxa de entrega:
              </span>
              <strong className="font-">
                {(taxShippingDelivery / 100).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </strong>
            </div>

            <Separator className="" />

            <div className="flex justify-between">
              <span className="text-lg text-muted-foreground">Total:</span>
              <strong className="font-">
                {((total + taxShippingDelivery) / 100).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </strong>
            </div>
          </div>
        </div>

        {/* Address */}
        {/* <div className="">
          <div className="my-4 flex items-center gap-4">
            <div className="w-full ">
              <Label
                htmlFor="city"
                className="text-sm font-normal text-muted-foreground"
              >
                Cidade
              </Label>
              <Input id="city" type="text" placeholder="Ex: São Paulo" />
            </div>
            <div className="w-full ">
              <Label
                htmlFor="state"
                className="text-sm font-normal text-muted-foreground"
              >
                Estado
              </Label>
              <Input id="state" type="text" placeholder="Ex: São Paulo" />
            </div>
          </div>

          <div className="my-4 flex items-center gap-4">
            <div className="w-full space-y-2">
              <Label
                htmlFor="street"
                className="text-sm font-normal text-muted-foreground"
              >
                Rua
              </Label>
              <Input id="street" type="text" placeholder="Ex: Rua 10" />
            </div>
            <div className="w-full space-y-2">
              <Label
                htmlFor="neighborhood"
                className="text-sm font-normal text-muted-foreground"
              >
                Bairro
              </Label>
              <Input
                id="neighborhood"
                type="text"
                placeholder="Ex: São Paulo"
              />
            </div>
            <div className="w-full space-y-2">
              <Label
                htmlFor="number"
                className="text-sm font-normal text-muted-foreground"
              >
                N da casa
              </Label>
              <Input id="number" type="text" placeholder="Ex: 10" />
            </div>
          </div>
        </div> */}

        {/* Payment */}
        {/* <div className="flex flex-col">
          <strong>Pagamento</strong>

          <div className="mt-4 rounded-sm border">
            <div className="flex gap-4 p-4">
              <Checkbox
                id="credit-cart"
                checked={paymentMethod === "credit-cart"}
                onCheckedChange={() => setPaymentMethod("credit-cart")}
              />
              <Label htmlFor="credit-cart">Cartão de crédito</Label>
            </div>
            <Separator className="" />
            <div className="flex gap-4 p-4">
              <Checkbox
                id="cash"
                checked={paymentMethod === "cash"}
                onCheckedChange={() => setPaymentMethod("cash")}
              />
              <Label htmlFor="cash">Pagamento na Entrega</Label>
            </div>
          </div>
        </div>

        {paymentMethod === "credit-cart" && (
          <div className="mt-4">
            <div className="flex gap-4">
              <div className="w-full">
                <Label
                  htmlFor="card-number"
                  className="text-sm font-normal text-muted-foreground"
                >
                  Número do cartão
                </Label>
                <Input
                  id="card-number"
                  type="text"
                  placeholder="Ex: 1234 1234 1234 1234"
                />
              </div>
              <div className="w-full">
                <Label
                  htmlFor="card-name"
                  className="text-sm font-normal text-muted-foreground"
                >
                  Nome no cartão
                </Label>
                <Input id="card-name" type="text" placeholder="Ex: João" />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-full">
                <Label
                  htmlFor="card-date"
                  className="text-sm font-normal text-muted-foreground"
                >
                  Data de validade
                </Label>
                <Input id="card-date" type="text" placeholder="Ex: 12/24" />
              </div>
              <div className="w-full">
                <Label
                  htmlFor="card-cvv"
                  className="text-sm font-normal text-muted-foreground"
                >
                  CVV
                </Label>
                <Input id="card-cvv" type="text" placeholder="Ex: 123" />
              </div>
            </div>
          </div>
        )} */}

        <Separator className="my-8 w-9/12 self-center" />

        <Button className="w-full text-primary-foreground dark:text-primary bg-rose-500 hover:bg-rose-600 dark:bg-rose-400 hover:dark:bg-rose-500" disabled={isPending}>
          Finalizar compra!
        </Button>
      </form>
    </div>
  );
}
