"use client";

import { type StaticImageData } from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { useCart } from "~/providers/cart-provider";

type ProductCardProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string | StaticImageData;
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
          <img
            src={image_url}
            alt={name}
            className="h-36 w-screen cursor-pointer rounded-t-sm object-cover"
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
        <div className="flex items-center justify-between p-4">
          <span>
            Preço:{" "}
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(price / 100)}
          </span>

          <div>
            <Button
              type="button"
              onClick={() => addToCart({ id, name, priceInCents: price, photo: String(image_url) })}
            >
              Adicionar eu Carrinho
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
