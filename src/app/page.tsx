import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import UserInput from "@/components/home/UserInput";
import Output from "@/components/home/Output";
import { ChevronRight, Star } from "lucide-react";
import Link from "next/link";
import { BioProvider } from "@/context/BioContext";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pb-24 pt-16 md:px-8 xl:px-24 px-6">
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
      <div className="text-center z-10">
        <h1 className="font-extrabold md:text-7xl text-5xl lg:w-[90%] mx-auto mb-8">
          Generate your twitter bio
        </h1>
        <p className="text-base md:text-lg text-gray-500 mx-auto mb-8">
          Answer a few questions, and we&apos;ll craft a unique bio that
          perfectly reflects your personality.
        </p>
      </div>
      <div className="z-10 flex flex-col md:flex-row gap-10 justify-between w-full">
        <BioProvider>
          <div className="flex-1">
            <UserInput />
          </div>
          <div className="flex-1">
            <Output />
          </div>
        </BioProvider>
      </div>
    </main>
  );
}
