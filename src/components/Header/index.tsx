import React from "react";
import './index.scss';

type HeaderProps = {
    text: string;
}

const Header = (props: HeaderProps) => {
    return(
        <div className="header-container">
            <h1 className="header-text">{props.text}</h1>
        </div>     
    );
}

export default Header;