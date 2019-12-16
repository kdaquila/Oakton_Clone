import React from "react";
import styles from "./Page.scss";

export default function Page(props) {
    return (
        <div className={styles.page}>
            <div className={styles.page__content}>
                {props.children}
            </div>
        </div>
    )
}