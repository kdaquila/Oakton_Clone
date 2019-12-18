import React from "react";
import styles from "./ImageSlider.scss"

export default function ImageSlider(props) {
    return (
        <div className={styles.imageSlider}>
            {props.children}
        </div>
    )
}