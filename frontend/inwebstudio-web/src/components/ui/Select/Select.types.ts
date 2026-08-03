import type { FieldProps } from "@/types/Field.types";
import type { Option } from "@/types/Option.types";
import type { SelectHTMLAttributes } from "react";

export interface SelectProps 
extends FieldProps,
SelectHTMLAttributes<HTMLSelectElement> {

    options: Option[];
    placeholder?: string;

}