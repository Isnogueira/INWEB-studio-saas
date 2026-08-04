import type { HTMLAttributes } from "react";

export interface SpinnerProps
    extends HTMLAttributes<HTMLSpanElement> {

    size?: "sm" | "md" | "lg";

}