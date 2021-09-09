import React from "react";
import done_all from "../../assets/done_all.svg";
import flag from "../../assets/flag.svg";
import avatar1 from "../../assets/avatar1.jpeg";

function Epic6() {
    return (
        <div className="epics">
            <p className="name_">Epic SM</p>
            <p className="des des_">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit,Lorem ipsum dolor sit
            </p>
            <div className="footer">
                <img src={done_all} alt="" height="10" width="17" />
                <p className="kb">KB-02</p>

                <div className="right">
                    <img src={flag} alt="" height="16" width="7" />

                    <img src={avatar1} alt="" height="19" width="20" className="profile" />
                </div>
            </div>
        </div>
    );
}

export default Epic6;
