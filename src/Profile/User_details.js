import React from "react";
import "./User_details.css";
import User from "./User";
import user from "../assets/user.svg";
import Header from "../Workplace/Header";
import building from "../assets/building.svg";
import department from "../assets/department.svg";
import location from "../assets/location.svg";
import toolbox from "../assets/toolbox.svg";
import key from "../assets/key.svg";
import bug from "../assets/bug.svg";
import app from "../assets/app.svg";
import trash from "../assets/trash.svg";
import { Pane, Dialog } from "evergreen-ui";

function User_details() {
    const [isShown, setIsShown] = React.useState(false);

    return (
        <div>
            <Header />
            <User />
            <div className="user_details">
                <h2>Collaborator details</h2>
                <img src={user} alt="" className="userdetail_img" />
                <div className="user_div">
                    <div className="profile_user">
                        <div className="accountholder">My Account</div>
                        <div className="work_field">
                            <img src={toolbox} alt="" className="toolbox" />
                            Project Manager
                        </div>
                        <div className="work_field">
                            <img src={department} alt="" className="toolbox" />
                            Your department
                        </div>
                        <div className="work_field">hey@deski.app</div>
                        <div></div>
                        <div></div>
                        <div className="work_field">
                            <img src={key} alt="" className="key" />
                            Admin
                        </div>
                        <div className="work_field">
                            <img src={building} alt="" className="toolbox" />
                            Your organization
                        </div>
                        <div className="work_field">
                            <img src={location} alt="" className="toolbox" />
                            Your location
                        </div>
                    </div>
                    <div className="places_in">Places in work</div>
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
                    <div className="remove_user" onClick={() => setIsShown(true)}>
                        <img src={trash} alt="" height="10" width="10" />
                        <p>Remove user in your workspace</p>
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
    );
}

export default User_details;
