import React from "react";

import Button from "../Button";
import "./index.scss";

const Animations = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 animations-container">
          <div className="animations-header-container">
            <h1 className="animations-header">Animations</h1>
            <h4 className="animation-sub-header">
              <i>[User interaction is required.]</i>
            </h4>
          </div>
          <div className="animations-content-container">
            <div className="content-container">
              <div className="container">
                <div className="row content-row">
                  <div className="animation-multiple-row">
                    <div className="col-12 content-header-description">
                      <h1 className="content-header">Multiple animations</h1>
                      <ul>
                        <li>Written on a single line, separated by a space.</li>
                      </ul>
                    </div>
                    <div className="col-12 animations-content-code-button-container">
                      <div className="row animations-code-button-row">
                        <div className="col-6 animations-code-snippet">
                          <div className="code">
                            {`.view-button {`}
                            <br />
                            &emsp;&emsp;&emsp;
                            {`animation: background-color 1s linear, color .5s linear;`}
                            <br />
                            {`}`}
                          </div>
                        </div>
                        <div className="col-6 animations-button-container">
                          <Button
                            label="View Button"
                            class="animation-multiple-view-button"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="animation-simple-row">
                    <div className="col-12 content-header-description">
                      <h1 className="content-header">Simple animations</h1>
                      <ul>
                        <li>Animation all numerical properties that changed.</li>
                        <li>Lasting 1s</li>
                        <li>Delay 2s</li>
                        <li>With linear easing (no easing).</li>
                      </ul>
                    </div>
                    <div className="col-12 animations-content-code-button-container">
                      <div className="row animations-code-button-row">
                        <div className="col-6 animations-code-snippet">
                          <div className="code">
                            {`.view-button {`}
                            <br />
                            &emsp;&emsp;&emsp;
                            {`animation: all 1s 2s linear;`}
                            <br />
                            {`}`}
                          </div>
                        </div>
                        <div className="col-6 animations-button-container">
                          <Button
                            label="View Button"
                            class="animation-simple-view-button"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="sub-content">
                      <h3 className="content-sub-header">Easings</h3>
                      <ul>
                        <li>linear, ease, ease-in, ease-out, ease-in-out</li>
                        <li>steps() — instead of a smooth animation, specific number of frames..</li>
                      </ul>
                    </div>

                    <div className="col-12 animations-content-code-button-container">
                      <div className="row animations-code-button-row">
                        <div className="col-6 animations-code-snippet">
                          <div className="code">
                            {`.view-button {`}
                            <br />
                            &emsp;&emsp;&emsp;
                            {`animation: background-position 1s steps(4);`}
                            <br />
                            {`}`}
                          </div>
                        </div>
                        <div className="col-6 animations-button-container">
                          <Button
                            label="View Button"
                            class="animation-simple-easing-view-button"
                          />
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

export default Animations;
