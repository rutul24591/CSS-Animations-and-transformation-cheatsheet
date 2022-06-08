import React from "react";

import Header from "../Header";
import Transforms from "../Transforms";
import Transitions from "../Transitions";
import Animations from "../Animations";

import './index.scss';

const Layout = () => {
    const headerText = "CSS ANIMATIONS and TRANSITIONS";
    return(
        <div className="layout-container">
            <Header text={headerText} />
            <Animations />
            <Transforms/>
            <Transitions />
        </div>    
    );
}

export default Layout;