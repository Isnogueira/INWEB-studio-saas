import type { FieldProps } from "@/types/Field.types";
import type { InputHTMLAttributes } from "react";

export interface InputProps
    extends FieldProps,
    InputHTMLAttributes<HTMLInputElement> {}