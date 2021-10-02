import React, { useState } from "react";
import deski_ash from "../assets/deski_ash.svg";
import { Link, useLocation } from "react-router-dom";
import bell from "../assets/bell.svg";
import { Calendar } from "small-google-calendar";
import { format } from "date-fns";
import sortdown from "../assets/sortdown.png";
import plusmath from "../assets/plusmath.png";
import planner from "../assets/planner.png";
import exit from "../assets/exit.png";
import menuvertical from "../assets/menuvertical.png";
import like from "../assets/like.svg";
import attach from "../assets/attach.png";
import avatar from "../assets/avatar.jpg";
import { Avatar, Menu, Popover, Position, Dialog, CrossIcon, MoreIcon, TextInput, Pane, Textarea } from "evergreen-ui";
import dropbox from "../assets/dropbox.png";
import { position } from "ui-box";

function Header() {
    const [isShown, setIsShown] = React.useState(false);
    const [isShown1, setIsShown1] = React.useState(false);
    // const [isShown2, setIsShown2] = React.useState(false);
    const [isShown3, setIsShown3] = React.useState(false);

    const [title, setTitle] = React.useState(false);
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date());

    function handleKeyDown(e) {
        if (e.key === "Enter") {
            setTitle(false);
        }
    }
    const location = useLocation();
    const [selectedtab, setSelectedTab] = React.useState(0);

    const disabled = {
        marginTop: "5px",
    };
    const profile_menu = {
        height: "30px",
    };
    const textinput = {
        width: "608px",
        height: "36px",
        border: "0.5px solid #C4C4C4",
        borderRadius: "5px",
        padding: "2px 0 4px 12px",
        fontSize: "24px",
        fontSamily: "GTEestiProDisplay-regular",
        color: "#000000",
        marginLeft: "20px",
        marginTop: "-70px",
        position: "absolute",
    };
    const textarea = {
        height: "71px",
        width: "608px",
        marginLeft: "20px",
        borderRadius: "5px",
        marginTop: "17px",
        fontSize: "12px",
        fontSamily: "Segoe UI",
        color: "#858585",
        resize: "none",
    };
    React.useEffect(() => {
        if (location.pathname === "/dashboard") {
            setSelectedTab(1);
        }

        if (location.pathname === "/works") {
            setSelectedTab(0);
        }

        if (location.pathname === "/filters") {
            setSelectedTab(2);
        }

        if (location.pathname === "/people") {
            setSelectedTab(3);
        }
    });
    function openNav() {
        document.getElementById("mySidenav").style.width = "683px";
    }
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
    return (
        <div>
            <header>
                <Link to="/workplace">
                    <img src={deski_ash} alt="" height="60" width="110" />
                </Link>
                <div className="wrk_nav_">
                    <Link to="/works" className={selectedtab === 0 ? "wrknav_links_selected" : "wrknav_links"}>
                        Works
                    </Link>
                    <Link to="/dashboard" className={selectedtab === 1 ? "wrknav_links_selected" : "wrknav_links"}>
                        Dashboard
                    </Link>

                    <Link to="/filters" className={selectedtab === 2 ? "wrknav_links_selected" : "wrknav_links"}>
                        Filters
                    </Link>
                    <Link to="/people" className={selectedtab === 3 ? "wrknav_links_selected" : "wrknav_links"}>
                        People
                    </Link>
                    <button className="create_btn" onClick={openNav}>
                        Create
                    </button>

                    <div className="create_issue" id="mySidenav">
                        <div className="header">
                            <Popover
                                minWidth={50}
                                position={Position.BOTTOM_LEFT}
                                content={
                                    <Menu>
                                        <Menu.Group>
                                            <Menu.Item>
                                                <p className="menucontent">Todo 1</p>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <p className="menucontent">Todo 2</p>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <p className="menucontent">Todo 3</p>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <p className="menucontent">Todo 4</p>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <p className="menucontent">Todo 5</p>
                                            </Menu.Item>
                                        </Menu.Group>
                                    </Menu>
                                }
                            >
                                <div className="create_issue_todo">
                                    <p>Todo</p>
                                    <div className="todo_drop">
                                        <img src={sortdown} alt="" />
                                    </div>
                                </div>
                            </Popover>
                            <div className="h_right">
                                <img src={like} alt="" />
                                <img src={attach} alt="" />
                                <img src={menuvertical} alt="" />
                                <img src={exit} alt="" onClick={closeNav} />
                            </div>
                        </div>

                        <h1 onClick={() => setTitle(true)}>My First Workspace</h1>
                        {title && (
                            <TextInput
                                autoFocus
                                onKeyDown={handleKeyDown}
                                style={textinput}
                                className="create_issue_textinput"
                                placeholder="My First Workspace"
                            />
                        )}
                        <div className="create_issue_content">
                            <p>Assignee </p>
                            <Popover
                                minWidth={50}
                                position={Position.BOTTOM_LEFT}
                                content={
                                    <Menu>
                                        <Menu.Group>
                                            <Menu.Item>
                                                <p className="menucontent">Assignee 1</p>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <p className="menucontent">Assignee 2</p>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <p className="menucontent">Assignee 3</p>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <p className="menucontent">Assignee 4</p>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <p className="menucontent">Assignee 5</p>
                                            </Menu.Item>
                                        </Menu.Group>
                                    </Menu>
                                }
                            >
                                <div className="span">
                                    <span className="span1">HC</span>
                                    <img src={sortdown} alt="" className="sortdown" />
                                </div>
                            </Popover>
                            <p>Due date </p>
                            <div className="span2">
                                <img src={planner} alt="" onClick={() => setShow(true)} />
                                <div>{format(date, "MMM dd")}</div>
                            </div>
                            <Calendar
                                className="r"
                                show={show}
                                onChange={(value) => {
                                    setDate(value);
                                    setShow(false);
                                }}
                            />

                            <p>Label</p>
                            <Popover
                                minWidth={50}
                                position={Position.BOTTOM_LEFT}
                                content={
                                    <Menu>
                                        <Menu.Group>
                                            <Menu.Item>
                                                <p className="menucontent">Label 1</p>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <p className="menucontent">Label 2</p>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <p className="menucontent">Label 3</p>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <p className="menucontent">Label 4</p>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <p className="menucontent">Label 5</p>
                                            </Menu.Item>
                                        </Menu.Group>
                                    </Menu>
                                }
                            >
                                <div className="span">
                                    <span className="span3">High</span>
                                    <img src={sortdown} alt="" className="sortdown" />
                                </div>
                            </Popover>
                            <p>Priority</p>
                            <Popover
                                position={Position.BOTTOM_LEFT}
                                minWidth={50}
                                content={
                                    <Menu>
                                        <Menu.Group>
                                            <Menu.Item>
                                                <p className="menucontent">Priority 1</p>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <p className="menucontent">Priority 2</p>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <p className="menucontent">Priority 3</p>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <p className="menucontent">Priority 4</p>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <p className="menucontent">Priority 5</p>
                                            </Menu.Item>
                                        </Menu.Group>
                                    </Menu>
                                }
                            >
                                <div className="span">
                                    <span className="span4">Medium</span>
                                    <img src={sortdown} alt="" className="sortdown" />
                                </div>
                            </Popover>
                            <p>Project </p>
                            <Popover
                                position={Position.BOTTOM_LEFT}
                                minWidth={50}
                                content={
                                    <Menu>
                                        <Menu.Group>
                                            <Menu.Item>
                                                <p className="menucontent">Project 1</p>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <p className="menucontent">Project 2</p>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <p className="menucontent">Project 3</p>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <p className="menucontent">Project 4</p>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <p className="menucontent">Project 5</p>
                                            </Menu.Item>
                                        </Menu.Group>
                                    </Menu>
                                }
                            >
                                <div className="span">
                                    <span className="span5">Bug tracking project</span>
                                    <img src={sortdown} alt="" className="sortdown" />
                                </div>
                            </Popover>
                            <p>Description</p>
                        </div>
                        <Textarea style={textarea} className="textarea" placeholder="Add more details to this task" />
                        <button className="create_issue_btn">
                            <img src={plusmath} alt="" className="plusmath" />
                            Add subtask
                        </button>
                    </div>

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
                                        <Link to="/upgrade" className="link">
                                            <Menu.Item className="profile_menu">
                                                <p>Upgrade</p>
                                            </Menu.Item>
                                        </Link>
                                        <Menu.Item className="profile_menu">
                                            <p>Contact sales</p>
                                        </Menu.Item>
                                        <Menu.Item className="profile_menu" onClick={() => setIsShown(true)}>
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
                <Dialog
                    margin="none"
                    padding="none"
                    topOffset={120}
                    width={570}
                    onCloseComplete={() => setIsShown(false)}
                    preventBodyScrolling
                    hasHeader={false}
                    isShown={isShown}
                    hasFooter={false}
                >
                    <div className="conncted_acnts">
                        <CrossIcon float="right" marginTop={5} cursor="pointer" onClick={() => setIsShown(false)} />
                        <h4>Connected accounts</h4>
                        <Popover
                            position={Position.BOTTOM_RIGHT}
                            minWidth={50}
                            content={
                                <Menu>
                                    <Menu.Group>
                                        <Menu.Item
                                            onSelect={() => {
                                                setIsShown3(true);
                                                setIsShown(false);
                                            }}
                                        >
                                            <p className="menucontent">Rename</p>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <p className="menucontent">Connect</p>
                                        </Menu.Item>
                                        <Menu.Item
                                            intent="danger"
                                            onSelect={() => {
                                                setIsShown1(true);
                                                setIsShown(false);
                                            }}
                                        >
                                            <p className="menucontentred">Delete</p>
                                        </Menu.Item>
                                    </Menu.Group>
                                </Menu>
                            }
                        >
                            <MoreIcon
                                float="right"
                                color="#cecece"
                                size={13}
                                cursor="pointer"
                                marginTop={20}
                                marginRight={35}
                            />
                        </Popover>

                        <img src={dropbox} alt="" height="34" width="40" className="dropbox" />
                        <div className="dropbox_">
                            <h4>Dropbox </h4>
                            <p>User : hexcode</p>
                        </div>
                        <p>Add accounts</p>
                        <div className="drops">
                            <div>
                                <img src={dropbox} alt="" height="34" width="40" className="dropbox" />
                                <h3>Dropbox</h3>
                                <img src={dropbox} alt="" height="34" width="40" className="dropbox" />
                                <h3>Dropbox</h3>
                            </div>
                            <div>
                                <img src={dropbox} alt="" height="34" width="40" className="dropbox" />
                                <h3>Dropbox</h3>
                                <img src={dropbox} alt="" height="34" width="40" className="dropbox" />
                                <h3>Dropbox</h3>
                            </div>
                            <div>
                                <img src={dropbox} alt="" height="34" width="40" className="dropbox" />
                                <h3>Dropbox</h3>
                                <img src={dropbox} alt="" height="34" width="40" className="dropbox" />
                                <h3>Dropbox</h3>
                            </div>
                            <div>
                                <img src={dropbox} alt="" height="34" width="40" className="dropbox" />
                                <h3>Dropbox</h3>
                                <img src={dropbox} alt="" height="34" width="40" className="dropbox" />
                                <h3>Dropbox</h3>
                            </div>
                        </div>
                    </div>
                </Dialog>
                <Dialog
                    topOffset={235}
                    width={400}
                    minHeightContent={160}
                    onCloseComplete={() => setIsShown1(false)}
                    preventBodyScrolling
                    hasHeader={false}
                    isShown={isShown1}
                    hasFooter={false}
                >
                    <div className="dlt_workspace">
                        <h4>Are you sure you want to delete this workspace ? </h4>
                        <p>Recently deleted workspaces can be restored from trash.</p>

                        <div>
                            <button className="cancel_btn cncl" onClick={() => setIsShown1(false)}>
                                Cancel
                            </button>
                            <button className="dlt_btn" onClick={() => setIsShown1(false)}>
                                Delete workspace
                            </button>
                        </div>
                    </div>
                </Dialog>
                <Dialog
                    margin="none"
                    padding="none"
                    topOffset={220}
                    width={465}
                    minHeightContent={205}
                    onCloseComplete={() => setIsShown3(false)}
                    preventBodyScrolling
                    hasHeader={false}
                    isShown={isShown3}
                    hasFooter={false}
                >
                    <div className="share_workspace">
                        <h4>Change App Development to</h4>
                        <p>Change your space name to another</p>
                        <TextInput
                            className="new_name"
                            borderRadius="none"
                            width={400}
                            height={25}
                            placeholder="Enter new name"
                        />
                        <div>
                            <button className="cancel_btn" onClick={() => setIsShown3(false)}>
                                Cancel
                            </button>
                            <button className="add_btn" onClick={() => setIsShown3(false)}>
                                Save
                            </button>
                        </div>
                    </div>
                </Dialog>
            </header>
        </div>
    );
}

export default Header;
