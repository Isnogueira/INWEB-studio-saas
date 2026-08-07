import type { HTMLAttributes } from "react";

export default interface LogoProps extends HTMLAttributes<HTMLDivElement>{
    size?: "sm" | "md" | "lg";
    color?: string;
}