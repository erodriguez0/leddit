import { ArrowDownIcon, ArrowUpIcon, ImageIcon } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

const PostItem = () => {
  return (
    <div className="flex w-full flex-col gap-4 rounded-md border p-2 text-sm md:flex-row md:p-4">
      <div className="hidden h-fit w-10 shrink-0 flex-col items-center gap-2 overflow-hidden md:flex">
        <Button
          size="icon"
          variant="outline"
          className="h-[2.125rem] w-[2.125rem] hover:text-primary"
        >
          <ArrowUpIcon className="h-5 w-5" />
        </Button>

        <span className="font-semibold tracking-tighter">99.9K</span>

        <Button
          size="icon"
          variant="outline"
          className="h-[2.125rem] w-[2.125rem] hover:text-indigo-500"
        >
          <ArrowDownIcon className="h-5 w-5" />
        </Button>
      </div>

      <Link
        href="/"
        className="flex aspect-square shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground md:h-[6.5rem] md:w-[6.5rem]"
      >
        <ImageIcon className="h-9 w-9" />
      </Link>

      <div className="flex flex-col">
        <Link
          href="/"
          className="pb-1 text-base font-semibold leading-5 tracking-tight"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dicta
          alias officiis consequuntur quae soluta, harum deserunt, saepe tempora
          exercitationem obcaecati iure dolorem, enim error quisquam est
          similique quis. Dolore
        </Link>

        <span className="hidden text-muted-foreground md:inline-block">
          submitted 7 hours ago by{" "}
          <Link
            href="/"
            className="font-medium text-foreground hover:underline"
          >
            esteban
          </Link>{" "}
          to{" "}
          <Link
            href="/"
            className="font-medium text-foreground hover:underline"
          >
            liga_mx
          </Link>{" "}
        </span>

        <div className="hidden gap-2 font-medium md:flex">
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground"
          >
            comments
          </Link>

          <button className="text-muted-foreground hover:text-foreground">
            save
          </button>

          <button className="text-muted-foreground hover:text-foreground">
            report
          </button>
        </div>
      </div>
    </div>
  )
}

export default PostItem
