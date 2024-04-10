import { HomePageClient } from "./client/home-page-client";
import { genTenRecentlyAddedProduct } from "./actions/get-ten-recently-added-product";


export default async function Page() {

  const products = await genTenRecentlyAddedProduct();


  return (
    <HomePageClient products={products} />
  )
}