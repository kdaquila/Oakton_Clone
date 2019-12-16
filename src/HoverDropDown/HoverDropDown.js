import React from "react";
import styles from "./HoverDropDown.scss";

export default function HoverDropDown(props) {
    return (
        <div className={styles.DropDown}>
            <div className={styles.DropDown__Heading}>{props.title}</div>
            <ul className={styles.DropDown__Menu}>
                {Object.keys(props.menuItems).map((key, index) => (
                    <a className={styles.DropDown__Link} href={props.menuItems[key]} key={index}><li  className={styles.DropDown__Item}>{key}</li></a>))}
            </ul>
        </div>
    )
}