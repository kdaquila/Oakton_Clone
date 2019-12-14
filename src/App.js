import React from "react";
import Header from "./Header/Header";
import Page from "./Page/Page";
import "./_reset.scss";
import "./App.scss"

export default function App() {
    return (
        <Page>
            <div className="page__content">
                <Header />
            </div>
        </Page>
    )
}