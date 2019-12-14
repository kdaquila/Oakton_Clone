import React from "react";
import Header from "./Header/Header";
import Page from "./Page/Page";
import PageContent from "./Page/PageContent/PageContent";
import "./_reset.scss";

export default function App() {
    return (
        <Page>
            <PageContent>
                <Header />
            </PageContent>
        </Page>
    )
}