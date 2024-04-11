"use client";

import { Minus, Plus } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import { use, useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

type ProductClientProps = {
  title: string;
  description: string;
  price: number;
  images: string[];
};

export function ProductClient({
  title,
  description,
  price,
  images,
}: ProductClientProps) {
  const [amount, setAmount] = useState(1);

  return (
    <div className="mx-auto my-8 grid w-full max-w-6xl grid-cols-2 gap-8">
      <div>
        <img src={images[0]} alt={title} className="object-cover" />
      </div>

      <main className="flex flex-col gap-4 ">
        <div className="flex flex-col gap-4">
          <h1 className="font-sans text-3xl tracking-tight">{title}</h1>
        </div>

        <div className="space-y-2">
          <span className="text-sm text-foreground/50">Detalhe:</span>
          <p className="text-lg text-foreground">{description}</p>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <p className="mt-4 text-2xl font-bold">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(price / 100)}
            </p>
          </div>

          <div className="mt-4 flex items-center gap-4">
            <Button variant="ghost" onClick={() => setAmount(prevState => prevState - 1)}>
              <Minus className="h-4 w-4" />
            </Button>
            <div>
              <Label htmlFor="amount" className="sr-only">
                Quantidade
              </Label>
              <Input id="amount" type="number" value={amount} className="w-20" />
            </div>
            <Button variant="ghost" onClick={() => setAmount(prevState => prevState + 1)}>
              <Plus className="h-4 w-4" />
            </Button>

            <div>
              <Button>Adicionar ao Carrinho</Button>
            </div>
          </div>

          <div className="mt-4">
            <Button className="w-full bg-rose-500 dark:bg-rose-400 hover:bg-rose-400 hover:dark:bg-rose-500" >Comprar agora</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
