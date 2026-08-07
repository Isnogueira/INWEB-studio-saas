
import Spinner from "../Spinner";
import styles from "./Button.module.css";
import type { ButtonProps } from "./Button.types";

export default function Button({
  variant="primary", 
  size="md", 
  fullWidth=false, 
  isLoading=false, 
  disabled=false,
  leftIcon,
  rightIcon, 
  children, 
  ...rest}: ButtonProps){

  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
]
.filter(Boolean)
.join(" ");

return(
  <button
      className={classes}
      disabled={isLoading || disabled}
      {...rest}
  >
      {isLoading ? (
          <Spinner size="sm" />
      ) : (
          <span className={styles.content}>
              {leftIcon && (
                  <span className={styles.icon}>
                      {leftIcon}
                  </span>
              )}

              <span>{children}</span>

              {rightIcon && (
                  <span className={styles.icon}>
                      {rightIcon}
                  </span>
              )}
          </span>
      )}
  </button>
)
      
}