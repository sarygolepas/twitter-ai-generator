import { ReactNode } from "react";

interface TooltipProps {
  className?: string;
  children?: ReactNode;
  [key: string]: any;
}

interface TooltipContentProps extends TooltipProps {
  sideOffset?: number;
  collisionPadding?: number;
  className?: string;
}

declare module "@/components/ui/tooltip" {
  export const TooltipProvider: React.FC<{ children: ReactNode }>;
  export const Tooltip: React.ForwardRefExoticComponent<TooltipProps>;
  export const TooltipTrigger: React.ForwardRefExoticComponent<TooltipProps>;
  export const TooltipContent: React.ForwardRefExoticComponent<TooltipContentProps>;
}
