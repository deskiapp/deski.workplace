import React from "react";
import trash from "../assets/trash.svg";
import ash_user from "../assets/ash_user.svg";
import { Link } from "react-router-dom";

function User() {
    return (
        <div>
            <div className="profile_sidebar">
                <p className="title">SETTINGS</p>
                <Link to="/account" className="link">
                    <div className="rows">
                        <img src={ash_user} alt="" height="13" width="13" />
                        <p className="content">Account overview</p>
                    </div>
                </Link>
                <div className="rows_">
                    <img src={trash} alt="" height="10" width="10" />
                    <p className="content">Activity</p>
                </div>
            </div>
        </div>
    );
}

export default User;
