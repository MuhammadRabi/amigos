"use client"
import FeaturedText from "@/components/FeaturedText"
import SectionHead from "@/components/SectionHead"
export default function Legal() {
  return (
    <section className="section-wrapper min-h-[80vh]">
      <SectionHead headline="legal disclaimer" />
      <div className="content space-y-4">
        <FeaturedText>
          The details expressed in this website and accompanying documents or
          transmissions are meant for illustrative or information purposes only
          and are not intended as a solicitation for funds or a recommendation
          to trade or otherwise the giving of advice.
        </FeaturedText>
        <p className="">
          No representations or warranties are given or implied that the
          information contained in this website is complete or accurate or
          appropriate to anyone wishing to rely on it and no reliance should be
          placed on it, and only on any materials or content which are contained
          in a definitive written agreement between Amigos Venture Capital LLC
          and any of its customers or clients shall be relied upon and none of
          this website shall be incorporated into that definitive written
          agreement by reference or by implication. Amigos Venture Capital
          accepts no liability whatsoever for any loss or damages suffered
          through any act or omission taken as a result of reading or
          interpreting any of the information contained or related to this
          site.  Amigos Venture Capital is a trading name of Amigos Venture
          Capital LLC . The Firm’s registered off ice and principal place of
          business is at Unit 18-32, Office Tower, Central Park Towers, DIFC,
          Dubai, United Arab Emirates. 
        </p>
      </div>
    </section>
  )
}
