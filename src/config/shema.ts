import { z } from "zod";

const formSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(50, "Name cannot be longer than 50 characters"),
  lastname: z
    .string()
    .min(1, "Last name is required")
    .max(50, "Last name cannot be longer than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must have at least 6 characters"),
});
