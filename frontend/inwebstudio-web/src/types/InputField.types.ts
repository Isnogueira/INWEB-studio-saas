import type { BaseFieldProps } from "./BaseField.types";

export interface InputFieldProps
    extends BaseFieldProps {

    leftIcon?: React.ReactNode;

    rightIcon?: React.ReactNode;

    fullWidth?: boolean;

}