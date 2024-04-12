import { HomePageClient } from "./client/home-page-client";
import { genTenRecentlyAddedProducts } from "./actions/get-ten-recently-added-product";

export default async function Page() {
  const products = await genTenRecentlyAddedProducts();

  return <HomePageClient products={products} />;
}
