import React from "react";
import CallToAction from "./CallToAction/CallToAction";
import NavQuick from "./NavQuick/NavQuick";
import Search from "./Search/Search";
import Grid from "../Grid/Grid";
import Row from "../Grid/Row/Row";
import "./Header.scss"

export default function Header() {
    return (
        <header className="Header">
            <Grid>
                <Row className="row1">
                    <CallToAction/>
                    <NavQuick/>
                    <Search/>
                </Row>
            </Grid>
        </header>
    )
}