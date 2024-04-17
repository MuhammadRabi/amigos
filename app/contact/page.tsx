import ContactForm from "@/components/contact/ContactForm"
import SectionHead from "@/components/SectionHead"
import Offices from "@/components/contact/Offices"
import Image from "next/image"
import FeaturedText from "@/components/FeaturedText"

export default function contactPage() {
  return (
    <section className="section-wrapper">
      <div className="flex flex-col gap-16 xl:flex-row">
        <div>
          <SectionHead headline={"reach out to us"} />
          <FeaturedText>
            At Amigos Venture Capital, we are passionate about innovation and
            driven by the vision of supporting visionary entrepreneurs like you.
          </FeaturedText>
          <p>
            Please use the form below to reach out to us. Whether you are
            seeking funding, strategic guidance, or simply want to explore
            potential opportunities, we are excited to hear from you. Rest
            assured, all inquiries are handled with the utmost confidentiality
            and professionalism.
          </p>
        </div>
        <Image
          src="https://placehold.co/500x320/3c3c3c/FFFFFF/png"
          width={500}
          height={320}
          alt={"hero-image"}
          className="mx-auto"
        />
      </div>
      <ContactForm />
      <hr className="py-4" />
      <Offices />
      <hr className="py-4" />
      <div>
        <SectionHead headline={"careers"} />
        <div className="content xl:w-3/4">
          <p className="max-xl:text-center">
            We are always on the lookout for talented individuals who can
            contribute to our company growth and success. We value innovation,
            creativity, and dedication. Please feel free to submit your resume
            and cover letter to{" "}
            <a
              href="mailto:info@amigosvc.com"
              className="underline text-blue-600 cursor-pointer"
            >
              info@amigosvc.com
            </a>
            , and we will keep your information on file for future opportunities
            that align with your expertise and interests.
          </p>
        </div>
      </div>
    </section>
  )
}
