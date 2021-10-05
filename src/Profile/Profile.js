import React from "react";
import "./Profile.css";
import trash from "../assets/trash.svg";
import star from "../assets/star.svg";
import workspace from "../assets/workspace.svg";
import ash_user from "../assets/ash_user.svg";
import collaborators from "../assets/collaborators.svg";
import { Link, useLocation } from "react-router-dom";

function Profile() {
    const location = useLocation();
    const [selectedtabs, setSelectedTabs] = React.useState(0);

    React.useEffect(() => {
        // alert(location.pathname)
        if (location.pathname === "/account") {
            setSelectedTabs(0);
        }

        if (location.pathname === "/workspaces") {
            setSelectedTabs(1);
        }

        if (location.pathname === "/collaborators") {
            setSelectedTabs(2);
        }

        if (location.pathname === "/referrals") {
            setSelectedTabs(3);
        }

        if (location.pathname === "/profile_trash") {
            setSelectedTabs(4);
        }
    });
    return (
        <div>
            <div className="profile_sidebar">
                <p className="title">SETTINGS</p>
                <Link to="/account" className={selectedtabs === 0 ? "profile_links_selected" : "profile_links"}>
                    <img src={ash_user} alt="" height="13" width="13" />
                    <p className="content">Account overview</p>
                </Link>
                <Link to="/workspaces" className={selectedtabs === 1 ? "profile_links_selected" : "profile_links"}>
                    <img src={workspace} alt="" height="13" width="13" />
                    <p className="content">Workspaces</p>
                </Link>
                <Link to="/collaborators" className={selectedtabs === 2 ? "profile_links_selected" : "profile_links"}>
                    <img src={collaborators} alt="" height="14" width="13" />
                    <p className="content">Collaborators</p>
                </Link>
                <Link to="/referrals" className={selectedtabs === 3 ? "profile_links_selected" : "profile_links"}>
                    <img src={star} alt="" height="14" width="13" />
                    <p className="content">Referrals and Credit</p>
                </Link>
                <Link to="/profile_trash" className={selectedtabs === 4 ? "profile_links_selected" : "profile_links"}>
                    <img src={trash} alt="" height="11" width="13" />
                    <p className="content">Trash</p>
                </Link>
            </div>
        </div>
    );
}

export default Profile;
