import React from "react";
import CallToAction from "./CallToAction";
import NavQuick from "./NavQuick";
import Search from "./Search";
import styles from "./Header.scss";

export default function Header() {
    return (
        <header>
            <div className={styles.header__row1}>
                <CallToAction/>
                <NavQuick/>
                <Search/>
            </div>
        </header>
    )
}