import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import UserInput from "@/components/ui/home/UserInput";
import Output from "@/components/ui/home/Output";
import { ChevronRight, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 bg-white mb-10 mx-auto">
        <div className="group rounded-full border border-black/10 transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 group">
          <Link href="https://github.com" target="_blank" className="mb-4">
            <AnimatedShinyText className="px-6 py-2 inline-flex items-center justify-center transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 rounded-full">
              <Star className="2-6 h-6 fill-yellow-300 text-yellow-400" />
              <div className="mx-2 h-4 w-[1px] bg-gray-300" />
              Star on Github
              <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </Link>
        </div>
      </div>
      <div className="text-center z-10 mb-8">
        <h1 className="font-extrabold text-7xl lg:w-[90%] mx-auto mb-8">
          Generate your twitter bio
        </h1>
        <p className="text-lg text-gray-500 mx-auto mb-8">
          Just answer a few questions, and we&apos;ll generate a bio that
          captures who you are.
        </p>
      </div>
      <div className="z-10 flex gap-10 justify-between w-full">
        <div className="flex-1">
          <UserInput />
        </div>
        <div className="flex-1">
          <Output />
        </div>
      </div>
    </main>
  );
}
