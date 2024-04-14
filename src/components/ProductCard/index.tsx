"use client";

import Image, { type StaticImageData } from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { useCart } from "~/providers/cart-provider";

type ProductCardProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
};

export function ProductCard({
  id,
  name,
  description,
  price,
  image_url,
}: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <>
      <div className="rounded-sm border">
        <Link href={`/product/${id}`}>
          <Image
            src={image_url}
            alt={name}
            width={144}
            height={144}
            className="h-36 w-screen cursor-pointer rounded-t-sm object-cover object-center"
          />
        </Link>

        <div className="flex flex-col items-start justify-start gap-2 p-4">
          <h3 className="font-sans text-lg font-normal text-foreground/90">
            {name}
          </h3>
          <span className="line-clamp-2 text-sm text-secondary-foreground/70">
            {description}
          </span>
        </div>
        <div className="flex items-center gap-4  md:flex-row md:justify-between p-4">
          <span className="text-base flex">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(price / 100)}
          </span>

          <div>
            <Button
              type="button"
              onClick={() => addToCart({ id, name, priceInCents: price, photo: String(image_url) })}
              className="bg-rose-600 hover:bg-rose-500 dark:bg-rose-400"
            >
              Adicionar eu Carrinho
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
