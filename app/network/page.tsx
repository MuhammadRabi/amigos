import SectionHead from "@/components/SectionHead"
import { networks } from "@/constants"
import Image from "next/image"

export default function network() {
  return (
    <section className="min-h-[50vh] section-wrapper">
      <div className="part-one flex flex-col justify-between items-center xl:flex-row">
        <div className="flex-1">
          <SectionHead headline={"network"} />
          <div className="content">
            <article className="text-xl font-medium py-3 mb-2">
              Amigos Venture Capital is striving to create a community that
              helps entrepreneurs to thrive on their journey.
            </article>
            <p>
              As part of our investment philosophy – Value and Vision Beyond
              Capital – we want to help the entrepreneur to meet the best
              companies, people, and organizations in the industry to enable
              growth and profitability. When funded by Amigos Venture Capital
              you will get access to our network of companies, industry
              professionals and organizations that can provide anything from
              specific software solutions to consultancy or only a quick advice
              on your burning problems. The Amigos network is a key component
              for our success - empowering our entrepreneurs to build
              exceptional companies.  
            </p>
          </div>
        </div>
        <Image
          src="/network/network.png"
          width={270}
          height={320}
          alt={"network-pic"}
          className="object-cover flex-1"
        />
      </div>
      <div className="part-two grid grid-cols-1 gap-24 xl:grid-cols-3">
        {networks.map((net) => (
          <article key={net.id} className="max-w-sm mx-auto space-y-4">
            <Image
              src={net.image}
              width={162}
              height={58}
              alt={"net-image"}
              className="object-contain mx-auto h-12"
            />
            <p className="text-center xl:text-left">{net.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
