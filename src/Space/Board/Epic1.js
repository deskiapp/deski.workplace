import React from "react";
import "./Epic1.css";
import { MoreIcon } from "evergreen-ui";
import done_all from "../../assets/done_all.svg";
import flag from "../../assets/flag.svg";
import avatar from "../../assets/avatar.jpg";

function Epic1() {
    return (
        <div className="epics">
            <MoreIcon className="more_epic" />
            <p className="name">Epic Rd </p>
            <p className="des">
                It looks like you've got some new content to review! Log in to Agorapulse to check it out.Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Maecenas imperdiet velit,Lorem ipsum dolor sit
            </p>
            <div className="footer">
                <img src={done_all} alt="" height="10" width="17" />
                <p className="kb">KB-01</p>
                <p className="epic_label">Label</p>
                <div className="right">
                    <img src={flag} alt="" height="16" width="7" />
                    <img src={avatar} alt="" height="19" width="19" className="profile" />
                </div>
            </div>
        </div>
    );
}

export default Epic1;
