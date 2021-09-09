import React from "react";
import done_all from "../../assets/done_all.svg";
import avatar2 from "../../assets/avatar2.jpeg";

function Epic7() {
    return (
        <div className="epics">
            <p className="name__">Epic MD</p>
            <p className="des des_">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit,Lorem ipsum dolor sit
            </p>
            <div className="footer">
                <img src={done_all} alt="" height="10" width="17" />
                <p className="kb">KB-02</p>

                <div className="right">
                    <img src={avatar2} alt="" height="19" width="20" className="profile" />
                </div>
            </div>
        </div>
    );
}

export default Epic7;
