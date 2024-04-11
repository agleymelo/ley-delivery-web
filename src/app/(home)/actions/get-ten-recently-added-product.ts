import { api } from "~/lib/axios";

type GenTenRecentlyAddedProductReply = {
  products: Array<{
    id: string;
    name: string;
    description: string;
    priceInCents: number;
    images: string[];
  }>;
};

export async function genTenRecentlyAddedProduct() {
  try {
    const response = await api.get<GenTenRecentlyAddedProductReply>("/products", {
      params: {
        pageIndex: 0,
      },
    });
  
    return response.data.products;
  } catch (err) {
    console.log(err);
  }
}
