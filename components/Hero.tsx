import React from "react"

const Hero = () => {
  return (
    <section className="bg-zinc-700 text-white h-screen flex items-center justify-center flex-col">
      <div className="container">
        <h1 className="uppercase text-4xl font-bold text-center mb-6 xl:text-6xl">
          Value and Vision Beyond Capital
        </h1>
        <p className="w-full text-center text-white text-xl xl:text-3xl xl:w-4/6 mx-auto">
          We are a boutique investment firm that specializes in seed capital for
          the telecom sector.
        </p>
      </div>
    </section>
  )
}

export default Hero
