import type { ButtonProps } from "./Button.types";

export default function Button({variant, ...rest}: ButtonProps){
    return<>
           <button className={variant} 
           {...rest}
            />
        </>;
}