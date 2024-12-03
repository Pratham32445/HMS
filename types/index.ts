import { z } from "zod";

export const authSchema = z.object({
  email: z.string().email("Please provide the valid email"),
  password: z.string().min(6, "please provide the valid password"),
});

export const roomSchema = z.object({
  roomNumber: z.string().min(2, "Please provide the valid room Number"),
  maxOccupancy : z.number(),
  basePrice : z.number()
});
