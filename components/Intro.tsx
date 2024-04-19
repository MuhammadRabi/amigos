import Image from "next/image"
import React from "react"
import FeaturedText from "./FeaturedText"
const Intro = () => {
  return (
    <section className="flex flex-col items-center gap-16 bg-zinc-200/40 section-wrapper xl:flex-row">
      <div className="content space-y-4 flex-1">
        <FeaturedText>
          Amigos Venture Capital is a boutique investment firm that specializes
          in seed capital for the telecom sector. We combine industry expertise
          with passion and personal networks to support the entrepreneurs we
          partner with.
        </FeaturedText>
        <p>
          Headquartered in Dubai, Stockholm and Lusaka, we are supporting telcos
          and fin-tech worldwide. The founders and partners have a long
          friendship and strong ambition to support new endeavours. We believe
          in finding and supporting the right people rather than finding the
          right business. With extensive experience in building and managing
          telecommunications and fintech enterprises, we at Amigos Venture
          Capital offer hands-on guidance and support to our investments  We
          make a number of selective investments each year in our focus areas.
          Although we have specializations, we are open for investing in the
          right people with the right idea in adjacent areas of our portfolio.
          The fund is backed by long-term Swedish private investors.
        </p>
      </div>
      <Image
        src={"/logosketch 1.png"}
        width={480}
        height={380}
        alt={"intro"}
        className="flex-1 object-cover"
      />
    </section>
  )
}

export default Intro
