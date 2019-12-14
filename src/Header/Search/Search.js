import React from "react";
import "./Search.scss";
import "@fortawesome/fontawesome-free/css/fontawesome.css";

export default function Search() {
    return (
        <form className="search__form" action="" method="get">
            <input className="search__input" type="text" name="query" id="query" placeholder="Custom Search"/>
            <button className="search__button" type="submit"><span className="fas fa-search" /></button>
        </form>
    )
}