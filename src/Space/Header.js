import React from "react";
import deski_ash from "../assets/deski_ash.svg";
import { Link, useLocation } from "react-router-dom";
import bell from "../assets/bell.svg";
import avatar from "../assets/avatar.jpg";
import { Avatar, Menu, Popover, Position } from "evergreen-ui";

function Header() {
    const location = useLocation();
    const [selectedtab, setSelectedTab] = React.useState(0);

    const disabled = {
        marginTop: "5px",
    };
    const profile_menu = {
        height: "30px",
    };

    React.useEffect(() => {
        if (location.pathname === "/dashboard") {
            setSelectedTab(0);
        }

        if (location.pathname === "/works") {
            setSelectedTab(1);
        }

        if (location.pathname === "/filters") {
            setSelectedTab(2);
        }

        if (location.pathname === "/people") {
            setSelectedTab(3);
        }

        if (location.pathname === "/create") {
            setSelectedTab(4);
        }
    });

    return (
        <div>
            <header>
                <Link to="/home">
                    <img src={deski_ash} alt="" height="60" width="110" />
                </Link>
                <div className="wrk_nav">
                    <Link to="/dashboard" className={selectedtab === 0 ? "wrknav_links_selected" : "wrknav_links"}>
                        Dashboard
                    </Link>
                    <Link to="/works" className={selectedtab === 1 ? "wrknav_links_selected" : "wrknav_links"}>
                        works
                    </Link>
                    <Link to="/filters" className={selectedtab === 2 ? "wrknav_links_selected" : "wrknav_links"}>
                        Filters
                    </Link>
                    <Link to="/people" className={selectedtab === 3 ? "wrknav_links_selected" : "wrknav_links"}>
                        People
                    </Link>
                    <Link to="/create" className={selectedtab === 4 ? "wrknav_links_selected" : "wrknav_links"}>
                        Create
                    </Link>

                    <div className="header_right">
                        <Popover
                            minWidth={240}
                            marginTop={100}
                            position={Position.BOTTOM_RIGHT}
                            content={
                                <Menu>
                                    <Menu.Group>
                                        <Menu.Item className="disabled" style={disabled} disabled>
                                            <p>deski.app</p>
                                        </Menu.Item>
                                        <Link to="/account" className="link">
                                            <Menu.Item className="profile_menu">
                                                <p>Account</p>
                                            </Menu.Item>
                                        </Link>
                                        <Menu.Item className="profile_menu">
                                            <p>Upgrade</p>
                                        </Menu.Item>
                                        <Menu.Item className="profile_menu">
                                            <p>Contact sales</p>
                                        </Menu.Item>
                                        <Menu.Item className="profile_menu">
                                            <p>Connected accounts</p>
                                        </Menu.Item>
                                    </Menu.Group>
                                    <Menu.Divider />
                                    <Menu.Group>
                                        <Menu.Item style={profile_menu} className="profile_menu">
                                            <p>Logout</p>
                                        </Menu.Item>
                                    </Menu.Group>
                                </Menu>
                            }
                        >
                            <div className="profile_div">
                                <Avatar className="profile" src={avatar} size={34} />
                            </div>
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
