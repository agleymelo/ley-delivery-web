import { ProductClient } from "./client/product-client";

import productExample from '~/assets/product/product-example.jpg'

export default async function Page({
  params,
}: {
  params: { productId: string };
}) {
  console.log(params);

  return (
    <ProductClient
      title="Cafe de chocolate com chantilly"
      description="Cafe delicioso de 450ML com gosto de chocolate que acompanha chantilly"
      price={19.9}
      images={[productExample]}
    />
  );
}
