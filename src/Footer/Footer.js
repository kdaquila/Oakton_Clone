import React from "react";
import SocialMediaBar from "../SocialMediaBar/SocialMediaBar";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__row1">
                <img className="footer__logo" src="../images/oakton_logo_footer.png" alt="oakton logo"/>
                <div className="footer__address">
                    <h1 className="footer__address-heading">Des Plaines Campus</h1>
                    <p className="footer__address-text">1600 E. Golf Road</p>
                    <p className="footer__address-text">Des Plaines, IL 60016</p>
                    <p className="footer__address-text">847.635.1600</p>
                </div>
                <div className="footer__address">
                    <h1 className="footer__address-heading">Skokie Campus</h1>
                    <p className="footer__address-text">7701 N. Lincoln Avenue</p>
                    <p className="footer__address-text">Skokie, IL 60077</p>
                    <p className="footer__address-text">847.635.1600</p>
                </div>
                <div className="footer__nav">
                    <p className="footer__nav-item"><a className="footer__nav-link" href="#">Maps & Directions</a></p>
                    <p className="footer__nav-item"><a className="footer__nav-link" href="#">Emergency Preparedness</a></p>
                    <p className="footer__nav-item"><a className="footer__nav-link" href="#">Legal Notices</a></p>
                </div>
            </div>
            <div className="footer__row2">
                <SocialMediaBar/>
            </div>
        </div>
    )
}