import React from "react";
import "./Row.scss"

export default function Row(props) {
    return (
        <div className={props.className}>{props.children}</div>
    )
}