import { ReactNode } from "react"

import SiteHeader from "@/components/site-header"
import SiteSidebar from "@/components/site-sidebar"

interface HomeLayoutProps {
  children: ReactNode
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <>
      <SiteHeader />
      <div className="container mx-auto flex min-h-[calc(100vh-4rem)] gap-4 px-2 md:p-0 xl:border-x">
        <div className="flex flex-1 flex-col p-2 md:p-4">{children}</div>
        <SiteSidebar />
      </div>
    </>
  )
}

export default HomeLayout
