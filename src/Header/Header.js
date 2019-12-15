import React from "react";
import CallToAction from "./CallToAction/CallToAction";
import NavQuick from "./NavQuick/NavQuick";
import Search from "./Search/Search";
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