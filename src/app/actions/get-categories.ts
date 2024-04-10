import { api } from "~/lib/axios";

type GetCategoriesReply = {
  categories: Array<{
    id: string;
    name: string;
  }>;
};

export async function getCategories() {
  const response = await api.get<GetCategoriesReply>("/categories");

  return response.data.categories;
}
