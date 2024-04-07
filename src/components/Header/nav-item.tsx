"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

type NavItemProps = {
  path: string
  name: string
}

export function NavItem({ path, name}: NavItemProps) {
  const pathname = usePathname()

  const isActivePath = path === pathname


  return (
    <li>
      <Link href={path} className={`${isActivePath ? "font-normal text-foreground text-md" : "font-normal text-primary/90 text-md hover:text-foreground"}`}>{name}</Link>
    </li>
  )
}