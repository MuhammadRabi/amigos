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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-calendar-days"
        >
          <path d="M8 2v4" />
          <path d="M16 2v4" />
          <rect width="18" height="18" x="3" y="4" rx="2" />
          <path d="M3 10h18" />
          <path d="M8 14h.01" />
          <path d="M12 14h.01" />
          <path d="M16 14h.01" />
          <path d="M8 18h.01" />
          <path d="M12 18h.01" />
          <path d="M16 18h.01" />
        </svg>
        {time}
      </div>
      <div className="flex gap-2 items-center font-semibold text-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-map-pin"
        >
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>{" "}
        {location}
      </div>
      <button className="bg-sky-blue w-full p-2 rounded-lg uppercase text-white font-semibold text-center hover:opacity-75 duration-300">
        read more
      </button>
    </article>
  )
}

export default EventCard
