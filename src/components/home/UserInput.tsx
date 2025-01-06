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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MetaIcon from "../icons/Meta";
import MistralIcon from "../icons/Mistral";

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
    <div className="flex flex-col items-start gap-8 bg-white">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full items-start gap-6"
        >
          <fieldset className="gap-6 rounded-[8px] border p-4 bg-background/10 background-blur-s">
            <legend>Settings</legend>

            <FormField
              control={form.control}
              name="model"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Model</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a model" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="llama-3.1-8b-instant">
                          <div className="flex items-start gap-3 text-muted-foreground">
                            <MetaIcon className="size-5" />
                            <div>
                              <p>
                                <span className="text-foreground font-medium mr-2">
                                  Llama 3
                                </span>
                                8b
                              </p>
                            </div>
                          </div>
                        </SelectItem>
                        <SelectItem value="mixtral-8x7b-32768	">
                          <div className="flex items-start gap-3 text-muted-foreground">
                            <MistralIcon className="size-5" />
                            <div>
                              <p>
                                <span className="text-foreground font-medium mr-2">
                                  Mistral
                                </span>
                                7b
                              </p>
                            </div>
                          </div>
                        </SelectItem>
                        <SelectItem value="llama-3.3-70b-versatile">
                          <div className="flex items-start gap-3 text-muted-foreground">
                            <MetaIcon className="size-5" />
                            <div>
                              <p>
                                <span className="text-foreground font-medium mr-2">
                                  Llama 3
                                </span>
                                70b
                              </p>
                            </div>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mt-5 w-full">
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </div>
          </fieldset>
        </form>
      </Form>
    </div>
  );
}

export default UserInput;
