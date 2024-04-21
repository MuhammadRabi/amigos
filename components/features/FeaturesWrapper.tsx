import React from "react"
import Feature from "./Feature"
import { features } from "@/constants"

const FeaturesWrapper = () => {
  return (
    <section>
      <div className="container flex flex-col gap-20 justify-center xl:flex-row xl:gap-16">
        {features.map((feat) => (
          <Feature
            key={feat.title}
            image={feat.image}
            title={feat.title}
            content={feat.content}
          />
        ))}
      </div>
    </section>
  )
}

export default FeaturesWrapper
