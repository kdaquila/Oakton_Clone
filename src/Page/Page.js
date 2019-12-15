import React from "react";
import "./Page.scss"

export default function Page(props) {
    return (
        <div className="page">
            <div className="page__content">
                {props.children}
            </div>
        </div>
    )
}