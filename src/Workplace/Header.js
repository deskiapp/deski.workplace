import React from "react";
import "./Header.css";
import deski_ash from "../assets/deski_ash.svg";
import { Link, useLocation } from "react-router-dom";
import bell from "../assets/bell.svg";
import logout from "../assets/logout.svg";
import upgrade from "../assets/upgrade.svg";
import account from "../assets/account.svg";
import contact from "../assets/contact.svg";
import connect from "../assets/connect.svg";
import avatar from "../assets/avatar.jpg";
import { Avatar, Menu, Popover, Position } from "evergreen-ui";

function Header() {
    const location = useLocation();
    const [selectedtab, setSelectedTab] = React.useState(0);

    const disabled = {
        marginTop: "-15px",
        height: "70px",
    };
    const line = {
        marginLeft: "-20px",
        marginRight: "-20px",
        marginTop: "-5px",
        width: "185px",
        borderBottom: "solid 1px #707070",
    };
    const profile_menu = {
        height: "30px",
    };

    React.useEffect(() => {
        // alert(location.pathname)
        if (location.pathname === "/home") {
            setSelectedTab(0);
        }

        if (location.pathname === "/feed") {
            setSelectedTab(1);
        }

        if (location.pathname === "/template") {
            setSelectedTab(2);
        }
    });

    return (
        <div>
            <header>
                <Link to="/home">
                    <img src={deski_ash} alt="" height="60" width="110" />
                </Link>
                <div className="wrk_nav">
                    <Link to="/home" className={selectedtab === 0 ? "wrknav_links_selected" : "wrknav_links"}>
                        Home
                    </Link>
                    <Link to="/feed" className={selectedtab === 1 ? "wrknav_links_selected" : "wrknav_links"}>
                        Feed
                    </Link>
                    <Link to="/template" className={selectedtab === 2 ? "wrknav_links_selected" : "wrknav_links"}>
                        Templates
                    </Link>

                    <div className="header_right">
                        <Popover
                            position={Position.BOTTOM_RIGHT}
                            content={
                                <Menu>
                                    <Menu.Group>
                                        <Menu.Item className="disabled" style={disabled} disabled>
                                            <p>hey@deski.app</p>
                                            <div className="line" style={line}></div>
                                        </Menu.Item>
                                        <Link to="/account" className="link">
                                            <Menu.Item style={profile_menu} icon={<img src={account} alt="" />}>
                                                <p>Account</p>
                                            </Menu.Item>
                                        </Link>
                                        <Menu.Item style={profile_menu} icon={<img src={upgrade} alt="" />}>
                                            <p>Upgrade</p>
                                        </Menu.Item>
                                        <Menu.Item style={profile_menu} icon={<img src={contact} alt="" />}>
                                            <p>Contact sales</p>
                                        </Menu.Item>
                                        <Menu.Item style={profile_menu} icon={<img src={connect} alt="" />}>
                                            <p>Connected accounts</p>
                                        </Menu.Item>
                                        <Menu.Item style={profile_menu} icon={<img src={logout} alt="" />}>
                                            <p>Logout</p>
                                        </Menu.Item>
                                    </Menu.Group>
                                    <Menu.Divider />
                                </Menu>
                            }
                        >
                            <Avatar className="profile" src={avatar} size={34} />
                        </Popover>
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
