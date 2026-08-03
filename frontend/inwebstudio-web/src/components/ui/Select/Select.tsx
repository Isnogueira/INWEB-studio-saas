import { useId } from "react";
import styles from "@/styles/shared/field.module.css";
import type { SelectProps } from "./Select.types";

export default function Select({
    label,

    error,

    helperText,

    options,

    placeholder,

    className,

    id,

    fullWidth = false,

    ...rest
}: SelectProps) {

    const classes = [
        styles.input,
        fullWidth && styles.fullWidth,
        error && styles.error,
        className
      ]
        .filter(Boolean)
        .join(" ");
    
        const generatedId = useId();
    
      const selectId = id ?? generatedId;
    

    return (
       <div className={styles.container}>
          {label && (
            <label
            htmlFor={selectId}
            className={styles.label}
            >
            {label}
            </label>
        )}

      
        <div className={styles.inputWrapper}>

            {/* {leftIcon && (
                <div className={styles.icon}>
                    {leftIcon}
                </div>
            )} */}

            <select
                id={selectId}
                className={classes}
                {...rest}
                >
                    {placeholder && (

                        <option
                            value=""
                            disabled
                        >

                            {placeholder}

                        </option>

                    )}
                    {options.map((option) => (
                        <option
                            key={option.value}
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    ))}
                </select>
            {/* {rightIcon && (
                <div className={styles.icon}>ss
                    {rightIcon}
                </div>
            )} */}

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
    );
}