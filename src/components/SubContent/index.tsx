import React from "react";
import './index.scss';

type SubContentProps = {
    header: string;
    content: string;
}

const SubContent = (props: SubContentProps) => {
    return(
        <div className="sub-content-container">
            <h1>{props.header}</h1>
            <p>{props.content}</p>
        </div>
    )
}

export default SubContent;