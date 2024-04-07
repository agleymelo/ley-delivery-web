import { Pagination } from "~/components/Pagination";

import productOne from '~/assets/product/product-example.jpg'
import { ProductCard } from "~/components/ProductCard";

export function CategoryPage() {
  return (
    <div className="mx-auto my-8 max-w-6xl gap-4">
      <div className="mt-8">
        <h1 className="font-sans text-3xl font-medium tracking-tight">
          Produtos da categoria - Café
        </h1>
      </div>

      <main className="mt-6 grid grid-cols-3 gap-8 my-4">
        {Array.from({ length: 12 }).map((_, index) => {
          return (
            <ProductCard key={index} title="Sanduiche muito legal" description="saunduiche crocante e natural" price={9} image_url={productOne} />
          )
        })}
      </main>

      <Pagination pageIndex={4} totalCount={105} perPage={10} />
    </div>
  );
}
