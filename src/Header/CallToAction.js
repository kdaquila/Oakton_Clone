import React from "react";
import styles from "./CallToAction.scss";
import HoverDropDown from "../HoverDropDown/HoverDropDown";

export default function CallToAction() {
    return (
        <div className={styles.callToAction}>
            <HoverDropDown title="Visit" menuItems={{"Des Plaines": "#", "Skokie": "#", "Virtual": "#"}}/>
            <HoverDropDown title="Apply" menuItems={{"On-Campus": "#", "On-line": "#", "Hybrid": "#"}}/>
            <HoverDropDown title="Register" menuItems={{"In-Person": "#", "On-line": "#", "Hybrid": "#"}}/>
        </div>
    )
}