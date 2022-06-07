import React from "react";
import './index.scss';

import Content from "../Content";

const data = [
    {
        "id": 1,
        "name": "transform: rotate(deg)",
        "description": [
            "Rotate an element and any children a certain number of degrees.",
            "Can use negative numbers to go backwards."
        ],
        "code": `
        <pre class="line-numbers">
            <code class="language-sass">
                .view-button { 
                    transform: rotate(-33deg); 
                }
            </code>
        </pre>`
    }
]

const Transforms = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 transforms-container">
                    <div className="transforms-header-container">
                        <h1 className="transforms-header">TRANSFORMS</h1>
                    </div>
                    <div className="transforms-content-container">
                        { data && data.map((content, index) => {
                            return(
                                <div className="content-container" key={index}>
                                    <Content
                                        header={content.name}
                                        id={content.id}
                                        code={content.code}
                                        description={content.description}
                                    />
                                </div>                  
                            )
                        }) }
                    </div>         
                </div>
            </div>
        </div>     
    );
}

export default Transforms;