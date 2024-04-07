import { Hero } from "./hero";
import { TopSellingProduct } from "./top-selling-products";

export function HomePage() {
  return (
    <div>
      <Hero />

      <main className="mx-auto my-8 max-w-6xl gap-4">
        <TopSellingProduct />
      </main>
    </div>
  );
}
