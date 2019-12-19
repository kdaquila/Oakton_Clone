import React from "react";
import styles from "./CardSlider.scss"

export default function CardSlider(props) {
    return (
        <div className={`${styles.cardSlider} ${props.className}`}>
            {props.children}
        </div>
    )
}