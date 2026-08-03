
import styles from "./Button.module.css";
import type { ButtonProps } from "./Button.types";

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