import React from "react"

type HeadlineProps = {
  headline: string
}

const SectionHead = ({ headline }: HeadlineProps) => {
  return (
    <h2 className="font-bold text-3xl capitalize mb-4 max-xl:text-center">
      {headline}
    </h2>
  )
}

export default SectionHead
