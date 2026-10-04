import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email().toLowerCase(),
  password: z.string().min(8)
});

export const registerSchema = signInSchema.extend({
  name: z.string().min(2).max(120)
});
