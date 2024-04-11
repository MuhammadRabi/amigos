import React from "react"

type HeadlineProps = {
  headline: string
}

const SectionHead = ({ headline }: HeadlineProps) => {
  return <h2 className="font-bold text-3xl capitalize">{headline}</h2>
}

export default SectionHead
