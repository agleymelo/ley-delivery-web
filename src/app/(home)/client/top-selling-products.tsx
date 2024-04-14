import { ProductCard } from "~/components/ProductCard";

type Product = {
  id: string;
  name: string;
  description: string;
  priceInCents: number;
  images: string[];
};

type TopSellingProductProps = {
  products: Product[] | undefined;
};

export function TopSellingProduct({ products }: TopSellingProductProps) {
  const nineProducts = products?.slice(0, 9);

  return (
    <section className="mt-6 px-4">
      <h2 className="text-center text-base font-bold tracking-tight md:text-2xl">
        Produtos mais vendidos na semana
      </h2>

      <div className="mt-6 flex flex-col gap-8 md:grid md:grid-cols-3 md:gap-8">
        {nineProducts?.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.priceInCents}
              image_url={product.images[0]!}
            />
          );
        })}
      </div>
    </section>
  );
}
