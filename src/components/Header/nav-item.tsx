"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { type ComponentProps } from "react"


type NavItemProps = ComponentProps<"li"> & {
  path: string
  name: string
}

export function NavItem({ path, name, className}: NavItemProps) {
  const pathname = usePathname()

  const isActivePath = path === pathname


  return (
    <li className={className}>
      <Link href={path} className={`${isActivePath ? "font-normal text-foreground text-md" : "font-normal text-primary/90 text-md hover:text-foreground"}`}>{name}</Link>
    </li>
  )
}