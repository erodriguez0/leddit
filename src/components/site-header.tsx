import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import Header from "@/components/ui/header"
import { Input } from "@/components/ui/input"

import SiteDrawer from "@/components/site-drawer"
import ThemeToggle from "@/components/theme-toggle"

import { cn } from "@/lib/utils"

const SiteHeader = () => {
  return (
    <Header>
      <div className="flex h-full items-center gap-2">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tighter"
        >
          leddit
        </Link>
      </div>

      <div className="ml-auto hidden items-center justify-end gap-2 md:flex">
        <Input
          type="search"
          placeholder="Search leddit..."
          className="h-9 w-80"
        />

        <Link
          href="/auth/login"
          className={cn(buttonVariants({ size: "sm" }))}
        >
          Login
        </Link>

        <Link
          href="/auth/register"
          className={cn(buttonVariants({ size: "sm", variant: "secondary" }))}
        >
          Sign Up
        </Link>

        <ThemeToggle />
      </div>

      <div className="ml-auto flex items-center justify-end gap-2 md:hidden">
        <SiteDrawer />
      </div>
    </Header>
  )
}

export default SiteHeader
