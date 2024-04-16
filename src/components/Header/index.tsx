
import { NavItem } from "~/components/Header/nav-item";
import { api } from "~/lib/axios";

import { MenuHeader } from "./menu-header";

type GetCategoriesReply = {
  categories: Array<{
    id: string;
    name: string;
  }>;
};

export async function getCategories() {
  try {
    const response = await api.get<GetCategoriesReply>("/categories");

    return response.data.categories;
  } catch (err) {
    return;
  }
}

type HeaderProps = {
  signed: boolean | undefined;
};

export async function Header({ signed }: HeaderProps) {
  const categories = await getCategories();

  return (
    <MenuHeader signed={signed}>
      <NavItem path="/" name="Inicio" />
      {categories?.map((category) => (
        <NavItem
          key={category.id}
          className="flex content-start"
          path={`/category/${category.id}?page=1`}
          name={category.name}
        />
      ))}
    </MenuHeader>
  );
}
