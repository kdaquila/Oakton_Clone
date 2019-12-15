import React from "react";
import Header from "./Header/Header";
import Page from "./Page/Page";
import "./_reset.scss";
import styles from "./App.scss";

export default function App() {
    return (
        <Page>
            <Header />
        </Page>
    )
}