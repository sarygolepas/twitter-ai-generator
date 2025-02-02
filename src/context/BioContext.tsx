"use client";

import { createContext, useState } from "react";

interface BioResponse {
  data: { bio: string }[];
}

interface BioContextTypes {
  output: BioResponse | null;
  loading: boolean;
  setOutput: React.Dispatch<React.SetStateAction<{ data: { bio: string }[] }>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BioContext = createContext<BioContextTypes>({
  output: { data: [] },
  loading: false,
  setOutput: () => {},
  setLoading: () => {},
});

export const BioProvider = ({ children }: { children: React.ReactNode }) => {
  const [output, setOutput] = useState<{ data: { bio: string }[] }>({
    data: [],
  });
  const [loading, setLoading] = useState(false);

  return (
    <BioContext.Provider value={{ output, setOutput, setLoading, loading }}>
      {children}
    </BioContext.Provider>
  );
};
