import React from "react";
import "./PageContent.scss";

export default function PageContent(props) {
    return (
        <div className="pageContent">{props.children}</div>
    )
}