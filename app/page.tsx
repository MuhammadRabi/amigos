import Amigos from "@/components/amigos/Amigos"
import EventCalender from "@/components/events/EventCalender"
import FeaturesWrapper from "@/components/features/FeaturesWrapper"
import Hero from "@/components/Hero"
import Intro from "@/components/Intro"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Intro />
      <FeaturesWrapper />
      <Amigos />
      <EventCalender />
    </main>
  )
}
