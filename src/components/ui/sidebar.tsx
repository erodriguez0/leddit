import { ComponentPropsWithoutRef, ReactNode } from "react"

import { cn } from "@/lib/utils"

interface SidebarProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode
}

const Sidebar = ({ className, children }: SidebarProps) => {
  return (
    <aside
      className={cn(
        "z-50 hidden w-80 flex-col gap-4 bg-background p-4 md:flex",
        className,
      )}
    >
      {children}
    </aside>
  )
}

export default Sidebar
