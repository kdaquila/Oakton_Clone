import React from "react";
import {createUseStyles} from 'react-jss';

import v from "../variables.js";

const useStyles = createUseStyles({
    callToAction__button: {
        marginRight: v["margin--sm"],
        borderRadius: "2px",
        border: "none",
        borderTop: `solid 1px ${v["theme-color__blue8"]}`,
        padding: `${v["padding--sm"]} ${v["padding--md"]}`,
        backgroundColor: v["theme-color__blue6"],
        color: v["theme-color__white"],
        fontSize: v["font-size--md"],
        transitionDuration: "0.2s",

        "&:hover": {
            backgroundColor: v["theme-color__blue7"],
            textDecoration: "underline",
        },

        "&:active": {
            backgroundColor: v["theme-color__blue6"]
        }
    }
});

export default function CallToAction() {
    const classes = useStyles();
    return (
        <div>
            <button className={classes.callToAction__button}>Visit</button>
            <button className={classes.callToAction__button}>Apply</button>
            <button className={classes.callToAction__button}>Register</button>
        </div>
    )
}