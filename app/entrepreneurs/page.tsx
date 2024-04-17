import FeaturedText from "@/components/FeaturedText"
import SectionHead from "@/components/SectionHead"
import Image from "next/image"
import Link from "next/link"

export default function enterp() {
  return (
    <section className="section-wrapper space-y-8">
      <div className="flex flex-col gap-16 justify-between items-center xl:flex-row mb-12">
        <div className="flex-1">
          <SectionHead headline={"Welcome, Entrepreneurs"} />
          <div className="content">
            <FeaturedText>
              For us at Amigos Venture Capital putting great effort in ensuring
              the right fit is key for ensuring a long-term viable relationship.
              As we engage beyond invested capital, we believe that a foundation
              where both you as an entrepreneur and we as investors feel the
              chemistry is one of our key principles for success.
            </FeaturedText>
            <p>
              We will have a fun, challenging and rewarding time ahead together
              so shaping that strong partnership spirit will be critical. As our
              brand name indicates at Amigos, we see ourselves as your extended
              team to back you in ups and downs through our thorough experience
              from the telecom industry. In the companies where we invest, we
              commit to give our all to orchestrate the success of you as
              entrepreneurs. You are leading the way and us surrounding you,
              supporting you in every possible way throughout the rollercoaster
              ride of the startup life.  
            </p>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="https://placehold.co/480x320/ccc/FFFFFF/png"
            width={480}
            height={320}
            alt={"network-pic"}
            className="object-cover"
          />
        </div>
      </div>
      <h2 className="font-bold my-4">Finding the Brightest MVNO Stars</h2>
      <div className="flex flex-col gap-16 justify-between xl:flex-row">
        <article className="space-y-4 flex-1">
          <p>
            We are aiming to engage with the brightest MVNO stars of tomorrow.
            Qualifying to do so puts the highest of expectations on us as a
            partner to be able to not only fund your journey but to support you
            in as many aspects as there possibly are along the way.{" "}
          </p>
          <p>
            But how do we find a good fit? Just as on the dance floor in
            elementary school we urge you to evaluate and examine us as a
            potential partner.
          </p>
          <p>
            Don’t be shy, ask us the bold questions already now, that will make
            our partnership easier to evolve further down the road.   Speaking
            of partnership, we believe in the power of connections with the
            leading players in the industry. As a consequence, we have invested
            vast amounts of time and screening to identify and establish
            strategic partnerships with what we believe to be the best out there
            in every corner of the MVNO industry.
          </p>
          <p>
            We are proud of providing that to the companies where we invest.
            Therefore, and as a part of the evaluation process of us we
            encourage you to also reach out to some of the entrepreneurs and
            industry players that we have already partnered with to hear what
            they have to say about us.  If we turn the arrow over, pointing to
            your direction, we are looking for great people with a determination
            and passion to change and challenge the industry. Our desired state
            is where there is already a team in place to set the sails. It will
            be windy and quick change of weather so a previous entrepreneurial
            experience is not a must, but definitely a plus.
          </p>
        </article>
        <article className="space-y-4 flex-1">
          <p>
            However, if you are a solo entrepreneur with an idea that will break
            grounds and new to the game, we are of course all ears. It just
            might take a little more of mutual evaluation before we, potentially
            enters the dance floor.
          </p>
          <p>
            MVNO is at the core of what we do. With a strong conviction that the
            development of MNVO’s across aspects are healthy for the overall
            development of the Telecom industry we are here to fuel the
            development of the most interesting start-ups. We have decided to
            keep our investment scope tight as we want to be an active investor
            in the companies where we get the opportunity to invest. Why, we
            simply think that over time that will differentiate us as the best
            fit for MVNO entrepreneurs when deciding on investors to support
            your growth journey. However, and having said that we are open for
            opportunities that are adjacent to being an MVNO. What are the
            boundaries of that definition, maybe it is up to your creativity or
            imagination to decide. 
          </p>
          <p>
            Our focus in the life cycle is early. To maybe oversimplify reality,
            we see four distinct phases of an MVNO start-up. 1. Pre-MNO
            wholesale agreement, 2. Having accomplished a signed MNO wholesale
            agreement, 3. post-MNO wholesale agreement, ready to launch
            operations and a clear go to market plan at hand, 4. MVNO
            successfully launched, proof of concept at hand, scaling ahead.  
          </p>
        </article>
      </div>
      <Image
        src="https://placehold.co/920x320/ccc/FFFFFF/png"
        width={920}
        height={320}
        alt={"cover-sec-pic"}
        className="object-cover mx-auto"
      />
      <Link
        href="/process"
        className="block mx-auto text-center font-bold py-4 text-charcoal hover:text-blue-500"
      >
        Our Investment Process: From Contact to Exit
      </Link>
    </section>
  )
}
