import LogoSvg from "@/assets/images/logo.svg";

import styles from "./Logo.module.css";
import type LogoProps from "./Logo.types";

export default function Logo({
    size = "md",
    className,
    ...rest
}: LogoProps){

    const classes = [
        styles.logo,
        styles[size],
        className
    ]
    .filter(Boolean)
    .join(" ");

    return (

        <div
            className={classes}
            {...rest}
        >
            <img src={LogoSvg} alt="" />
        </div>

    );

}