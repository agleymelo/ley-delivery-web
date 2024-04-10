
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { NavItem } from "./nav-item";
import { ProfileMenu } from "./profile-menu";
import { Button } from "../ui/button";
import Link from "next/link";

type HeaderProps = {
  user:
    | {
        id: string;
        name: string;
        email: string;
        phone: string;
        role: string;
      }
    | undefined;
  isSigned: boolean | undefined;
  categories: Array<{
    id: string;
    name: string;
  }>;
};

export async function Header({
  user: _user,
  isSigned,
  categories,
}: HeaderProps) {
  const signed = isSigned;

  return (
    <div className="border-b">
      <header className="mx-auto flex h-16  items-center gap-6 px-10">
        <span className="text-1xl font-medium ">Ley Delivery</span>
        <div>
          <nav className="flex items-center">
            <ul className="flex-items flex gap-3">
              {categories.map((category) => (
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

        <div className="ml-auto flex">
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
        </div>
      </header>
    </div>
  );
}
