import React from "react";
import {jss, createUseStyles} from "react-jss";
import preset from "jss-preset-default";

import v from "../variables.js";
import fontawe from "@fortawesome/fontawesome-free/css/fontawesome.css";

jss.setup(preset());

const useStyles = createUseStyles({
    search__form: {
        display: "flex",
        alignItems: "center"
    },
    search__input: {
        boxSizing: "border-box",
        width: "300px",
        height: "40px",
        fontSize: "$font-size--md",
        fontFamily: "$font-style--sanserif",
        textIndent: "20px"
    },
    search__button: {
        boxSizing: "border-box",
        width: "40px",
        height: "40px",
        padding: v["padding--sm"],
        backgroundColor: v["theme-color__green"],
        color: v["theme-color__white"],
        fontFamily: "FontAwesome, serif",
        fontSize: v["font-size--md"],
        borderWidth: "1px"
    },
    search__icon: {
        composes: `${fontawe["fa"]}, ${fontawe["fa-search"]}`
    }
});

export default function Search() {
    const classes = useStyles();
    return (
        <form className={classes.search__form} action="" method="get">
            <input className={classes.search__input} type="text" name="query" id="query" placeholder="Custom Search"/>
            <button className={classes.search__button} type="submit"><span className={classes.search__icon} /></button>
        </form>
    )
}