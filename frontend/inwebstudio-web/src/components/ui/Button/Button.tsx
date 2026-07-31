
import type { ButtonProps } from "../../../types/Button.types";
import styles from "./Button.module.css";

export default function Button({variant="primary", size="md", fullWidth=false, isLoading=false, disabled=false, children, ...rest}: ButtonProps){

  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
]
.filter(Boolean)
.join(" ");

        return<>
           <button  className={classes} disabled={isLoading || disabled} {...rest}>
            {isLoading ? "Carregando..." : children}
           </button>
  
        </>;
}