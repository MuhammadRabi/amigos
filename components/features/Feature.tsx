import Image from "next/image"
import React from "react"

type FeatureProps = {
  image: string
  title: string
  content: string
}

const Feature = ({ image, title, content }: FeatureProps) => {
  return (
    <article>
      <Image
        src={image}
        width={120}
        height={120}
        alt={title}
        className="mx-auto"
      />
      <h3 className="my-6 text-center font-bold">{title} </h3>
      <p className="text-sm leading-5 text-center xl:text-left">{content}</p>
    </article>
  )
}

export default Feature
