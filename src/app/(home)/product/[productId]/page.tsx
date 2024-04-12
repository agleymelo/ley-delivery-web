import { api } from "~/lib/axios";
import { ProductClient } from "./client/product-client";

type ShowProductReply = {
  product: {
    id: string;
    name: string;
    description: string;
    priceInCents: number;
    images: string[];
  };
};

async function showProduct(productId: string) {
  try {
    const response = await api.get<ShowProductReply>(`/products/${productId}`);

    return response.data;
  } catch (err) {
    throw err;
  }
}

export default async function Page({
  params,
}: {
  params: { productId: string };
}) {
  const { product } = await showProduct(params.productId);

  return (
    <ProductClient
      title={product.name}
      description={product.description}
      price={product.priceInCents}
      images={product.images}
    />
  );
}
