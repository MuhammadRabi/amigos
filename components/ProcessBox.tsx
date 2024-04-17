import React from "react"

type BoxProps = {
  title: string
  number: string
  children: React.ReactNode
}

const ProcessBox = ({ title, number, children }: BoxProps) => {
  return (
    <article className="flex gap-8 mb-8">
      <span className="text-future-orange font-bold text-6xl">{number}</span>
      <div className="content">
        <h3 className="mb-2 font-bold capitalize">{title}</h3>
        {children}
      </div>
    </article>
  )
}

export default ProcessBox
