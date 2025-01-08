"use client";

import { Badge } from "@/components/ui/badge";
import { BorderBeam } from "@/components/ui/border-beam";
import { useContext } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { BioContext } from "@/context/BioContext";
import CopyLabel from "./CopyLabel";

function Output() {
  const { output, loading } = useContext(BioContext);

  return (
    <div className="flex h-[87.5%] mt-2 flex-col rounded-xl bg-muted/50 backdrop-blur-sm overflow-hidden border border-primary/5">
      {loading && (
        <BorderBeam
          size={1200}
          borderWidth={1.5}
          duration={4}
          className="z-10"
        />
      )}
      <Badge variant="outline" className="absolute top-3 right-3 z-50">
        Output
      </Badge>
      {loading ? (
        <Skeleton className="w-full h-full" />
      ) : (
        <ul className="flex flex-col items-start justify-start space-y-12 py-12 md:px-4 xl:p-16">
          {output?.data.map((data, index) => {
            return (
              <li
                key={index}
                className="w-full border border-primary/20 rounded-md p-4 relative bg-background rounded-br-none md:text-sm lg:text-base"
              >
                {data.bio}
                <span className="absolute top-[99%] right-0">
                  <CopyLabel text={data.bio} />
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Output;
