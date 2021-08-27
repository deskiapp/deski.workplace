import React from "react";
import "./Home.css";
import Workplace from "../Workplace/Workplace";
import add from "../assets/add.svg";
import bug from "../assets/bug.svg";
import app from "../assets/app.svg";
import share from "../assets/share.svg";
import dlt from "../assets/dlt.svg";
import rename from "../assets/rename.svg";
import settings from "../assets/settings.svg";
import kanban from "../assets/kanban.svg";
import scrum from "../assets/scrum.svg";
import template from "../assets/template.svg";
import scratch from "../assets/scratch.svg";
import arrow from "../assets/arrow.svg";
import add_circle from "../assets/add_circle.svg";
import { Pane, DragHandleVerticalIcon, Popover, Menu, TextInputField, Dialog, SelectMenu } from "evergreen-ui";
import avatar from "../assets/avatar.jpg";
import avatar1 from "../assets/avatar1.jpeg";
import avatar2 from "../assets/avatar2.jpeg";
import clock from "../assets/clock.png";

function Home() {
    const [selected, setSelected] = React.useState(null);
    const [isShown, setIsShown] = React.useState(false);
    const containerStyles = {
        height: 3.5,
        width: "100%",
        backgroundColor: "#dfe1ef",
        borderRadius: 80,
        marginTop: -3,
    };

    const fillerStyles = {
        height: "100%",
        width: "72%",
        backgroundColor: "#272727",
        borderRadius: "inherit",
        textAlign: "right",
    };

    const textinput = {
        height: "40px",
        border: "solid 0.1px #cecece",
    };
    return (
        <div>
            <Workplace />
            <div className="cotainer">
                <Pane className="workspace_container">
                    <div>
                        <h2>My First Workspace</h2>
                        <Popover
                            bringFocusInside
                            // position={Position.BOTTOM_LEFT}
                            content={
                                <Menu>
                                    <Menu.Group>
                                        <Menu.Item
                                            className="menu"
                                            icon={<img src={settings} alt="" height="10" width="10" />}
                                        >
                                            <p className="menucontent">Workspace settings</p>
                                        </Menu.Item>
                                        <Menu.Item
                                            onClick={() => setIsShown(true)}
                                            className="menu"
                                            icon={<img src={share} alt="" height="10" width="10" />}
                                        >
                                            <p className="menucontent">Share workspace</p>
                                        </Menu.Item>
                                        <Menu.Item
                                            className="menu"
                                            icon={<img src={rename} alt="" height="10" width="10" />}
                                        >
                                            <p className="menucontent">Rename workspace</p>
                                        </Menu.Item>
                                        <Menu.Item className="menu" icon={<img src={dlt} alt="" height="10" width="10" />}>
                                            <p className="menucontent">Delete workspace</p>
                                        </Menu.Item>
                                    </Menu.Group>
                                </Menu>
                            }
                        >
                            <img src={arrow} alt="" className="more" />
                        </Popover>
                        <Dialog
                            width={465}
                            minHeightContent={305}
                            hasHeader={false}
                            isShown={isShown}
                            onCloseComplete={() => setIsShown(false)}
                            hasFooter={false}
                        >
                            <div className="share_workspace">
                                <h4>Add your teammates to deski Software</h4>
                                <p>
                                    People you add will receive an invite automatically or after your site admin has
                                    approved the request.
                                </p>
                                <TextInputField
                                    width={400}
                                    style={textinput}
                                    className="share_input"
                                    placeholder="Type name , grop or email address"
                                />
                                <SelectMenu
                                    height={140}
                                    width={400}
                                    title="Select name"
                                    options={["Collaborator", "Admin", "Viewer", "Administrator"].map((label) => ({
                                        label,
                                        value: label,
                                    }))}
                                    selected={selected}
                                    hasFilter={false}
                                    hasTitle={false}
                                    onSelect={(item) => setSelected(item.value)}
                                >
                                    <button className="dropdown">{selected || "Administrator"}</button>
                                </SelectMenu>
                                <div className="drop_icon">
                                    <img src={arrow} alt="" height="8" width="15" />
                                </div>
                                <div>
                                    <button className="cancel_btn" onClick={() => setIsShown(false)}>
                                        Cancel
                                    </button>
                                    <button className="add_btn" onClick={() => setIsShown(false)} s>
                                        Add
                                    </button>
                                </div>
                            </div>
                        </Dialog>
                    </div>
                    <div>
                        <Pane className="space">
                            <DragHandleVerticalIcon className="moreicon" />

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
                            <DragHandleVerticalIcon className="moreicon" />

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
                            <center>
                                <Popover
                                    bringFocusInside
                                    content={
                                        <Pane width={420} height={155} padding={10} flexDirection="column">
                                            <Pane>
                                                <Pane className="container">
                                                    <img src={scratch} alt="" height="25" width="25" />
                                                    <Pane className="popover">
                                                        <p className="title">Start from scratch</p>
                                                        <p className="des">Standardize your work with own workflow</p>
                                                    </Pane>
                                                </Pane>
                                            </Pane>
                                            <Pane className="row_2">
                                                <Pane className="container">
                                                    <img src={kanban} alt="" height="25" width="25" />
                                                    <Pane className="popover">
                                                        <p className="title">Kanban</p>
                                                        <p className="des">
                                                            Visualize and advance your project on a powerful board
                                                        </p>
                                                    </Pane>
                                                </Pane>
                                            </Pane>
                                            <div className="pop_row">
                                                <Pane>
                                                    <Pane className="container">
                                                        <img src={scrum} alt="" height="25" width="25" />
                                                        <Pane className="popover">
                                                            <p className="title">Scrum</p>
                                                            <p className="des">
                                                                Sprint towards your project goals with a board ,backlog and
                                                                road map
                                                            </p>
                                                        </Pane>
                                                    </Pane>
                                                </Pane>
                                                <Pane className="row_2">
                                                    <Pane className="container">
                                                        <img src={template} alt="" height="25" width="25" />
                                                        <Pane className="popover">
                                                            <p className="title">Start with templates</p>
                                                            <p className="des">
                                                                Pre-build templates, where you can quickly get started
                                                            </p>
                                                        </Pane>
                                                    </Pane>
                                                </Pane>
                                            </div>
                                        </Pane>
                                    }
                                >
                                    <img src={add_circle} className="add_circle" alt="add_circle" height="22" width="22" />
                                </Popover>
                            </center>
                            <center>
                                <p className="add_space">Add Space</p>
                            </center>
                        </Pane>
                    </div>
                </Pane>
                <Pane className="workspace_container">
                    <div>
                        <h2>My Second Workspace</h2>
                        <Popover
                            // position={Position.BOTTOM_LEFT}
                            content={
                                <Menu>
                                    <Menu.Group>
                                        <Menu.Item
                                            className="menu"
                                            icon={<img src={settings} alt="" height="10" width="10" />}
                                        >
                                            <p className="menucontent">Workspace settings</p>
                                        </Menu.Item>
                                        <Menu.Item
                                            onClick={() => setIsShown(true)}
                                            className="menu"
                                            icon={<img src={share} alt="" height="10" width="10" />}
                                        >
                                            <p className="menucontent">Share workspace</p>
                                        </Menu.Item>
                                        <Menu.Item
                                            className="menu"
                                            icon={<img src={rename} alt="" height="10" width="10" />}
                                        >
                                            <p className="menucontent">Rename workspace</p>
                                        </Menu.Item>
                                        <Menu.Item className="menu" icon={<img src={dlt} alt="" height="10" width="10" />}>
                                            <p className="menucontent">Delete workspace</p>
                                        </Menu.Item>
                                    </Menu.Group>
                                </Menu>
                            }
                        >
                            <img src={arrow} alt="" className="more" />
                        </Popover>
                    </div>
                    <div>
                        <Pane className="space">
                            <DragHandleVerticalIcon className="moreicon" />

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
                            <DragHandleVerticalIcon className="moreicon" />

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
                            <center>
                                <Popover
                                    bringFocusInside
                                    content={
                                        <Pane width={420} height={155} padding={10} flexDirection="column">
                                            <Pane>
                                                <Pane className="container">
                                                    <img src={scratch} alt="" height="25" width="25" />
                                                    <Pane className="popover">
                                                        <p className="title">Start from scratch</p>
                                                        <p className="des">Standardize your work with own workflow</p>
                                                    </Pane>
                                                </Pane>
                                            </Pane>
                                            <Pane className="row_2">
                                                <Pane className="container">
                                                    <img src={kanban} alt="" height="25" width="25" />
                                                    <Pane className="popover">
                                                        <p className="title">Kanban</p>
                                                        <p className="des">
                                                            Visualize and advance your project on a powerful board
                                                        </p>
                                                    </Pane>
                                                </Pane>
                                            </Pane>
                                            <div className="pop_row">
                                                <Pane>
                                                    <Pane className="container">
                                                        <img src={scrum} alt="" height="25" width="25" />
                                                        <Pane className="popover">
                                                            <p className="title">Scrum</p>
                                                            <p className="des">
                                                                Sprint towards your project goals with a board ,backlog and
                                                                road map
                                                            </p>
                                                        </Pane>
                                                    </Pane>
                                                </Pane>
                                                <Pane className="row_2">
                                                    <Pane className="container">
                                                        <img src={template} alt="" height="25" width="25" />
                                                        <Pane className="popover">
                                                            <p className="title">Start with templates</p>
                                                            <p className="des">
                                                                Pre-build templates, where you can quickly get started
                                                            </p>
                                                        </Pane>
                                                    </Pane>
                                                </Pane>
                                            </div>
                                        </Pane>
                                    }
                                >
                                    <img src={add_circle} className="add_circle" alt="" height="22" width="22" />
                                </Popover>
                            </center>
                            <center>
                                <p className="add_space">Add Space</p>
                            </center>
                        </Pane>
                    </div>
                </Pane>
                <Pane className="add_workspace">
                    <img src={add} alt="" height="15" width="15" />
                    <p>Add Workspace</p>
                </Pane>
            </div>
        </div>
    );
}

export default Home;
