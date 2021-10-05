import React from "react";
import ash_user from "../assets/ash_user.svg";
import activity from "../assets/activity.svg";
import arrow_back from "../assets/arrow_back.svg";
import { Link, useLocation, useHistory } from "react-router-dom";

function User() {
    let history = useHistory();

    const location = useLocation();
    const [selectedtab1, setSelectedTab1] = React.useState(0);

    React.useEffect(() => {
        // alert(location.pathname)
        if (location.pathname === "/user_details") {
            setSelectedTab1(0);
        }
    });
    return (
        <div>
            <div className="profile_sidebar">
                <p className="title">SETTINGS</p>
                <Link to="/user_details" className={selectedtab1 === 0 ? "profile_links_selected" : "profile_links"}>
                    <img src={ash_user} alt="" height="13" width="13" />
                    <p className="content">Account overview</p>
                </Link>
                <Link to="#" className="profile_links">
                    <img src={activity} alt="" height="13" width="13" />
                    <p className="content">Activity</p>
                </Link>
                <div
                    className="profile_links"
                    onClick={() => {
                        history.goBack();
                    }}
                >
                    <img src={arrow_back} alt="" height="11" width="13" />
                    <p className="content">Back</p>
                </div>
            </div>
        </div>
    );
}

export default User;
