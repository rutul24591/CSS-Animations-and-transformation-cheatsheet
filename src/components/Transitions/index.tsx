import React from "react";

import Button from "../Button";
import "./index.scss";

const Transitions = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 transitions-container">
          <div className="transitions-header-container">
            <h1 className="transitions-header">Transitions</h1>
            <h4 className="transition-sub-header">
              <i>[User interaction is required.]</i>
            </h4>
          </div>
          <div className="transitions-content-container">
            <div className="content-container">
              <div className="container">
                <div className="row content-row">
                  <div className="transition-multiple-row">
                    <div className="col-12 content-header-description">
                      <h1 className="content-header">Multiple transitions</h1>
                      <ul>
                        <li>Written on a single line, separated by a space.</li>
                      </ul>
                    </div>
                    <div className="col-12 content-code-button-container">
                      <div className="row code-button-row">
                        <div className="col-6 code-snippet">
                          <div className="code">
                            {`.view-button {`}
                            <br />
                            &emsp;&emsp;&emsp;
                            {`transition: background-color 1s linear, color .5s linear;`}
                            <br />
                            {`}`}
                          </div>
                        </div>
                        <div className="col-6 button-container">
                          <Button
                            label="View Button"
                            class="transition-multiple-view-button"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="transition-simple-row">
                    <div className="col-12 content-header-description">
                      <h1 className="content-header">Simple transitions</h1>
                      <ul>
                        <li>Transition all numerical properties that changed.</li>
                        <li>Lasting 1s</li>
                        <li>Delay 2s</li>
                        <li>With linear easing (no easing).</li>
                      </ul>
                    </div>
                    <div className="col-12 content-code-button-container">
                      <div className="row code-button-row">
                        <div className="col-6 code-snippet">
                          <div className="code">
                            {`.view-button {`}
                            <br />
                            &emsp;&emsp;&emsp;
                            {`transition: all 1s 2s linear;`}
                            <br />
                            {`}`}
                          </div>
                        </div>
                        <div className="col-6 button-container">
                          <Button
                            label="View Button"
                            class="transition-simple-view-button"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="sub-content">
                      <h3 className="content-sub-header">Easings</h3>
                      <ul>
                        <li>linear, ease, ease-in, ease-out, ease-in-out</li>
                        <li>steps() — instead of a smooth transition, specific number of frames..</li>
                      </ul>
                    </div>

                    <div className="col-12 content-code-button-container">
                      <div className="row code-button-row">
                        <div className="col-6 code-snippet">
                          <div className="code">
                            {`.view-button {`}
                            <br />
                            &emsp;&emsp;&emsp;
                            {`transition: background-position 1s steps(4);`}
                            <br />
                            {`}`}
                          </div>
                        </div>
                        <div className="col-6 button-container">
                          <Button
                            label="View Button"
                            class="transition-simple-easing-view-button"
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

export default Transitions;
