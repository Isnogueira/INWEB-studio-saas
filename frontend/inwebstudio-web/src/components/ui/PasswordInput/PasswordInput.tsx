import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import Input from "../Input/Input";
import type { InputProps } from "../Input/Input.types";
export type PasswordInputProps = InputProps

export default function PasswordInput({
    ...rest
}: PasswordInputProps) {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <Input
            {...rest}
            type={showPassword ? "text" : "password"}
            rightIcon={
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
            }
        />
    );
}