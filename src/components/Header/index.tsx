
import Link from "next/link";
import { Search } from "lucide-react";
import { NavItem } from "~/components/Header/nav-item";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { ProfileMenu } from "~/components/Header/profile-menu";
import { Button } from "~/components/ui/button";
import { api } from "~/lib/axios";
import { ToggleTheme } from "~/components/ui/toggle-theme";

import { CartHeader } from "./cart-header";

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
    return
  }
}

type HeaderProps = {
  signed: boolean | undefined;
};

export async function Header({ signed }: HeaderProps) {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <header className="mx-auto flex h-16 items-center gap-6 px-10">
        <Link href="/">
          <span className="text-1xl font-medium ">Ley Delivery</span>
        </Link>
        <div>
          <nav className="flex items-center">
            <ul className="flex-items flex gap-3">
              {categories?.map((category) => (
                <NavItem
                  key={category.id}
                  path={`/category/${category.id}?page=1`}
                  name={category.name}
                />
              ))}
            </ul>
          </nav>
        </div>

        <div>
          <Label
            htmlFor="search"
            className="flex items-center rounded-sm border"
          >
            <Search className="h-4 w-8" />
            <Input
              id="search"
              type="text"
              placeholder="Pesquisar por produto"
              className="w-[380px] border-none outline-none"
            />
          </Label>
        </div>

        <div className="ml-auto flex items-center gap-4">
          {signed && (
            <>
              <ProfileMenu />
            </>
          )}
          {!signed && (
            <>
              <Button variant="link">
                <Link href="/auth/sign-in">Entrar</Link>
              </Button>
              <Button variant="ghost">
                <Link href="/auth/sign-up">Cadastrar</Link>
              </Button>
            </>
          )}
          <ToggleTheme />
          <CartHeader />
        </div>
      </header>
    </div>
  );
}
