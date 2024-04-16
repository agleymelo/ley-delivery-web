"use client";

import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

type ProductClientProps = {
  title: string;
  description: string;
  price: number;
  image: string;
};

export function ProductClient({
  title,
  description,
  price,
  image,
}: ProductClientProps) {
  const [amount, setAmount] = useState(1);

  return (
    // className="mx-auto my-8 grid w-full max-w-6xl grid-cols-2 gap-8"
    <div className="flex flex-col p-4 my-8 h-full md:grid md:grid-cols-2 md:gap-8">
      <div>
        <Image src={image ?? ["https://placehold.co/600x400"]} width={600} height={400} alt={title} className="object-cover rounded-sm" />
      </div>

      <main className="flex flex-col gap-4">
        <div className="mt-8">
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
          </div>

          <div className="mt-4">
            <Button className="w-full bg-rose-500 dark:bg-rose-500 hover:bg-rose-400 hover:dark:bg-rose-500 text-primary" >Comprar agora</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
