import type { FieldProps } from "@/types/Field.types";
import type { TextareaHTMLAttributes } from "react";

export interface TextareaProps
    extends FieldProps,
        TextareaHTMLAttributes<HTMLTextAreaElement> {}