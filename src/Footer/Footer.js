import React from "react";
import SocialMediaBar from "../SocialMediaBar/SocialMediaBar";
import s from "./Footer.scss";
import logo from "../images/oakton_logo_footer.png";

export default function Footer() {
    return (
        <div className={s['page']}>
            <div className={s['page__content']}>
                <footer className={s['footer']}>
                    <div className={s['footer__row1']}>
                        <img className={s['footer__logo']} src={logo} alt="oakton logo"/>
                        <div className={s['footer__address']}>
                            <h1 className={s['footer__addressHeading']}>Des Plaines Campus</h1>
                            <p className={s['footer__addressText']}>1600 E. Golf Road</p>
                            <p className={s['footer__addressText']}>Des Plaines, IL 60016</p>
                            <p className={s['footer__addressText']}>847.635.1600</p>
                        </div>
                        <div className={s['footer__address']}>
                            <h1 className={s['footer__addressHeading']}>Skokie Campus</h1>
                            <p className={s['footer__addressText']}>7701 N. Lincoln Avenue</p>
                            <p className={s['footer__addressText']}>Skokie, IL 60077</p>
                            <p className={s['footer__addressText']}>847.635.1600</p>
                        </div>
                        <div className={s['footer__nav']}>
                            <p className={s['footer__navItem']}><a href="#">Maps & Directions</a></p>
                            <p className={s['footer__navItem']}><a href="#">Emergency Preparedness</a></p>
                            <p className={s['footer__navItem']}><a href="#">Legal Notices</a></p>
                        </div>
                    </div>
                    <div className={s['footer__row2']}>
                        <SocialMediaBar/>
                    </div>
                </footer>
            </div>
        </div>
    )
}