import React from "react";
import styles from "./CallToAction.scss";

export default function CallToAction() {

    return (
        <div className={styles.callToAction}>
            <button className={styles.callToAction__button}>Visit</button>
            <button className={styles.callToAction__button}>Apply</button>
            <button className={styles.callToAction__button}>Register</button>
        </div>
    )
}