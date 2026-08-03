import type { HTMLAttributes, ReactNode } from "react";

export interface AlertProps
    extends HTMLAttributes<HTMLDivElement> {

    variant?: "success" | "error" | "warning" | "info";

    title?: string;

    //Mensagem de alerta, pode ser um texto ou um componente React
    children: ReactNode;

    closable?: boolean;

    onClose?: () => void;
}