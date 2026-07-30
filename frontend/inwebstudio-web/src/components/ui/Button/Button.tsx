
import type { ButtonProps } from "./Button.types";
import styles from "./Button.module.css";

export default function Button({variant="primary", size="md", fullWidth=false, isLoading=false, disabled=false, children, ...rest}: ButtonProps){

   const className = `
    ${styles.button}
    ${styles[variant]}
    ${styles[size]}
    ${fullWidth ? styles.fullWidth : ""}
`;
        return<>
           <button  className={className} disabled={isLoading || disabled} {...rest}>
            {isLoading ? "Carregando..." : children}
           </button>
  
        </>;
}