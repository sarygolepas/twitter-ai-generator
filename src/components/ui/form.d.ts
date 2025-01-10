import { ReactNode } from "react";

interface FormItemProps {
  className?: string;
  children?: ReactNode;
  [key: string]: any;
}

declare module "@/components/ui/form" {
  export const Form: any;
  export const FormItem: React.ForwardRefExoticComponent<FormItemProps>;
  export const FormLabel: any;
  export const FormControl: any;
  export const FormDescription: any;
  export const FormMessage: any;
  export const FormField: any;
}
