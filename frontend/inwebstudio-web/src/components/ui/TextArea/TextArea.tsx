import { useId } from "react";
import type { TextareaProps } from "./TextArea.types";
import styles from "@/styles/shared/field.module.css";

export default function TextArea({
        label,
        error,
        helperText,
        fullWidth = false,
        className,
        id,
        ...rest
    }: TextareaProps){

    const classes = [
        styles.input,
        fullWidth && styles.fullWidth,
        error && styles.error,
        className
    ]
        .filter(Boolean)
        .join(" ");

    const generatedId = useId();

    const textAreaId = id ?? generatedId;
    
    return (
    <div className={styles.container}>
          {label && (
            <label
            htmlFor={textAreaId}
            className={styles.label}
            >
            {label}
            </label>
        )}

      
        <div className={styles.inputWrapper}>
            <textarea
                id={textAreaId}
                className={classes}
                {...rest}
            />
        </div>
        
            {error ? (
                <span className={styles.errorMessage}>
                {error}
                </span>
            ) : (
                helperText && (
                <span className={styles.helperText}>
                    {helperText}
                </span>
                )
            )}
        </div>
        )
}