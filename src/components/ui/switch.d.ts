import { ReactNode } from "react";

interface SwitchProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
  children?: ReactNode;
  [key: string]: any;
}

declare module "@/components/ui/switch" {
  export const Switch: React.ForwardRefExoticComponent<SwitchProps>;
}
