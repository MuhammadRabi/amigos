import React from "react"
import SectionHead from "../SectionHead"
import EventCard from "./EventCard"
import { events } from "@/constants"

const EventCalender = () => {
  return (
    <section className="bg-zinc-200 section-wrapper space-y-4">
      <SectionHead headline="event calendar" />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
        suscipit optio tempora voluptatum commodi ullam nisi accusamus ipsa
        possimus cumque, ab eos dolores! Accusantium, esse.
      </p>
      <div className="content-wrapper pt-8 grid grid-cols-1 gap-16 xl:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event.title} {...event} />
        ))}
      </div>
    </section>
  )
}

export default EventCalender
