import React from "react";
import s from "./Header.scss";
import logo from "../images/oakton_logo_header.jpg";

export default function Header() {
    return (
        <header>
            <div className={s['header__row1']}>
                <div className={s['callToAction']}>
                    <button className={s['callToActionWidget']}>Visit</button>
                    <button className={s['callToActionWidget']}>Apply</button>
                    <button className={s['callToActionWidget']}>Register</button>
                </div>
                <div className={s['quickNav']}>
                    <a className={s['quickNav__link']} href="#">myOakton</a>
                    <a className={s['quickNav__link']} href="#">Directory</a>
                    <a className={s['quickNav__link']} href="#">Employment</a>
                    <a className={s['quickNav__link']} href="#">Contact Us</a>
                </div>
                <form className={s['search']} action="" method="get">
                    <input className={s['search__input']} type="text" name="query" id="query" placeholder="Custom Search"/>
                    <button className={s['search__button']} type="submit">
                        <span className={s['search__icon']}/>
                    </button>
                </form>
            </div>
            <div className={s['header__row2']}>
                <a className={s['logo__link']} href="#">
                    <img className={s['logo__img']} src={logo} alt="oakton logo"/>
                </a>
                <ul className={s['roleNav']}>
                    <li className={s['roleNav__item']}><a href="#">New Students</a></li>
                    <li className={s['roleNav__item']}><a href="#">Current Students</a></li>
                    <li className={s['roleNav__item']}><a href="#">Faculty & Staff</a></li>
                </ul>
                <ul className={s['roleNav']}>
                    <li className={s['roleNav__item']}><a href="#">The Community</a></li>
                    <li className={s['roleNav__item']}><a href="#">Business & Industry</a></li>
                    <li className={s['roleNav__item']}><a href="#">Oakton Alumni</a></li>
                </ul>
            </div>
            <ul className={s['navBar']}>
                <li className={s['navBar__item']}><a href="#">About</a></li>
                <li className={s['navBar__item']}><a href="#">Academics</a></li>
                <li className={s['navBar__item']}><a href="#">Continuing Education</a></li>
                <li className={s['navBar__item']}><a href="#">Admission</a></li>
                <li className={s['navBar__item']}><a href="#">Student Life</a></li>
                <li className={s['navBar__item']}><a href="#">Student Services</a></li>
                <li className={s['navBar__item']}><a href="#">Library</a></li>
                <li className={s['navBar__item']}><a href="#">News & Events</a></li>
                <li className={s['navBar__item']}><a href="#">Giving</a></li>
            </ul>
        </header>
    )
}