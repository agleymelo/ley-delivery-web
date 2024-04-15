import { SkeletonProductId } from "~/components/Skeleton/product-id/skeleton-product-id";
import { api } from "~/lib/axios";

type Product = {
  id: string;
  name: string;
  description: string;
  priceInCents: number;
  images: string[];
}

type ShowProductReply = {
  product: Product | undefined; 
};

async function showProduct(productId: string) {
  try {
    const response = await api.get<ShowProductReply>(`/products/${productId}`);

    return response.data.product;
  } catch (err) {
    console.log(err)
  }
}

export default async function Page({
  params,
}: {
  params: { productId: string };
}) {

  const product  = await showProduct(params.productId)

  console.log(product)


  if (product === undefined) {
    return (
      <SkeletonProductId />
    )
  }

  // return (
  //   <ProductClient
  //     title={product.name}
  //     description={product.description}
  //     price={product.priceInCents}
  //     images={product.images}
  //   />
  // );
}
