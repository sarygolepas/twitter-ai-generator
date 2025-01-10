import { ReactNode } from "react";

interface SelectProps {
  className?: string;
  children?: ReactNode;
  [key: string]: any;
}

declare module "@/components/ui/select" {
  export const Select: React.ForwardRefExoticComponent<SelectProps>;
  export const SelectTrigger: React.ForwardRefExoticComponent<SelectProps>;
  export const SelectValue: React.ForwardRefExoticComponent<SelectProps>;
  export const SelectContent: React.ForwardRefExoticComponent<SelectProps>;
  export const SelectItem: React.ForwardRefExoticComponent<
    SelectProps & {
      value: string;
    }
  >;
}
