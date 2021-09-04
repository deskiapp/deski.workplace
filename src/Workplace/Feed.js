import React from "react";
import "./Feed.css";
import Workplace from "../Workplace/Workplace";
import Header from "../Workplace/Header";
import { Pane, DragHandleVerticalIcon } from "evergreen-ui";
import avatar from "../assets/avatar.jpg";
import avatar1 from "../assets/avatar1.jpeg";
import avatar2 from "../assets/avatar2.jpeg";
import clock from "../assets/clock.png";
import bug from "../assets/bug.svg";

function Feed() {
    return (
        <div>
            <Header />
            <Workplace />
            <div className="feed">
                <h2>My works</h2>
                <div>
                    <Pane className="space">
                        <DragHandleVerticalIcon className="moreicon" />

                        <img src={bug} alt="" height="35" width="35" />
                        <h4>Bug Tracking</h4>
                        <p className="deski">www.deskiapp.com</p>
                        <p className="des">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                        </p>
                    </Pane>
                </div>
            </div>
        </div>
    );
}

export default Feed;
