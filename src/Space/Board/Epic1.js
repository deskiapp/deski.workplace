import React from "react";
import "./Epic1.css";
import done_all from "../../assets/done_all.svg";
import flag from "../../assets/flag.svg";
import avatar from "../../assets/avatar.jpg";

function Epic1() {
    return (
        <div className="epics">
            <p className="name">Epic Rd </p>
            <p className="des">
                It looks like you've got some new content to review! Log in to Agorapulse to check it out. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Maecenas imperdiet velit,Lorem ipsum dolor sit
            </p>
            <div className="footer">
                <img src={done_all} alt="" height="9" width="17" />
                <p className="kb">KB-01</p>
                {/* <p className="epic_label">Label</p> */}
                <div className="right">
                    <img src={flag} alt="" height="23" width="12" />
                    <img src={avatar} alt="" height="23" width="20" className="profile" />
                </div>
            </div>
        </div>
    );
}

export default Epic1;
