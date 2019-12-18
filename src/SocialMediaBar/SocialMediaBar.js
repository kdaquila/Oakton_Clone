import React from "react";
import styles from "./SocialMediaBar.scss";
import fbLogo from "../images/f_Logo_Online_04_2019/Color/PNG/f_logo_RGB-Blue_72.png";
import twLogo from "../images/Twitter_Social_Icons/Twitter_SocialIcon_RoundedSquare/Twitter_Social_Icon_Rounded_Square_Color.svg";
import igLogo from "../images/Instagram_Glyph/glyph-logo_May2016.png";
import liLogo from "../images/LinkedIn-Logos/LI-In-Bug.png";

export default function SocialMediaBar() {
    return (
        <div className="social-media">
            <a className={styles.socialMedia__link} href="#"><img className={styles.socialMedia__logo} src={fbLogo} alt="facebook logo"/></a>
            <a className={styles.socialMedia__link} href="#"><img className={styles.socialMedia__logo} src={twLogo} alt="twitter logo"/></a>
            <a className={styles.socialMedia__link} href="#"><img className={styles.socialMedia__logo} src={igLogo} alt="instagram logo"/></a>
            <a className={styles.socialMedia__link} href="#"><img className={styles.socialMedia__logo} src={liLogo} alt="linkedin logo"/></a>
        </div>
    )
}