import React from "react";
import styles from "./NavQuick.scss";

export default function NavQuick() {
    return (
        <div className={styles.navQuick}>
            <a className={styles.navQuick__link} href="#">myOakton</a>
            <a className={styles.navQuick__link} href="#">Directory</a>
            <a className={styles.navQuick__link} href="#">Employment</a>
            <a className={styles.navQuick__link} href="#">Contact Us</a>
        </div>
    )
}