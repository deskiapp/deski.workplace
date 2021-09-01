import React, { useRef } from "react";
import "./Account.css";
import Header from "../Workplace/Header";
import Profile from "./Profile";
import user from "../assets/user.svg";
import building from "../assets/building.svg";
import department from "../assets/department.svg";
import location from "../assets/location.svg";
import toolbox from "../assets/toolbox.svg";
import pen from "../assets/pen.svg";
import bug from "../assets/bug.svg";
import delet from "../assets/delet.svg";
import app from "../assets/app.svg";
import add_blue from "../assets/add_blue.svg";
import { Pane, Dialog } from "evergreen-ui";

function Account() {
    const inputFile = useRef(null);
    const onButtonClick = () => {
        inputFile.current.click();
    };
    const [isShown, setIsShown] = React.useState(false);

    return (
        <div>
            <Header />
            <Profile />
            <div className="account">
                <h2>Account overview</h2>
                <img onClick={onButtonClick} src={user} alt="" className="user_img" />
                <input type="file" id="file" ref={inputFile} style={{ display: "none" }} />
                <div className="account_con">
                    <span className="span1">
                        My Account
                        <img className="edit" src={pen} alt="" />
                    </span>
                    <p>hey@deski.app</p>
                    <span className="span2">
                        Add password
                        <img className="add" src={add_blue} alt="" />
                    </span>
                    <div className="account_con2">
                        <p>
                            <img src={toolbox} alt="" className="toolbox" />
                            Project Manager
                        </p>
                        <p>
                            <img src={department} alt="" className="toolbox" />
                            Your department
                        </p>
                        <p>
                            <img src={building} alt="" className="toolbox" />
                            Your organization
                        </p>
                        <p>
                            <img src={location} alt="" className="toolbox" />
                            Your location
                        </p>
                        <div className="account_con3">
                            <span className="span3">Places you work</span>
                        </div>
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
                        </div>
                        <div className="dlt_acnt" onClick={() => setIsShown(true)}>
                            <img src={delet} alt="" height="12" width="12" />
                            <p>Delete your deski account</p>
                        </div>
                        <Dialog
                            topOffset={235}
                            width={400}
                            minHeightContent={160}
                            onCloseComplete={() => setIsShown(false)}
                            preventBodyScrolling
                            hasHeader={false}
                            isShown={isShown}
                            hasFooter={false}
                        >
                            <div className="dlt_workspace">
                                <h4>Are you sure you want to remove this user ?</h4>
                                <p>The user will be removed in your workplace/space</p>

                                <div>
                                    <button className="cancel_btn cncl" onClick={() => setIsShown(false)}>
                                        Cancel
                                    </button>
                                    <button className="dlt_btn" onClick={() => setIsShown(false)}>
                                        Delete workspace
                                    </button>
                                </div>
                            </div>
                        </Dialog>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;
