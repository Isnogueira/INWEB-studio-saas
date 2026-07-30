import type { InputProps } from "./Input.types";
import styles from "./Input.module.css";
import { useId } from "react";

export default function Input({
  label,
  error,
  helperText,
  fullWidth = false,
  className,
  id,
  leftIcon,
  rightIcon,
  ...rest
}: InputProps) {

  const classes = [
    styles.input,
    fullWidth && styles.fullWidth,
    error && styles.error,
    className
  ]
    .filter(Boolean)
    .join(" ");

    const generatedId = useId();

  const inputId = id ?? generatedId;

  return (
    <div className={styles.container}>
          {label && (
            <label
            htmlFor={inputId}
            className={styles.label}
            >
            {label}
            </label>
        )}

      
        <div className={styles.inputWrapper}>

            {leftIcon && (
                <span className={styles.icon}>
                    {leftIcon}
                </span>
            )}

            <input
                id={inputId}
                className={classes}
                {...rest}
            />

            {rightIcon && (
                <span className={styles.icon}>
                    {rightIcon}
                </span>
            )}

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