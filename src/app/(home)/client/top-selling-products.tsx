import productOne from "~/assets/banner/banner-1.jpg";
import { ProductCard } from "~/components/ProductCard";

export function TopSellingProduct() {
  return (
    <section className="mt-6">
      <h2 className="text-2xl font-bold tracking-tight">
        Produtos mais vendidos na semana
      </h2>

      <div className="mt-6 grid grid-cols-3 gap-8">
        {Array.from({ length: 7 }).map((_, index) => {
          return (
            <ProductCard
              key={index}
              title="Cafe de chocolate com chantilly"
              description="Cafe delicioso de 450ML com gosto de chocolate que acompanha chantilly"
              price={19.9}
              image_url={productOne}
            />
          );
        })}
      </div>
    </section>
  );
}
