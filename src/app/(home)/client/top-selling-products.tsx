"use client"

import { ProductCard } from "~/components/ProductCard";

type TopSellingProductProps = {
  products:
    | Array<{
        id: string;
        name: string;
        description: string;
        priceInCents: number;
        images: string[];
      }>
    | undefined;
};

export function TopSellingProduct({ products }: TopSellingProductProps) {
  const nineProducts = products?.slice(0, 9);

  return (
    <section className="mt-6">
      <h2 className="text-2xl font-bold tracking-tight">
        Produtos mais vendidos na semana
      </h2>

      <div className="mt-6 grid grid-cols-3 gap-8">
        {nineProducts?.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.priceInCents}
              image_url={product.images[0]}
            />
          );
        })}
      </div>
    </section>
  );
}
