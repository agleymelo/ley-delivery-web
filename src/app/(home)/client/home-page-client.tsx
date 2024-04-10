import { Hero } from "./hero";
import { TopSellingProduct } from "./top-selling-products";

type HomePageClientProps = {
  products: Array<{
    id: string;
    name: string;
    description: string;
    priceInCents: number;
    images: string[];
  }> | undefined;
}

export function HomePageClient({ products }: HomePageClientProps) {

  return (
    <div>
      <Hero />

      <main className="mx-auto my-8 max-w-6xl gap-4">
        <TopSellingProduct products={products} />
      </main>
    </div>
  );
}
