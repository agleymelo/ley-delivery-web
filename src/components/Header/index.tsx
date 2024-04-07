import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { NavItem } from "./nav-item";
import { ProfileMenu } from "./profile-menu";

export function Header() {
  return (
    <div className="border-b">
      <header className="mx-auto flex h-16 max-w-6xl items-center gap-6 ">
      <span className="text-1xl font-medium ">Ley Delivery</span>
      <div>
        <nav className="flex items-center">
          <ul className="flex-items flex gap-3">
            <NavItem path="/" name="Início" />
            <NavItem path="/category/cafe" name="Cafe" />
            <NavItem path="/category/bebidas" name="Bebidas" />
            <NavItem path="/category/sobremesas" name="Sobremesas" />
          </ul>
        </nav>
      </div>

      <div>
        <Label htmlFor="search" className="flex items-center rounded-sm border">
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
        <ProfileMenu />
        {/* <CartDrawer /> */}
      </div>
    </header>
    </div>
  );
}
