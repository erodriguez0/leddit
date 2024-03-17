import { ComponentPropsWithoutRef, ReactNode } from "react"

import { cn } from "@/lib/utils"

interface HeaderProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode
}

const Header = ({ className, children }: HeaderProps) => {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 h-16 w-full border-b bg-background",
        className,
      )}
    >
      <div className="container mx-auto flex h-full items-center px-2 text-sm xl:px-0">
        {children}
      </div>
    </header>
  )
}

export default Header
