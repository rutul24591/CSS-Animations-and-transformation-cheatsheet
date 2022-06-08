import React from "react";

import Button from "../Button";
import "./index.scss";

const Transforms = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 transforms-container">
          <div className="transforms-header-container">
            <h1 className="transforms-header">TRANSFORMS</h1>
          </div>
          <div className="transforms-content-container">
            <div className="content-container">
              <div className="container">
                <div className="row content-row">
                    <div className="transform-rotate-row">  
                        <div className="col-12 content-header-description">
                            <h1 className="content-header">transform: rotate(deg)</h1>
                            <ul>
                                <li>Rotate an element and any children a certain number of degrees.</li>;
                                <li>Can use negative numbers to go backwards.</li>;
                            </ul>
                        </div>
                        <div className="col-12 content-code-button-container">
                            <div className="row code-button-row">
                                <div className="col-6 code-snippet">
                                    <div className="code">
                                        {`.view-button {`}<br/>
                                        &emsp;&emsp;&emsp;{`transform: rotate(-33deg); `}<br/>
                                        {`}`}             
                                    </div>
                                </div>
                                <div className="col-6 button-container">
                                    <Button label="View Button" class="transform-rotate-view-button-negative-three-three-degrees" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="transform-translate-row">
                        <div className="col-12 content-header-description">
                            <h1 className="content-header">transform: translate(x, y)</h1>
                            <ul>
                                <li>Similar to position relative; will move an element around on the screen without affecting other elements.</li>
                                <li>The position is based on where the element is currently located.</li>
                            </ul>
                        </div>
                        <div className="col-12 content-code-button-container">
                            <div className="row code-button-row">
                                <div className="col-6 code-snippet">
                                            <div className="code">
                                                {`.view-button {`}<br/>
                                                &emsp;&emsp;&emsp;{`/* Move rightwards 2em and no vertical movement */`}<br/>
                                                &emsp;&emsp;&emsp;{`transform: translate(2em, 0); `}<br/>
                                                {`}`}             
                                            </div>
                                </div>
                                <div className="col-6 button-container">
                                    <Button label="View Button" class="transform-translate-view-button" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 content-header-description">
                            <ul>
                               <li>Has companion functions to move only in one direction:</li>
                            </ul>
                            <p><i>transform: translateX();</i></p>
                            <p><i>transform: translateY();</i></p>
                        </div>
                    </div>
                    <div className="transform-scale-row">
                        <div className="col-12 content-header-description">
                            <h1 className="content-header">transform: scale(x, y)</h1>
                            <ul>
                                <li>Grow or shrink an element and all its children.</li>
                                <li>1 is what the element currently is; .6 is smaller; 2.3 is bigger.</li>
                            </ul>
                        </div>
                        <div className="col-12 content-code-button-container">
                            <div className="row code-button-row">
                                <div className="col-6 code-snippet">
                                            <div className="code">
                                                {`.view-button {`}<br/>
                                                &emsp;&emsp;&emsp;{`transform: scale(1.4); `}<br/>
                                                {`}`}             
                                            </div>
                                </div>
                                <div className="col-6 button-container">
                                    <Button label="View Button" class="transform-scale-view-button" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 content-header-description">
                            <ul>
                               <li>Has companion functions to scale only in one direction:</li>
                            </ul>
                            <p><i>transform: translateX();</i></p>
                            <p><i>transform: translateY();</i></p>
                            <h4>/* OR combined together */</h4>
                            <p><i>transform: scale(1.4, 3);</i></p>
                        </div>
                    </div>
                    <div className="transform-skew-row">
                        <div className="col-12 content-header-description">
                            <h1 className="content-header">transform: skew(deg, deg)</h1>
                            <ul>
                                <li>Grow or shrink an element and all its children.</li>;
                                <li>1 is what the element currently is; .6 is smaller; 2.3 is bigger.</li>;
                            </ul>
                        </div>
                        <div className="col-12 content-code-button-container">
                            <div className="row code-button-row">
                                <div className="col-6 code-snippet">
                                            <div className="code">
                                                {`.view-button {`}<br/>
                                                &emsp;&emsp;&emsp;{`/* Leaving the second value off will only skew horizontally */ `}<br/>
                                                &emsp;&emsp;&emsp;{`transform: skew(12deg); `}<br/>
                                                {`}`}             
                                            </div>
                                </div>
                                <div className="col-6 button-container">
                                    <Button label="View Button" class="transform-skew-view-button" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 content-header-description">
                            <ul>
                               <li>Has companion functions to skew only in one direction:</li>
                            </ul>
                            <p><i>transform: skewX();</i></p>
                            <p><i>transform: skewY();</i></p>
                        </div>
                    </div>
                    <div className="transform-origin-row">
                        <div className="col-12 content-header-description">
                            <h1 className="content-header">transform-origin</h1>
                            <ul>
                                <li>Control the anchor point for where the transform occurs.</li>
                                <li>Similar to background-position: horizontal then vertical.</li>
                                <li>The default is in the complete centre of the element, aka center center</li>
                            </ul>
                        </div>
                        <div className="col-12 content-code-button-container">
                            <div className="row code-button-row">
                                <div className="col-6 code-snippet-large">
                                            <div className="code">
                                                &emsp;&emsp;&emsp;{`transform-origin: center center; `}<br/> 
                                                &emsp;&emsp;&emsp;{`/* Top left corner */`}<br/>
                                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{`transform-origin: left top;`}<br/> 
                                                &emsp;&emsp;&emsp;{`/* Centre of the top edge */`}<br/>
                                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{`transform-origin: center top;`}<br/> 
                                                &emsp;&emsp;&emsp;{`/* 10px in from the left, 10px down from the top */`}<br/>
                                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{`transform-origin: 10px 10px;`}<br/> 
                                                &emsp;&emsp;&emsp;{`/* Centre horizontally, 10px up from bottom */`}<br/>    
                                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{`transform-origin: center calc(100% - 5px);`}<br/>         
                                            </div>
                                </div>
                                {/* <div className="col-6 button-container">
                                    <Button label="View Button" class="transform-origin-view-button" />
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="transform-multiple-row">
                        <div className="col-12 content-header-description">
                            <h1 className="content-header">Multiple transformations</h1>
                            <ul>
                                <li>Written on a single line, separated by a space.</li>
                                <li>Multiple lines won’t work.</li>
                                <li>Only the second entry will be activated.</li>
                            </ul>
                        </div>
                        <div className="col-12 content-code-button-container">
                            <div className="row code-button-row">
                                <div className="col-6 code-snippet-medium">
                                            <div className="code">
                                                {`.view-button {`}<br/>
                                                &emsp;{`/* Right */`}<br/>
                                                &emsp;&emsp;&emsp;{`transform: rotate(33deg) scale(1.2);`}<br/>
                                                &emsp;&emsp;&emsp;{``}<br/>
                                                &emsp;{`/* Wrong */`}<br/>
                                                &emsp;&emsp;&emsp;{`transform: rotate(33deg);`}<br/>
                                                &emsp;&emsp;&emsp;{`transform: scale(1.2);`}<br/>
                                                {`}`}             
                                            </div>
                                </div>
                                <div className="col-6 button-container">
                                    <Button label="View Button" class="transform-multiple-view-button" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transforms;
