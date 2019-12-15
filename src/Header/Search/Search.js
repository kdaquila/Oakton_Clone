import React from "react";
import styles from "./Search.scss";

export default function Search() {
    return (
        <form className={styles.search__form} action="" method="get">
            <input className={styles.search__input} type="text" name="query" id="query" placeholder="Custom Search"/>
            <button className={styles.search__button} type="submit"><span className={styles.search__icon} /></button>
        </form>
    )
}