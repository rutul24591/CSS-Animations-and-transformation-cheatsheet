import React from "react";
// import Content from "../Content";
import Header from "../Header";
import Transforms from "../Transforms";

import './index.scss';

const Layout = () => {
    const headerText = "CSS ANIMATIONS and TRANSITIONS";
    return(
        <div className="layout-container">
            <Header text={headerText} />
            <Transforms/>
            {/* <Content header="Animations"/>
            <Content header="Transitions"/>
            <Content header="Target"/>
            <Content header="Filters"/> */}
        </div>    
    );
}

export default Layout;