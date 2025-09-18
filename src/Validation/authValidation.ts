import { z } from "zod";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const signupSchema = z
  .object({
    fullname: z
      .string()
      .min(2, "Full name must be at least 2 characters long")
      .max(100, "Full name must be at most 100 characters long"),
    nickname: z
      .string()
      .min(2, "Nickname must be at least 2 characters long")
      .max(50, "Nickname must be at most 50 characters long")
      .optional(),
    email: z.string().regex(emailRegex, "Invalid email address"),
    password: z.string().min(8, "password must be at least 8 characters long"),
    confirmPassword: z
      .string()
      .min(8, "password must be at least 8 characters long"),
    upi: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

  export type SignupSchema = z.infer<typeof signupSchema>;