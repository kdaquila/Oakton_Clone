import React from "react";
import {createUseStyles} from 'react-jss';
import CallToAction from "./CallToAction";
import NavQuick from "./NavQuick";
import Search from "./Search";
import variables from "../variables.js";

const useStyles = createUseStyles({
    header__row1: {
        display: "flex",
        padding: `${variables["padding--md"]} 0`,
        backgroundColor: variables["theme-color__blue5"],
    }
})

export default function Header() {
    const classes = useStyles();
    return (
        <header>
            <div className={classes.header__row1}>
                <CallToAction/>
                <NavQuick/>
                <Search/>
            </div>
        </header>
    )
}