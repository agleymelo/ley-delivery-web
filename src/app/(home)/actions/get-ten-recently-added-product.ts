import { api } from "~/lib/axios";

type GetTenRecentlyAddedProductsReply = {
  products: Array<{
    id: string;
    name: string;
    description: string;
    priceInCents: number;
    images: string[];
  }>;
};

export async function genTenRecentlyAddedProducts() {
  try {
    const response = await api.get<GetTenRecentlyAddedProductsReply>("/products", {
      params: {
        pageIndex: 0,
      },
    });
  
    return response.data.products;
  } catch (err) {
    console.log(err);
  }
}
