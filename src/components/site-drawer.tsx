"use client"

import { MenuIcon, XIcon } from "lucide-react"
import { useEffect, useState } from "react"

import { buttonVariants } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { cn } from "@/lib/utils"

const SiteDrawer = () => {
  const [open, setOpen] = useState<boolean>(false)

  const closeOnWidth = (width: number) => {
    if (width > 768) {
      setOpen(false)
    }
  }

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setOpen(false)
    }

    window.addEventListener("resize", () => closeOnWidth(window.innerWidth))

    return () => {
      window.removeEventListener("resize", () =>
        closeOnWidth(window.innerWidth),
      )
    }
  }, [])

  return (
    <Drawer
      direction="right"
      open={open}
      onOpenChange={setOpen}
    >
      <DrawerTrigger>
        <div
          onClick={() => setOpen(prev => !prev)}
          className={cn(
            buttonVariants({ size: "icon", variant: "outline" }),
            "h-9 w-9",
          )}
        >
          <MenuIcon className="h-4 w-4" />
        </div>
      </DrawerTrigger>
      <DrawerContent className="flex flex-col text-sm">
        <div className="flex w-full items-center justify-end p-4">
          <DrawerClose>
            <XIcon className="h-4 w-4" />
          </DrawerClose>
        </div>

        <div className="px-4">Drawer Content</div>
      </DrawerContent>
    </Drawer>
  )
}

export default SiteDrawer
