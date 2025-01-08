"use client";

import React, { useContext } from "react";
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
import { Slider } from "@/components/ui/slider";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Info, Loader2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { generateBio } from "@/app/action";
import { BioContext } from "@/context/BioContext";

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

  const { setOutput, setLoading, loading } = useContext(BioContext);

  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    // console.log(values);
    setLoading(true);

    const userInputValues = ` User Input: ${values.content},
    Bio Tone: ${values.tone},
    Bio Type: ${values.type},
    Add Emojis: ${values.emojis},
    `;

    try {
      const { data } = await generateBio(
        userInputValues,
        values.temperature,
        values.model
      );
      // console.log(data);
      setOutput(data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-start gap-8 ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full items-start gap-6"
        >
          {/* SETTINGS */}
          <fieldset className="flex flex-col gap-6 rounded-[8px] border px-4 pt-4 pb-6 bg-background/10 background-blur-s bg-white mb-6">
            <legend className="ml-1 px-1 text-sm font-medium">Settings</legend>

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
                        <SelectItem value="mixtral-8x7b-32768">
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
            <FormField
              control={form.control}
              name="temperature"
              render={({ field: { value, onChange } }) => (
                <FormItem>
                  <FormLabel className="flex items-center justify-between pb-2">
                    <div className="flex items-center justify-center">
                      <span>Creativity</span>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="w-3 h-3 ml-1 cursor-pointer" />
                        </TooltipTrigger>
                        <TooltipContent
                          sideOffset={5}
                          collisionPadding={20}
                          className="max-w-sm"
                        >
                          <p>
                            A higher setting produces more creative and
                            surprising bios, while a lower setting sticks to
                            more predictable and conventional styles
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <span>{value}</span>
                  </FormLabel>
                  <FormControl>
                    <Slider
                      defaultValue={[1]}
                      min={0}
                      max={2}
                      step={0.1}
                      onValueChange={(val) => onChange(val[0])}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </fieldset>

          {/* USER INPUT */}
          <fieldset className="flex flex-col gap-6 rounded-[8px] border px-4 pt-4 pb-5 bg-background/10 background-blur-s bg-white mb-6">
            <legend className="ml-1 px-1 text-sm font-medium">
              User Input
            </legend>
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center justify-between pb-1">
                    About Yourself
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Add your old twitter bio or write few sentences about yourself"
                      className="min-h-[5rem]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-4">
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center justify-between pb-1">
                        Type
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="personal">Personal</SelectItem>
                          <SelectItem value="brand">Brand</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="tone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center justify-between pb-1">
                        Tone
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select tone" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="professional">
                            Professional
                          </SelectItem>
                          <SelectItem value="casual">Casual</SelectItem>
                          <SelectItem value="sarcastic">Sarcastic</SelectItem>
                          <SelectItem value="funny">Funny</SelectItem>
                          <SelectItem value="passionate">Passionate</SelectItem>
                          <SelectItem value="thoughful">Thoughtful</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <FormField
              control={form.control}
              name="emojis"
              render={({ field }) => (
                <FormItem>
                  <div className="flex gap-2 items-center">
                    <FormLabel className=" text-sm flex items-center justify-between pb-1">
                      Add Emojis
                    </FormLabel>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="!my-0"
                    />
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </fieldset>
          <Button type="submit" className="w-full rounded" disabled={loading}>
            {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            Generate
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default UserInput;

{
  /* <div className="mt-5 w-full">

</div> */
}
