import React from "react";
import deski_ash from "../assets/deski_ash.svg";
import { Link } from "react-router-dom";
import bell from "../assets/bell.svg";
import avatar from "../assets/avatar.jpg";
import { Avatar } from "evergreen-ui";

function Header() {
    return (
        <div>
            <header>
                <img src={deski_ash} alt="" height="60" width="110" />
                <div className="wrk_nav">
                    <Link to="/home" className="wrknav_links">
                        Home
                    </Link>
                    <Link to="/feed" className="wrknav_links">
                        Feed
                    </Link>
                    <Link to="/template" className="wrknav_links">
                        Templates
                    </Link>
                    <div className="header_right">
                        <Avatar src={avatar} size={34} />
                    </div>
                    <div className="bell">
                        <img src={bell} alt="" height="20" width="16" className="bell" />
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
