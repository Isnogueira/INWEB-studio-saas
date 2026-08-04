import type { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  isLoading?: boolean;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  disabled: boolean;
  leftIcon: boolean;
  rightIcon: boolean;
}