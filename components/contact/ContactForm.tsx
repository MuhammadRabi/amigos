"use client"
import React from "react"
import { Button } from "../ui/button"
import { Textarea } from "../ui/textarea"
import { Label } from "@radix-ui/react-label"
import { Input } from "../ui/input"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { InputsTypes, inputSchema } from "@/validations"

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(inputSchema),
    defaultValues: {
      company: "",
      name: "",
      email: "",
      message: "",
    },
    mode: "onChange",
  })

  const formSubmit: SubmitHandler<InputsTypes> = (data) =>
    //submitting logic here
    console.log(data)

  return (
    <form
      onSubmit={handleSubmit(formSubmit)}
      className="space-y-4 my-8 md:w-3/4 xl:w-full mx-auto"
    >
      <div className="w-full max-xl:max-w-md xl:w-1/2 max-xl:mx-auto">
        <Label htmlFor="company">Company</Label>
        <Input
          {...register("company")}
          type="company"
          id="company"
          placeholder="Company"
        />
        {errors.company?.message && (
          <p className="mt-1 text-red-500 font-semibold capitalize text-right">
            {errors.company?.message}
          </p>
        )}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="w-full max-xl:max-w-md max-xl:mx-auto">
          <Label htmlFor="name">Name</Label>
          <Input
            {...register("name")}
            type="name"
            id="name"
            placeholder="Name"
          />
          {errors.name?.message && (
            <p className="mt-1 text-red-500 font-semibold capitalize text-right">
              {errors.name?.message}
            </p>
          )}
        </div>
        <div className="w-full max-xl:max-w-md max-xl:mx-auto">
          <Label htmlFor="email">Email</Label>
          <Input
            {...register("email")}
            type="email"
            id="email"
            placeholder="Email"
          />
          {errors.email?.message && (
            <p className="mt-1 text-red-500 font-semibold capitalize text-right">
              {errors.email?.message}
            </p>
          )}
        </div>
      </div>
      <div className="w-full max-xl:max-w-md max-xl:mx-auto">
        <Label htmlFor="message">Message</Label>
        <Textarea
          {...register("message")}
          className="h-48 "
          id="message"
          placeholder="Message"
        />
        {errors.message?.message && (
          <p className="mt-1 text-red-500 font-semibold capitalize text-right">
            {errors.message?.message}
          </p>
        )}
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
