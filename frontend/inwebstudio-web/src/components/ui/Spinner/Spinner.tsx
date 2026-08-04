import styles from "./Spinner.module.css";
import type { SpinnerProps } from "./Spinner.types";

export default function Spinner({

    size = "md",

    className,

    ...rest

}: SpinnerProps) {

    const classes = [

        styles.spinner,

        styles[size],

        className

    ]
        .filter(Boolean)
        .join(" ");

    return (

        <span

            className={classes}

            {...rest}

        />

    );

}