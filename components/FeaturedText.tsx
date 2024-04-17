import React from "react"

const FeaturedText = ({ children }: { children: React.ReactNode }) => {
  return (
    <article className="text-xl font-medium py-3 mb-2 leading-7 max-xl:text-center">
      {children}
    </article>
  )
}

export default FeaturedText
