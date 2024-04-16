"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { ToggleTheme } from "../ui/toggle-theme";
import { CartHeader } from "./cart-header";
import { ProfileMenu } from "./profile-menu";

type MenuMobileProps = {
  children: ReactNode;
  signed: boolean | undefined;
};

export function MenuHeader({ children, signed }: MenuMobileProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b">
      <nav className="flex h-16 w-full items-center gap-6 px-4">
        <button
          className="mr-left cursor-pointer md:hidden"
          onClick={() => setOpen(!open)}
        >
          <Menu />
        </button>

        <div>
          <Link href="/" className="hidden md:block">
            <span className="text-1xl font-medium ">Ley Delivery</span>
          </Link>
        </div>

        <div
          className={`${open ? "absolute left-0 top-0 z-10 flex h-full w-full items-start bg-primary-foreground/95 md:static md:hidden" : "hidden md:flex "}`}
        >
          <ul className="flex-items flex w-full flex-col gap-3 px-4 md:flex-row">
            <button className="relative ml-auto  py-8 md:hidden">
              <X className="h-6 w-6" onClick={() => setOpen(!open)} />
            </button>

            {children}

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
        </div>

        <div className="ml-auto flex items-center gap-4">
          {signed && (
            <>
              <ProfileMenu />
            </>
          )}
          {!signed && (
            <div className="hidden md:flex md:gap-4">
              <Button variant="link" className="bg-rose-500">
                <Link href="/auth/sign-in">Entrar</Link>
              </Button>
              <Button variant="link" className="bg-rose-500">
                <Link href="/auth/sign-up">Criar conta</Link>
              </Button>
            </div>
          )}
          <ToggleTheme />
          <CartHeader />
        </div>
      </nav>
    </header>
  );
}
