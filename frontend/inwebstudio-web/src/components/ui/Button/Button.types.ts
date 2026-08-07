import type { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" ;
  isLoading?: boolean;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  disabled: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}