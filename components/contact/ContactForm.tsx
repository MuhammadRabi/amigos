"use client"
import React from "react"
import { Button } from "../ui/button"
import { Textarea } from "../ui/textarea"
import { Label } from "@radix-ui/react-label"
import { Input } from "../ui/input"

const ContactForm = () => {
  return (
    <form className="space-y-4 my-8 md:w-3/4 xl:w-full mx-auto">
      <div className="w-full max-xl:max-w-md xl:w-1/2 max-xl:mx-auto">
        <Label htmlFor="company">Company</Label>
        <Input type="company" id="company" placeholder="Company" />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="w-full max-xl:max-w-md max-xl:mx-auto">
          <Label htmlFor="name">Name</Label>
          <Input type="name" id="name" placeholder="Name" />
        </div>
        <div className="w-full max-xl:max-w-md max-xl:mx-auto">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
      </div>
      <div className="w-full max-xl:max-w-md max-xl:mx-auto">
        <Label htmlFor="message">Message</Label>
        <Textarea
          className="h-48 outline-dotted invalid:outline-dotted outline-2 outline-red-500"
          id="message"
          placeholder="Message"
        />
      </div>
      <Button
        type="submit"
        className="block w-full max-xl:max-w-md bg-future-orange max-xl:mx-auto xl:w-fit xl:ml-auto"
      >
        SEND
      </Button>
    </form>
  )
}

export default ContactForm
