import React from "react"
import Image from "next/image"
import SectionHead from "../SectionHead"
const Offices = () => {
  return (
    <>
      <SectionHead headline={"offices"} />
      <div className="flex flex-col items-center gap-16 xl:flex-row xl:w-3/4">
        <div className="space-y-16 order-2 xl:order-1 w-full xl:w-1/4">
          <div className="px-16 sm:max-xl:mx-auto text-center xl:px-0 xl:text-left">
            <h3 className="font-bold mb-2">Stockholm</h3>
            <p>C/O Tuleby Studios Olivecronas väg 8113 61 Stockholm-Sweden</p>
          </div>
          <div className="px-16 max-xl:mx-auto text-center xl:px-0 xl:text-left">
            <h3 className="font-bold mb-2">Dubai</h3>
            <p>
              C/O Sigma Private PartnersUnit 18-32. Office Tower Central Park
              Towers DIFC DubaiUAE
            </p>
          </div>
          <div className="px-16 sm:max-xl:mx-auto text-center xl:px-0 xl:text-left">
            <h3 className="font-bold mb-2">Lusaka</h3>
            <p>
              The Paddock Leopards Hill Road Plot no 2174, Unit 19 Lusaka Zambia
            </p>
          </div>
        </div>
        <Image
          src="/map.png"
          width={330}
          height={500}
          alt={"offices-map"}
          className="py-4 order-1"
        />
      </div>
    </>
  )
}

export default Offices
