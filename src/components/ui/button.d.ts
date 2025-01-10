import { ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  variant?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  asChild?: boolean;
}

declare const Button: React.FC<ButtonProps>;
declare const buttonVariants: any;

export { Button, buttonVariants };
