import React from "react";
import styles from "./HoverDropDown.scss";

export default function HoverDropDown(props) {
    return (
        <div className={`${styles['baseComponent']} ${props.customComponent}`}>

            <div className={`${styles['baseHeading']} ${props.customHeading}`}>{props.title}</div>

            <ul className={`${styles['baseMenu']} ${props.customMenu}`}>
                {Object.keys(props.menuItems).map((key, index) => {
                    const url = props.menuItems[key];
                    return (
                        <a className={`${styles['baseLink']} ${props.customLink}`} href={url} key={index}>
                            <li className={`${styles['baseItem']} ${props.customItem}`}>{key}</li>
                        </a>
                    )
                })
                }

            </ul>
        </div>
    )
}