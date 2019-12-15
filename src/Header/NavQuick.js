import React from "react";
import {createUseStyles} from "react-jss";

import v from "../variables.js";

const useStyles = createUseStyles({
    navQuick: {
        marginLeft: "auto",
        display: "flex",
        alignItems: "center",
    },

    navQuick__link: {
        marginRight: v["margin--md"],
        padding: `${v["padding--md"]} 0`,
        fontFamily: v["font-style--sanserif"],
        color: v["theme-color__white"],
        textDecoration: "none",

        "&:hover": {
            textDecoration: "underline"
        }
    }
})

export default function NavQuick() {
    const classes = useStyles();
    return (
        <div className={classes.navQuick}>
            <a className={classes.navQuick__link} href="#">myOakton</a>
            <a className={classes.navQuick__link} href="#">Directory</a>
            <a className={classes.navQuick__link} href="#">Employment</a>
            <a className={classes.navQuick__link} href="#">Contact Us</a>
        </div>
    )
}