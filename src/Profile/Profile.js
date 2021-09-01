import React from "react";
import "./Profile.css";
import trash from "../assets/trash.svg";
import star from "../assets/star.svg";
import workspace from "../assets/workspace.svg";
import ash_user from "../assets/ash_user.svg";
import collaborators from "../assets/collaborators.svg";
import { Link } from "react-router-dom";

function Profile() {
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
                <Link to="/workspaces" className="link">
                    <div className="rows">
                        <img src={workspace} alt="" height="13" width="13" />
                        <p className="content">Workspaces</p>
                    </div>
                </Link>
                <Link to="/collaborators" className="link">
                    <div className="rows">
                        <img src={collaborators} alt="" height="13" width="13" />
                        <p className="content">Collaborators</p>
                    </div>
                </Link>
                <Link to="/referrals" className="link">
                    <div className="rows">
                        <img src={star} alt="" height="13" width="13" />
                        <p className="content">Referrals and Credit</p>
                    </div>
                </Link>
                <Link to="/profile_trash" className="link">
                    <div className="rows_">
                        <img src={trash} alt="" height="10" width="10" />
                        <p className="content">Trash</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Profile;
