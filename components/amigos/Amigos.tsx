import React from "react"
import AmigoCard from "./AmigoCard"
import SectionHead from "../SectionHead"
import { talents } from "@/constants"

const Amigos = () => {
  return (
    <section className="section-wrapper w-full space-y-4 bg-zinc-200/40">
      <SectionHead headline="Amigos" />
      <div className="grid grid-cols-1 justify-between gap-16 xl:grid-cols-2">
        {talents.map((talent) => (
          <AmigoCard key="talent.name" {...talent} />
        ))}
      </div>
    </section>
  )
}

export default Amigos
