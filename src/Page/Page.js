import React from "react";
import "./Page.scss"

export default function Page(props) {
    return (
        <div class="page">{props.children}</div>
    )
}