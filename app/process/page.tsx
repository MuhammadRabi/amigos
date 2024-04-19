import ProcessBox from "@/components/ProcessBox"
import SectionHead from "@/components/SectionHead"

export default function processPage() {
  return (
    <section className="section-wrapper bg-white">
      <main className="w-full md:w-5/6 xl:w-3/4">
        <SectionHead
          headline={"Our Investment Process: From Contact to Exit"}
        />
        <article className="space-y-4 mb-16">
          <p>
            Well, a little too early to discuss stages and steps on a life
            changing path we might end up experiencing together you might think.
            Yeah, maybe, but we tend to think that outlining what you can expect
            from us over the years to come will be beneficial for you as an
            entrepreneur when deciding among the range of investor options. Also
            from our perspective, this plays a healthy role. If we can, we would
            like to be clear with what we expect of a potential relationship
            from the start-ups we decide to invest in, out of the large number
            of invitations we receive from exciting companies.
          </p>
          <p>
            Therefore, for us it is important to have a transparent, well
            described process of how we manage our evaluation, selection and the
            structure of the investment and attached life cycle support that we
            give those entrepreneurs we do decide to back. Alongside a set of
            principles of way of working as an active investor we have of course
            reserved room for important flexibility and creativity. We do
            believe that building strong companies requires a portion of
            structure, predictability and processes. As a consequence, we have
            established a few steps that we prefer to follow to gain traction. 
          </p>
        </article>
        <ProcessBox title={"gaining trust takes time"} number={"1"}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
            nesciunt dolores praesentium ex itaque aut rerum harum expedita
            dicta? Numquam alias accusantium iure excepturi officia,
            consequuntur quis voluptatibus totam, quaerat libero molestiae
            quidem nisi dolores!
          </p>
        </ProcessBox>
        <ProcessBox title={"A business plan is ticket to play"} number={"2"}>
          <p>
            There is no such thing as a plan that will function as a single
            measure for our decision. However, if you don’t have a business plan
            that clearly present your idea, your addressable market and how you
            are going to win in that market, we can’t really see that you are
            investment ready. This requirement is based on experience and is
            simply there to ensure that your time and our time is spent in a
            good way.
          </p>
        </ProcessBox>
        <ProcessBox title={"Assessment and more details"} number={"3"}>
          <p>
            We receive a lot of very interesting business ideas. Many of them
            will turn out to be well functioning enterprises. Nevertheless, we
            are only investing in a small percentage of all the ideas that we
            come across.
          </p>
          <p className="py-2">
            Simply because it is not that easy to come up with a great idea,
            backed by passionate people, a large addressable market waiting to
            be served, the right timing and a superior product. We promise
            though, that we will review all business plans. But only with the
            ones where we see a great potential we will ask for more details and
            work together with you and your team to further understand the
            important details behind your ideas and assumptions. This step will
            require numerous sessions to fully understand your value
            proposition, how you are going to win in your addressable market,
            getting to know your team as well as your strategic suppliers and
            partners. You will at this stage also get to know relevant team
            members at Amigos Venture Capital that have experience and knowledge
            specific to support your needs.
          </p>
          <p className="py-2">
            This might also include access to the Amigos network that will
            provide you with key capabilities and capacities to accelerate to
            your next phase.
          </p>
        </ProcessBox>
        <ProcessBox title={"the term sheet"} number={"4"}>
          <p>
            Given that both of us still conclude that we have a great fit and
            good chances of succeeding together after assessing each other
            thoroughly we will enter into the phase of outlining the terms for
            the co-operation. A term sheet might sound very technical but is
            easy described as a document that outlines the proposed conditions
            for the investment.
          </p>
          <p className="py-2">
            It is to be viewed as a non-binding offer that will include detailed
            terms for our investment such as the amount we can provide, the
            pre-requisites for releases of capital, the share we request in
            return, the duration etc. To have reached this stage is very good
            evidence that your idea has great potential. At this stage you will
            have all the details needed to understand at what terms we are
            willing to invest and how we can support you in scaling your idea.
          </p>
        </ProcessBox>
        <ProcessBox
          title={"Due Diligence: Double-Checking Critical Assumptions"}
          number={"5"}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
            nesciunt dolores praesentium ex itaque aut rerum harum expedita
            dicta? Numquam alias accusantium iure excepturi officia,
            consequuntur quis voluptatibus totam, quaerat libero molestiae
            quidem nisi dolores!
          </p>
        </ProcessBox>
        <ProcessBox title={"formal decision to invest"} number={"6"}>
          <p>
            Given that the Due diligence went well we should be good to go from
            Amigos Venture Capital. The decision to invest in line with the
            terms agreed in the term sheet will be formally minuted in the
            Amigos Venture Capital Investment committee. Another thing that is
            worth mentioning is that when we make a decision to invest, we
            normally also consider the perspective of continuous investments in
            your company, ourselves or through associated investors.
          </p>
        </ProcessBox>
      </main>
    </section>
  )
}
