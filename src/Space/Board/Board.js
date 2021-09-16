import React from "react";
import Header from "../Header";
import Space from "../Space";
import Epic1 from "./Epic1";
import Epic2 from "./Epic2";
import Epic3 from "./Epic3";

import "./Board.css";
import {
    Menu,
    Popover,
    Position,
    TextInputField,
    TextareaField,
    Dialog,
    SelectMenu,
    TextInput,
    TickIcon,
    CrossIcon,
} from "evergreen-ui";

import avatar from "../../assets/avatar.jpg";
import avatar1 from "../../assets/avatar1.jpeg";
import avatar2 from "../../assets/avatar2.jpeg";

import arrow_down from "../../assets/arrow_down.svg";
import add from "../../assets/add.svg";
import add_ from "../../assets/add_.svg";
import { MoreIcon } from "evergreen-ui";
import arrow from "../../assets/arrow.svg";
import send_ from "../../assets/send_.svg";

function Board() {
    const [isShown, setIsShown] = React.useState(false);
    const [createIssue, setCreateIssue] = React.useState(false);
    const [createIssue1, setCreateIssue1] = React.useState(false);
    const [createIssue2, setCreateIssue2] = React.useState(false);
    const [selected, setSelected] = React.useState(null);

    const coll_drpdwn = {
        height: "35px",
        paddingBottom: "15px",
    };
    const invite = {
        height: "20px",
    };
    const textinput = {
        height: "40px",
        border: "solid 0.1px #cecece",
        color: "#9a9a9a",
    };
    const [selectedTab, setSelectedTab] = React.useState(false);
    const [selectedTab1, setSelectedTab1] = React.useState(false);
    const [selectedTab2, setSelectedTab2] = React.useState(false);

    return (
        <div>
            <Header />
            <Space />
            <div className="board">
                <h2>Kanban Project</h2>
                <div className="bd_head">
                    <Dialog
                        margin="none"
                        padding="none"
                        topOffset={170}
                        width={465}
                        minHeightContent={305}
                        onCloseComplete={() => setIsShown(false)}
                        preventBodyScrolling
                        hasHeader={false}
                        isShown={isShown}
                        hasFooter={false}
                    >
                        <div className="share_workspace">
                            <h4>Add your teammates to deski Software</h4>
                            <p>
                                People you add will receive an invite automatically or after your site admin has approved
                                the request.
                            </p>
                            <TextInputField
                                width={400}
                                style={textinput}
                                className="share_input"
                                placeholder="Type name, group or email address"
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
                                closeOnSelect={true}
                                hasFilter={false}
                                hasTitle={false}
                                onSelect={(item) => setSelected(item.value)}
                            >
                                <button className="dropdown">
                                    {selected || "Administrator"}
                                    <img src={arrow} className="drop_icon" alt="" height="8" width="15" />
                                </button>
                            </SelectMenu>

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
                    <Popover
                        minWidth={210}
                        marginTop={400}
                        position={Position.BOTTOM_LEFT}
                        content={
                            <Menu>
                                <Menu.Group>
                                    <Menu.Item className="disabled_" disabled>
                                        <p className="disabled_">Your collaborator</p>
                                    </Menu.Item>
                                    <Menu.Item
                                        style={coll_drpdwn}
                                        className="coll_drpdwn"
                                        icon={<img src={avatar} alt="" className="bd_profiles" height="25" width="23" />}
                                    >
                                        <p>Abdu Rahiman</p>
                                    </Menu.Item>
                                    <Menu.Item
                                        style={coll_drpdwn}
                                        className="coll_drpdwn"
                                        icon={<img src={avatar1} alt="" className="bd_profiles" height="25" width="23" />}
                                    >
                                        <p>Abdu Rahiman</p>
                                    </Menu.Item>
                                    <Menu.Item
                                        style={coll_drpdwn}
                                        className="coll_drpdwn"
                                        icon={<img src={avatar} alt="" className="bd_profiles" height="25" width="23" />}
                                    >
                                        <p>Abdu Rahiman</p>
                                    </Menu.Item>
                                    <Menu.Item
                                        style={coll_drpdwn}
                                        className="coll_drpdwn"
                                        icon={<img src={avatar1} alt="" className="bd_profiles" height="25" width="23" />}
                                    >
                                        <p>Abdu Rahiman</p>
                                    </Menu.Item>
                                    <Menu.Item
                                        style={coll_drpdwn}
                                        className="coll_drpdwn"
                                        icon={<img src={avatar} alt="" className="bd_profiles" height="25" width="23" />}
                                    >
                                        <p>Abdu Rahiman</p>
                                    </Menu.Item>
                                </Menu.Group>
                                <Menu.Divider />
                                <Menu.Group>
                                    <Menu.Item
                                        onClick={() => setIsShown(true)}
                                        style={invite}
                                        icon={<img src={add_} alt="" height="10" width="10" />}
                                    >
                                        <p className="invite_">Invite collaborator</p>
                                    </Menu.Item>
                                </Menu.Group>
                            </Menu>
                        }
                    >
                        <div className="board_collaborators">
                            <div>
                                <img src={avatar} alt="" className="map_profiles" height="25" width="22" />
                            </div>
                            <div>
                                <img src={avatar1} alt="" className="map_profiles" height="25" width="22" />
                            </div>
                            <div>
                                <img src={avatar2} alt="" className="map_profiles" height="25" width="22" />
                            </div>
                            <div className="map_profile">
                                <p>+6</p>
                            </div>
                        </div>
                    </Popover>
                    <div className="epic_label">
                        <div className="epic">
                            Epic
                            <img src={arrow_down} alt="" className="epic_drpdwn" height="7" width="8" />
                        </div>
                        <div className="epic">
                            Label
                            <img src={arrow_down} alt="" className="epic_drpdwn" height="7" width="8" />
                        </div>
                        <div className="epic_">Clear filter</div>
                    </div>
                </div>
                <div className="boards">
                    <div className="status">
                        <div className="status_header" onDoubleClick={() => setSelectedTab(true)}>
                            <Popover
                                minWidth={50}
                                position={Position.BOTTOM_RIGHT}
                                content={
                                    <Menu>
                                        <Menu.Group>
                                            <Menu.Item>
                                                <p className="menucontent">Set column limit</p>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <p className="menucontent">Delete</p>
                                            </Menu.Item>
                                        </Menu.Group>
                                    </Menu>
                                }
                            >
                                <MoreIcon className="more_epic" />
                            </Popover>
                            <p>To-do-list</p>
                        </div>
                        {selectedTab ? (
                            <div className="board_name">
                                <TextInput width={260} />
                                <br></br>
                                <div>
                                    <button>
                                        <TickIcon className="icon" size={12} />
                                    </button>
                                    <button onClick={() => setSelectedTab(false)}>
                                        <CrossIcon className="icon" size={12} />
                                    </button>
                                </div>
                            </div>
                        ) : null}
                        <Epic1 />
                        <Epic2 />
                        <Epic3 />
                        <div className="create_issue" onClick={() => setCreateIssue(true)}>
                            <img src={add_} alt="" />
                            <p>Create issue</p>
                        </div>
                        {createIssue && (
                            <div>
                                <TextareaField height={80} marginLeft={5} width={260} marginTop={-29} />
                                <img src={send_} alt="" className="issue_send" />
                            </div>
                        )}
                    </div>
                    <div className="status">
                        <div className="status_header" onDoubleClick={() => setSelectedTab1(true)}>
                            <Popover
                                minWidth={50}
                                position={Position.BOTTOM_RIGHT}
                                content={
                                    <Menu>
                                        <Menu.Group>
                                            <Menu.Item>
                                                <p className="menucontent">Set column limit</p>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <p className="menucontent">Delete</p>
                                            </Menu.Item>
                                        </Menu.Group>
                                    </Menu>
                                }
                            >
                                <MoreIcon className="more_epic" />
                            </Popover>
                            <p>Processing</p>
                        </div>
                        {selectedTab1 ? (
                            <div className="board_name">
                                <TextInput width={260} />
                                <br></br>
                                <div>
                                    <button>
                                        <TickIcon className="icon" size={12} />
                                    </button>
                                    <button onClick={() => setSelectedTab1(false)}>
                                        <CrossIcon className="icon" size={12} />
                                    </button>
                                </div>
                            </div>
                        ) : null}
                        <Epic2 />
                        <Epic3 />
                        <div className="create_issue" onClick={() => setCreateIssue1(true)}>
                            <img src={add_} alt="" />
                            <p>Create issue</p>
                        </div>
                        {createIssue1 && (
                            <div>
                                <TextareaField height={80} marginLeft={5} width={260} marginTop={-29} />
                                <img src={send_} alt="" className="issue_send" />
                            </div>
                        )}
                    </div>
                    <div className="status">
                        <div className="status_header" onDoubleClick={() => setSelectedTab2(true)}>
                            <Popover
                                minWidth={50}
                                position={Position.BOTTOM_RIGHT}
                                content={
                                    <Menu>
                                        <Menu.Group>
                                            <Menu.Item>
                                                <p className="menucontent">Set column limit</p>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <p className="menucontent">Delete</p>
                                            </Menu.Item>
                                        </Menu.Group>
                                    </Menu>
                                }
                            >
                                <MoreIcon className="more_epic" />
                            </Popover>
                            <p>Done</p>
                        </div>
                        {selectedTab2 ? (
                            <div className="board_name">
                                <TextInput width={260} />
                                <br></br>
                                <div>
                                    <button>
                                        <TickIcon className="icon" size={12} />
                                    </button>
                                    <button onClick={() => setSelectedTab2(false)}>
                                        <CrossIcon className="icon" size={12} />
                                    </button>
                                </div>
                            </div>
                        ) : null}
                        <Epic1 />
                        <div className="create_issue" onClick={() => setCreateIssue2(true)}>
                            <img src={add_} alt="" />
                            <p>Create issue</p>
                        </div>
                        {createIssue2 && (
                            <div>
                                <TextareaField height={80} marginLeft={5} width={260} marginTop={-29} />
                                <img src={send_} alt="" className="issue_send" />
                            </div>
                        )}
                    </div>
                    <div className="end_col">
                        <div className="board_add">
                            <img src={add} alt="" height="14" width="10" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Board;
