import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Landing from "./Landing";
import Billboard from "./Billboard";
import MoreHomes from "./MoreHomes";

function App() {
    return (
        <>
        <div>
            <Header />
        </div>
        <Billboard />
        <MoreHomes />
        <Landing />
        <Footer />
        </>
    );
}

export default App;