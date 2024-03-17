import { ReactNode } from "react"

import SiteHeader from "@/components/site-header"

interface HomeLayoutProps {
  children: ReactNode
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <>
      <SiteHeader />
    </>
  )
}

export default HomeLayout
