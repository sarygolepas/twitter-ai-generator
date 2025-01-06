"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import type { SubmitHandler } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

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
  emojis: z.boolean(),
});

type FormValues = z.infer<typeof formSchema>;

function UserInput() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      model: "llama3-8b-8192",
      temperature: 1,
      content: "",
      type: "personal",
      tone: "professional",
      emojis: false,
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (values) => {
    console.log(values);
  };

  return (
    <div className="flex flex-col items-start gap-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}

export default UserInput;
