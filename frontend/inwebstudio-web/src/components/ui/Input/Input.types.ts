import type { InputFieldProps } from "@/types/InputField.types";
import type { InputHTMLAttributes } from "react";

export interface InputProps
    extends InputFieldProps,
    InputHTMLAttributes<HTMLInputElement> {}