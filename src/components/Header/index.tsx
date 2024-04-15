import { Menu, X } from "lucide-react";
import Link from "next/link";

import { NavItem } from "~/components/Header/nav-item";
import { ProfileMenu } from "~/components/Header/profile-menu";
import { Button } from "~/components/ui/button";
import { ToggleTheme } from "~/components/ui/toggle-theme";
import { api } from "~/lib/axios";

import { Separator } from "../ui/separator";
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
    return;
  }
}

type HeaderProps = {
  signed: boolean | undefined;
};

export async function Header({ signed }: HeaderProps) {
  const categories = await getCategories();

  return (
    <div className="border-b ">
      <header className="mx-auto flex h-16 w-full items-center gap-6 px-4">
        {/* hamburguer menu */}
        <div className="flex w-full items-center justify-between md:hidden">
          <button className="group md:hidden">
            <div className="mr-left">
              <Menu />
            </div>

            {/* menu */}
            <ul className="absolute -top-full right-0 z-10 flex h-screen w-full flex-col space-y-3 self-start bg-primary-foreground/90 duration-150 group-focus:top-0 ">
              <button className="relative ml-auto px-10 py-8">
                <X className="h-6 w-6" />
              </button>

              <NavItem
                className="flex content-start px-8"
                path="/"
                name="Início"
              />

              {categories?.map((category) => (
                <NavItem
                  key={category.id}
                  className="flex content-start px-8"
                  path={`/category/${category.id}?page=1`}
                  name={category.name}
                />
              ))}

              <div className="mt-4 flex flex-col items-start gap-4 px-4 md:hidden">
                <Separator className="my-4 h-px bg-primary" />

                {!signed && (
                  <>
                    <Button className="w-full">
                      <Link href="/auth/sign-in">Entrar</Link>
                    </Button>
                    <Button
                      variant="default"
                      className="w-full bg-muted-foreground"
                    >
                      <Link href="/auth/sign-up">Cadastrar</Link>
                    </Button>
                  </>
                )}
              </div>
            </ul>
          </button>

          <div className="flex items-center gap-4 md:hidden">
            {signed && <ProfileMenu />}
            <ToggleTheme />
            <CartHeader className="" />
          </div>
        </div>

        <Link href="/" className="hidden md:block">
          <span className="text-1xl font-medium ">Ley Delivery</span>
        </Link>

        <div className="hidden flex-1 md:flex">
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
                <Button variant="link">
                  <Link href="/auth/sign-up">Criar conta</Link>
                </Button>
              </>
            )}
            <ToggleTheme />
            <CartHeader />
          </div>
        </div>

        {/* <div>
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
        </div> */}
      </header>
    </div>
  );
}
