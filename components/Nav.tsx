"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Nav() {
  const path = usePathname()
  return (
    <nav className="bg-ivory py-16 flex justify-between items-center gap-32 xl:gap-8 section-wrapper mb-2 shadow-lg">
      <Link href={"/"}>
        <Image src="/logo.png" width={200} height={71} alt={"logo"} />
      </Link>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="xl:hidden lucide lucide-align-justify cursor-pointer w-12 h-12 hover:scale-105 duration-100"
      >
        <line x1="3" x2="21" y1="6" y2="6" />
        <line x1="3" x2="21" y1="12" y2="12" />
        <line x1="3" x2="21" y1="18" y2="18" />
      </svg>
      <div className="hidden xl:block">
        <ul className="flex gap-8">
          <Link
            href={"/entrepreneurs"}
            className={`hover:font-bold duration-300 nav_link relative ${
              path === "/entrepreneurs" ? "active" : ""
            }`}
          >
            For Entrepreneurs
          </Link>
          <Link
            href={"/network"}
            className={`hover:font-bold duration-300 nav_link relative ${
              path === "/network" ? "active" : ""
            }`}
          >
            Network
          </Link>
          <Link
            href={"/news"}
            className={`hover:font-bold duration-300 nav_link relative ${
              path === "/news" ? "active" : ""
            }`}
          >
            News
          </Link>
          <Link
            href={"/contact"}
            className={`hover:font-bold duration-300 nav_link relative ${
              path === "/contact" ? "active" : ""
            }`}
          >
            Contact
          </Link>
        </ul>
      </div>
    </nav>
  )
}
