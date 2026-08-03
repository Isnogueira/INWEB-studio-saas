import styles from "./Card.module.css";

import type { CardProps } from "./Card.types";

export default function Card({

    children,

    className,

    ...rest

}:CardProps){

    const classes=[

        styles.card,

        className

    ].filter(Boolean).join(" ");

    return(

        <div

            className={classes}

            {...rest}

        >

            {children}

        </div>

    );

}