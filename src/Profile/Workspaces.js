import React from "react";
import "./Workspaces.css";
import Header from "../Workplace/Header";
import Profile from "./Profile";
import bug from "../assets/bug.svg";
import app from "../assets/app.svg";
import { Pane } from "evergreen-ui";

function Workspaces() {
    return (
        <div>
            <Header />
            <Profile />
            <div className="workspaces">
                <h2>My workspaces</h2>
                <div className="my_workspace">
                    <h4>My first workspace</h4>
                    <div className="card_div">
                        <Pane className="card1">
                            <img src={bug} alt="" height="34" width="34" />
                            <h4>Hexcode</h4>
                            <p className="span4">www.hexcode.co</p>
                            <p className="des">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                            </p>
                        </Pane>
                        <Pane className="card2">
                            <img src={app} alt="" height="34" width="34" />
                            <h4>Ramotion</h4>
                            <p className="span4">www.ramotion.com</p>
                            <p className="des">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                            </p>
                        </Pane>
                        <Pane className="card2">
                            <img src={bug} alt="" height="34" width="34" />
                            <h4>Hexcode</h4>
                            <p className="span4">www.hexcode.co</p>
                            <p className="des">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                            </p>
                        </Pane>
                    </div>
                    <br></br>
                    <div className="card_div card_secondrow">
                        <Pane className="card1">
                            <img src={bug} alt="" height="34" width="34" />
                            <h4>Hexcode</h4>
                            <p className="span4">www.hexcode.co</p>
                            <p className="des">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                            </p>
                        </Pane>
                        <Pane className="card2">
                            <img src={app} alt="" height="34" width="34" />
                            <h4>Ramotion</h4>
                            <p className="span4">www.ramotion.com</p>
                            <p className="des">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                            </p>
                        </Pane>
                        <Pane className="card2">
                            <img src={bug} alt="" height="34" width="34" />
                            <h4>Hexcode</h4>
                            <p className="span4">www.hexcode.co</p>
                            <p className="des">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                            </p>
                        </Pane>
                    </div>
                </div>
                <div className="second_workspace">
                    <h4>
                        My second workspace
                        <span>Shared</span>
                    </h4>
                    <div className="card_div">
                        <Pane className="card1">
                            <img src={bug} alt="" height="34" width="34" />
                            <h4>Hexcode</h4>
                            <p className="span4">www.hexcode.co</p>
                            <p className="des">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                            </p>
                        </Pane>
                        <Pane className="card2">
                            <img src={app} alt="" height="34" width="34" />
                            <h4>Ramotion</h4>
                            <p className="span4">www.ramotion.com</p>
                            <p className="des">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                            </p>
                        </Pane>
                        <Pane className="card2">
                            <img src={bug} alt="" height="34" width="34" />
                            <h4>Hexcode</h4>
                            <p className="span4">www.hexcode.co</p>
                            <p className="des">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                            </p>
                        </Pane>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Workspaces;
