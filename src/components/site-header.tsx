import { UserIcon } from "lucide-react"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import Header from "@/components/ui/header"
import { Input } from "@/components/ui/input"

import SiteDrawer from "@/components/site-drawer"
import ThemeToggle from "@/components/theme-toggle"

import { getAuthSession } from "@/lib/auth"
import { cn } from "@/lib/utils"

const SiteHeader = async () => {
  const session = await getAuthSession()

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

        {!session && (
          <>
            <Link
              href="/auth/login"
              className={cn(buttonVariants({ size: "sm" }))}
            >
              Login
            </Link>

            <Link
              href="/auth/register"
              className={cn(
                buttonVariants({ size: "sm", variant: "secondary" }),
              )}
            >
              Sign Up
            </Link>
          </>
        )}

        {session && (
          <>
            <Link
              href="/"
              className={cn(
                buttonVariants({ size: "icon", variant: "outline" }),
                "h-9 w-9",
              )}
            >
              <UserIcon className="h-4 w-4" />
            </Link>
          </>
        )}

        <ThemeToggle />
      </div>

      <div className="ml-auto flex items-center justify-end gap-2 md:hidden">
        <SiteDrawer />
      </div>
    </Header>
  )
}

export default SiteHeader
