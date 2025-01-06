import React from "react";
import { z } from "zod";

const formSchema = z.object({
  model: z.string().min(1, "Model is required!"),
  temperature: z
    .number()
    .min(0, "Temperature must be at least zero")
    .max(2, "Temperature should be at most two"),
  content: z
    .string()
    .min(50, "Content should at least have 50 characters")
    .max(500, "Content should at not exceed 500 characters"),
  type: z.enum(["personal", "brand"], {
    errorMap: () => ({ message: "Type is required!" }),
  }),
  tone: z.enum(
    [
      "professional",
      "casual",
      "sarcastic",
      "funny",
      "passionate",
      "thoughtful",
    ],
    {
      errorMap: () => ({ message: "Tone is required!" }),
    }
  ),
  emojis: z.boolean(
    [
      "professional",
      "casual",
      "sarcastic",
      "funny",
      "passionate",
      "thoughtful",
    ],
    {
      errorMap: () => ({ message: "Role is required!" }),
    }
  ),
});

function UserInput() {
  return <div className="flex flex-col items-start gap-8">UserInput</div>;
}

export default UserInput;
