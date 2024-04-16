"use client";

import { CarouselHome } from "./carousel-home";

import { TopSellingProduct } from "./top-selling-products";

type Product = {
  id: string;
  name: string;
  description: string;
  priceInCents: number;
  image: string;
};

type HomePageClientProps = {
  products: Product[] | undefined;
};

export function HomePageClient({ products }: HomePageClientProps) {
  return (
    <div>
      <CarouselHome />

      <main className="mx-auto max-w-6xl gap-4">
        <TopSellingProduct products={products} />
      </main>
    </div>
  );
}
