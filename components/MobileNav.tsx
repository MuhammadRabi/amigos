"use client"

import { ChevronsRight } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
type NavProps = {
  setOpen?: any
}
export default function MobileNav({ setOpen }: NavProps) {
  const path = usePathname()

  return (
    <nav className="flex gap-8 flex-col">
      <Link
        href={"/"}
        className={`group flex items-center gap-2 mobile_nav hover:text-white tracking-wide hover:font-bold text-2xl text-slate-300 duration-300 ${
          path === "/" ? "active" : ""
        }`}
        onClick={() => setOpen(false)}
      >
        Start
        <ChevronsRight className="text-future-orange mt-1 group-[.active]:hidden" />
      </Link>

      <Link
        href={"/entrepreneurs"}
        className={`group flex items-center gap-2 mobile_nav hover:text-white tracking-wide hover:font-bold text-2xl text-slate-300 duration-300 ${
          path === "/entrepreneurs" ? "active" : ""
        }`}
        onClick={() => setOpen(false)}
      >
        For Entrepreneurs
        <ChevronsRight className="text-future-orange mt-1 group-[.active]:hidden" />
      </Link>
      <Link
        href={"/network"}
        className={`group flex items-center gap-2 mobile_nav hover:text-white tracking-wide hover:font-bold text-2xl text-slate-300 duration-300 ${
          path === "/network" ? "active" : ""
        }`}
        onClick={() => setOpen(false)}
      >
        Network
        <ChevronsRight className="text-future-orange mt-1 group-[.active]:hidden" />
      </Link>
      <Link
        href={"/news"}
        className={`group flex items-center gap-2 mobile_nav hover:text-white tracking-wide hover:font-bold text-2xl text-slate-300 duration-300 ${
          path === "/news" ? "active" : ""
        }`}
        onClick={() => setOpen(false)}
      >
        News{" "}
        <ChevronsRight className="text-future-orange mt-1 group-[.active]:hidden" />
      </Link>
      <Link
        href={"/contact"}
        className={`group flex items-center gap-2 mobile_nav hover:text-white tracking-wide hover:font-bold text-2xl text-slate-300 duration-300 ${
          path === "/contact" ? "active" : ""
        }`}
        onClick={() => setOpen(false)}
      >
        Contact
        <ChevronsRight className="text-future-orange mt-1 group-[.active]:hidden" />
      </Link>
    </nav>
  )
}
