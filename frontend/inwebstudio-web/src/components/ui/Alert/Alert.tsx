import type { AlertProps } from "./Alert.types";

import styles from "./Alert.module.css";

export default function Alert({

    variant = "info",

    title,

    children,

    className,

    ...rest

}: AlertProps){

    const classes = [

        styles.alert,

        styles[variant],

        className

    ]
    .filter(Boolean)
    .join(" ");

    return(

        <div
            className={classes}
            {...rest}
        >

            {title && (

                <strong>

                    {title}

                </strong>

            )}

            <p>

                {children}

            </p>

        </div>

    );

}