import { Suspense } from "react";

import { HomePageClient } from "./client/home-page-client";
import { genTenRecentlyAddedProduct } from "./actions/get-ten-recently-added-product";

export default async function Page() {
  const products = await genTenRecentlyAddedProduct();

  return (
    <>
      <Suspense fallback={<p>loading</p>}>
        <HomePageClient products={products} />
      </Suspense>
    </>
  );
}
