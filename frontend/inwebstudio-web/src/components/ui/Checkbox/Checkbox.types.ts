import type { BaseFieldProps } from "@/types/BaseField.types";
import type { InputHTMLAttributes } from "react";

export interface CheckboxProps
    extends BaseFieldProps,
    InputHTMLAttributes<HTMLInputElement> {}