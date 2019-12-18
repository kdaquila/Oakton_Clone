import React from "react";
import CallToAction from "./CallToAction";
import NavQuick from "./NavQuick";
import Search from "./Search";
import styles from "./Header.scss";
import logo from "../images/oakton_logo_header.jpg";

export default function Header() {
    return (
        <header>
            <div className={styles.header__row1}>
                <CallToAction/>
                <NavQuick/>
                <Search/>
            </div>
            <div className={styles.header__row2}>
                <img className={styles.logo} src={logo} alt="oakton logo"/>
                <ul className={styles.rolesList}>
                    <li className={styles.rolesList__item}><a href="#">New Students</a></li>
                    <li className={styles.rolesList__item}><a href="#">Current Students</a></li>
                    <li className={styles.rolesList__item}><a href="#">Faculty & Staff</a></li>
                </ul>
                <ul className={styles.rolesList}>
                    <li className={styles.rolesList__item}><a href="#">The Community</a></li>
                    <li className={styles.rolesList__item}><a href="#">Business & Industry</a></li>
                    <li className={styles.rolesList__item}><a href="#">Oakton Alumni</a></li>
                </ul>
            </div>
            <ul className={styles.navBar}>
                <li className={styles.navBar__item}><a href="#">About</a></li>
                <li className={styles.navBar__item}><a href="#">Academics</a></li>
                <li className={styles.navBar__item}><a href="#">Continuing Education</a></li>
                <li className={styles.navBar__item}><a href="#">Admission</a></li>
                <li className={styles.navBar__item}><a href="#">Student Life</a></li>
                <li className={styles.navBar__item}><a href="#">Student Services</a></li>
                <li className={styles.navBar__item}><a href="#">Library</a></li>
                <li className={styles.navBar__item}><a href="#">News & Events</a></li>
                <li className={styles.navBar__item}><a href="#">Giving</a></li>
            </ul>
        </header>
    )
}