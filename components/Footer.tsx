import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-12 bg-charcoal space-y-8 xl:space-y-2">
      <div className="container flex flex-col justify-between items-center xl:flex-row">
        <div className="flex flex-col gap-8 items-center xl:flex-row max-xl:mb-4">
          <Image
            src={"/footer-logo.png"}
            width={75}
            height={50}
            alt={"footer-log"}
          />
          <p className="text-white text-center">
            © 2024 Amigos Venture Capital LLC . All rights reserved.
          </p>
        </div>
        <div className="nav text-zinc-500 flex items-center flex-col gap-4 xl:flex-row text-center">
          <Link
            href="/legal"
            className="text-sm hover:text-zinc-300 duration-300"
          >
            Legal Disclaimer
          </Link>
          <Link href="/" className="text-sm hover:text-zinc-300 duration-300">
            Privacy & Cookie Policy
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
            className="lucide lucide-linkedin cursor-pointer hover:text-zinc-300 duration-300"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </div>
      </div>
    </footer>
  )
}
