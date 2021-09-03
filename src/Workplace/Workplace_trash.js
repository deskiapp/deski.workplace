import React from "react";
import Workplace from "./Workplace";
import Header from "./Header";
import trash from "../assets/trash.svg";
import arrow from "../assets/arrow.svg";
import { Popover, Menu, Position, Pane, MoreIcon } from "evergreen-ui";
import bug from "../assets/bug.svg";
import app from "../assets/app.svg";
import avatar from "../assets/avatar.jpg";
import avatar1 from "../assets/avatar1.jpeg";
import avatar2 from "../assets/avatar2.jpeg";
import clock from "../assets/clock.png";

function Workplace_trash() {
    const menu = {
        height: "30px",
    };
    const containerStyles = {
        height: 3.5,
        width: "100%",
        backgroundColor: "#dfe1ef",
        borderRadius: "10px",
        marginTop: -3,
    };

    const fillerStyles = {
        height: "100%",
        width: "72%",
        backgroundColor: "#272727",
        borderRadius: "inherit",
        textAlign: "right",
    };
    return (
        <div>
            <Header />
            <Workplace />
            <div className="trash">
                <h2>Recently Deleted</h2>
                <p className="trash_p">
                    Workspace or space will automatically deleted from your Trash folder after 30 days.
                </p>
                <h2>My First Workspace</h2>
                <Popover
                    position={Position.BOTTOM_LEFT}
                    minWidth={120}
                    content={
                        <Menu>
                            <Menu.Group>
                                <Menu.Item style={menu} icon={<img src={trash} alt="" height="10" width="10" />}>
                                    <p className="menucontent">Restore workspace</p>
                                </Menu.Item>
                                <Menu.Item style={menu} icon={<img src={trash} alt="" height="10" width="10" />}>
                                    <p className="menucontent">Permanently delete</p>
                                </Menu.Item>
                            </Menu.Group>
                        </Menu>
                    }
                >
                    <div className="arrow_trash">
                        <img src={arrow} alt="" className="arrow" />
                    </div>
                </Popover>
                <div>
                    <Pane className="space">
                        <Popover
                            position={Position.BOTTOM_LEFT}
                            minWidth={40}
                            content={
                                <Menu>
                                    <Menu.Group>
                                        <Menu.Item style={menu}>
                                            <p className="menucontent">Restore space</p>
                                        </Menu.Item>
                                        <Menu.Item style={menu}>
                                            <p className="menucontent">Permanently delete</p>
                                        </Menu.Item>
                                    </Menu.Group>
                                </Menu>
                            }
                        >
                            <MoreIcon className="more_" />
                        </Popover>

                        <img src={bug} alt="" height="35" width="35" />
                        <h4>Bug Tracking</h4>
                        <p className="deski">www.deskiapp.com</p>
                        <p className="des">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                        </p>
                        <p className="progress">72%</p>
                        <div className="create_site">
                            <div style={containerStyles}>
                                <div style={fillerStyles}></div>
                            </div>
                        </div>

                        <div>
                            <div className="img_cnt">
                                <p>+8</p>
                            </div>
                            <div className="card">
                                <img src={avatar} alt="" className="profiles" height="19" width="19" />
                            </div>
                            <div className="card">
                                <img src={avatar1} alt="" className="profiles" height="19" width="19" />
                            </div>
                            <div className="card">
                                <img src={avatar2} alt="" className="profiles" height="19" width="19" />
                            </div>
                        </div>
                        <div className="clock">
                            <img src={clock} alt="" height="11" width="11" />
                            <p>7 days left</p>
                        </div>
                    </Pane>
                    <Pane className="space">
                        <Popover
                            position={Position.BOTTOM_LEFT}
                            minWidth={40}
                            content={
                                <Menu>
                                    <Menu.Group>
                                        <Menu.Item style={menu}>
                                            <p className="menucontent">Restore space</p>
                                        </Menu.Item>
                                        <Menu.Item style={menu}>
                                            <p className="menucontent">Permanently delete</p>
                                        </Menu.Item>
                                    </Menu.Group>
                                </Menu>
                            }
                        >
                            <MoreIcon className="more_" />
                        </Popover>
                        <img src={app} alt="" height="35" width="35" />
                        <h4>App Development</h4>
                        <p className="deski">www.deskiapp.com</p>
                        <p className="des">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                        </p>
                        <p className="progress">58%</p>
                        <div className="create_site">
                            <div style={containerStyles}>
                                <div style={fillerStyles}></div>
                            </div>
                        </div>
                        <div className="img_cnt2">
                            <p>+6</p>
                        </div>
                        <img src={avatar} alt="" className="profiles" height="19" width="19" />
                        <img src={avatar1} alt="" className="profiles" height="19" width="19" />
                        <img src={avatar2} alt="" className="profiles" height="19" width="19" />
                        <div className="clock">
                            <img src={clock} alt="" height="11" width="11" />
                            <p>3 days left</p>
                        </div>
                    </Pane>
                    <Pane className="space">
                        <Popover
                            position={Position.BOTTOM_LEFT}
                            minWidth={40}
                            content={
                                <Menu>
                                    <Menu.Group>
                                        <Menu.Item style={menu}>
                                            <p className="menucontent">Restore space</p>
                                        </Menu.Item>
                                        <Menu.Item style={menu}>
                                            <p className="menucontent">Permanently delete</p>
                                        </Menu.Item>
                                    </Menu.Group>
                                </Menu>
                            }
                        >
                            <MoreIcon className="more_" />
                        </Popover>
                        <img src={app} alt="" height="35" width="35" />
                        <h4>React Development</h4>
                        <p className="deski">www.deskiapp.com</p>
                        <p className="des">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                        </p>
                        <p className="progress">58%</p>
                        <div className="create_site">
                            <div style={containerStyles}>
                                <div style={fillerStyles}></div>
                            </div>
                        </div>
                        <div className="img_cnt2">
                            <p>+6</p>
                        </div>
                        <img src={avatar} alt="" className="profiles" height="19" width="19" />
                        <img src={avatar1} alt="" className="profiles" height="19" width="19" />
                        <img src={avatar2} alt="" className="profiles" height="19" width="19" />
                        <div className="clock">
                            <img src={clock} alt="" height="11" width="11" />
                            <p>3 days left</p>
                        </div>
                    </Pane>
                </div>
                <h2 className="other_space">Other Space</h2>
                <div>
                    <Pane className="space">
                        <Popover
                            position={Position.BOTTOM_LEFT}
                            minWidth={40}
                            content={
                                <Menu>
                                    <Menu.Group>
                                        <Menu.Item style={menu}>
                                            <p className="menucontent">Restore space</p>
                                        </Menu.Item>
                                        <Menu.Item style={menu}>
                                            <p className="menucontent">Permanently delete</p>
                                        </Menu.Item>
                                    </Menu.Group>
                                </Menu>
                            }
                        >
                            <MoreIcon className="more_" />
                        </Popover>

                        <img src={bug} alt="" height="35" width="35" />
                        <h4>Bug Tracking</h4>
                        <p className="deski">www.deskiapp.com</p>
                        <p className="des">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                        </p>
                        <p className="progress">72%</p>
                        <div className="create_site">
                            <div style={containerStyles}>
                                <div style={fillerStyles}></div>
                            </div>
                        </div>

                        <div>
                            <div className="img_cnt">
                                <p>+8</p>
                            </div>
                            <div className="card">
                                <img src={avatar} alt="" className="profiles" height="19" width="19" />
                            </div>
                            <div className="card">
                                <img src={avatar1} alt="" className="profiles" height="19" width="19" />
                            </div>
                            <div className="card">
                                <img src={avatar2} alt="" className="profiles" height="19" width="19" />
                            </div>
                        </div>
                        <div className="clock">
                            <img src={clock} alt="" height="11" width="11" />
                            <p>7 days left</p>
                        </div>
                    </Pane>
                    <Pane className="space">
                        <Popover
                            position={Position.BOTTOM_LEFT}
                            minWidth={40}
                            content={
                                <Menu>
                                    <Menu.Group>
                                        <Menu.Item style={menu}>
                                            <p className="menucontent">Restore space</p>
                                        </Menu.Item>
                                        <Menu.Item style={menu}>
                                            <p className="menucontent">Permanently delete</p>
                                        </Menu.Item>
                                    </Menu.Group>
                                </Menu>
                            }
                        >
                            <MoreIcon className="more_" />
                        </Popover>
                        <img src={app} alt="" height="35" width="35" />
                        <h4>App Development</h4>
                        <p className="deski">www.deskiapp.com</p>
                        <p className="des">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                        </p>
                        <p className="progress">58%</p>
                        <div className="create_site">
                            <div style={containerStyles}>
                                <div style={fillerStyles}></div>
                            </div>
                        </div>
                        <div className="img_cnt2">
                            <p>+6</p>
                        </div>
                        <img src={avatar} alt="" className="profiles" height="19" width="19" />
                        <img src={avatar1} alt="" className="profiles" height="19" width="19" />
                        <img src={avatar2} alt="" className="profiles" height="19" width="19" />
                        <div className="clock">
                            <img src={clock} alt="" height="11" width="11" />
                            <p>3 days left</p>
                        </div>
                    </Pane>
                    <Pane className="space">
                        <Popover
                            position={Position.BOTTOM_LEFT}
                            minWidth={40}
                            content={
                                <Menu>
                                    <Menu.Group>
                                        <Menu.Item style={menu}>
                                            <p className="menucontent">Restore space</p>
                                        </Menu.Item>
                                        <Menu.Item style={menu}>
                                            <p className="menucontent">Permanently delete</p>
                                        </Menu.Item>
                                    </Menu.Group>
                                </Menu>
                            }
                        >
                            <MoreIcon className="more_" />
                        </Popover>
                        <img src={app} alt="" height="35" width="35" />
                        <h4>React Development</h4>
                        <p className="deski">www.deskiapp.com</p>
                        <p className="des">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                        </p>
                        <p className="progress">58%</p>
                        <div className="create_site">
                            <div style={containerStyles}>
                                <div style={fillerStyles}></div>
                            </div>
                        </div>
                        <div className="img_cnt2">
                            <p>+6</p>
                        </div>
                        <img src={avatar} alt="" className="profiles" height="19" width="19" />
                        <img src={avatar1} alt="" className="profiles" height="19" width="19" />
                        <img src={avatar2} alt="" className="profiles" height="19" width="19" />
                        <div className="clock">
                            <img src={clock} alt="" height="11" width="11" />
                            <p>3 days left</p>
                        </div>
                    </Pane>
                </div>
            </div>
        </div>
    );
}

export default Workplace_trash;
