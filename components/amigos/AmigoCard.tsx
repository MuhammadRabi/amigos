import { TalentsTypes } from "@/types"
import Image from "next/image"
import React from "react"

const AmigoCard = ({ name, title, image, desc, content }: TalentsTypes) => {
  return (
    <article className="max-w-lg min-w-fit mx-auto bg-white rounded-lg p-8 py-12 shadow-md">
      <div className="flex flex-col items-center gap-4 xl:gap-12 xl:flex-row">
        <div className="info space-y-2 order-2">
          <h2 className="text-center text-future-orange text-2xl capitalize font-bold xl:text-left">
            {name}
          </h2>
          <h3 className="text-center text-sm font-bold capitalize xl:text-left">
            {title}
          </h3>
          <p>{content}</p>
        </div>
        <Image
          src={image}
          width={150}
          height={185}
          alt="title"
          className="order-1 object-cover xl:order-2"
        />
      </div>
      <p className="mt-2">{desc}</p>
    </article>
  )
}

export default AmigoCard
