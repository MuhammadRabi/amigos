import { Locate, Map, MapPin, MapPinned } from "lucide"
import { Calendar, LocateIcon, LocateOff, MapIcon } from "lucide-react"
import React from "react"

type EventProps = {
  title: string
  desc: string
  time: string
  location: string
}

const EventCard = ({ title, desc, time, location }: EventProps) => {
  return (
    <article className="mx-auto min-w-[300px] max-w-xs space-y-4 bg-white p-6 border-t-8 border-t-black">
      <h3 className="font-bold">{title}</h3>
      <p className="mb-4">{desc}</p>
      <div className="flex gap-2 items-center font-semibold text-sm">
        <Calendar />
        {time}
      </div>
      <div className="flex gap-2 items-center font-semibold text-sm">
        <MapIcon />
        {location}
      </div>
      <button className="bg-sky-blue w-full p-2 rounded-lg uppercase text-white font-semibold text-center hover:opacity-75 duration-300">
        read more
      </button>
    </article>
  )
}

export default EventCard
