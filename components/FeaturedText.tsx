import React from "react"

const FeaturedText = ({ children }: { children: React.ReactNode }) => {
  return (
    <article className="font-medium py-1 mb-2 xl:text-xl xl:leading-7 max-xl:text-center xl:py-3">
      {children}
    </article>
  )
}

export default FeaturedText
