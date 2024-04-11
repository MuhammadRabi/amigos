import React from "react"
import Feature from "./Feature"
import { features } from "@/constants"

const FeaturesWrapper = () => {
  return (
    <section className="flex flex-col gap-20 justify-center section-wrapper xl:flex-row xl:gap-16">
      {features.map((feat) => (
        <Feature
          key={feat.title}
          image={feat.image}
          title={feat.title}
          content={feat.content}
        />
      ))}
    </section>
  )
}

export default FeaturesWrapper
