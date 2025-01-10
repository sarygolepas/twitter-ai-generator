import { ReactNode } from "react";

interface SliderProps {
  defaultValue?: number[];
  min?: number;
  max?: number;
  step?: number;
  onValueChange?: (value: number[]) => void;
  className?: string;
  children?: ReactNode;
  [key: string]: any;
}

declare module "@/components/ui/slider" {
  export const Slider: React.ForwardRefExoticComponent<SliderProps>;
}
