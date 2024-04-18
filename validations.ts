import { z } from "zod"

export const inputSchema = z.object({
  company: z.string().min(3, { message: "company is required!" }),
  name: z.string().min(3, { message: "must be at least 3 characters!" }),
  email: z
    .string()
    .min(1, { message: "Must add an email" })
    .email({ message: "Invalid email address" }),
  message: z.string().min(15, { message: "you should leave a message" }),
})

export type InputsTypes = z.infer<typeof inputSchema>
