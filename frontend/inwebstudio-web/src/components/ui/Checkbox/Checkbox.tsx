import type { CheckboxProps } from "./Checkbox.types";
import styles from "./Checkbox.module.css";
import { Check } from "lucide-react";


export default function Checkbox({
    label,
    helperText,
    error,
    ...rest
}: CheckboxProps

){
    return(
        <div className={styles.container}>

            <label className={styles.label}>

                <input
                    type="checkbox"
                    className={styles.input}
                    {...rest}
                />

                <span className={styles.check}>
                    <Check/>        
                </span>

                {label && (
                    <span className={styles.text}>
                        {label}
                    </span>
                )}

            </label>

            {error ? (
                <span className={styles.error}>
                    {error}
                </span>
            ) : (
                helperText && (
                    <span className={styles.helper}>
                        {helperText}
                    </span>
                )
            )}

        </div>

    );

}