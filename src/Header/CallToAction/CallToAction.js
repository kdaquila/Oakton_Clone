import React from "react";
import "./CallToAction.scss";

export default function CallToAction() {

    return (
        <div className="callToAction">
            <button className="callToAction__button">Visit</button>
            <button className="callToAction__button">Apply</button>
            <button className="callToAction__button">Register</button>
        </div>
    )
}