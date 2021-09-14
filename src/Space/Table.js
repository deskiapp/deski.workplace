import React from "react";
import Header from "./Header";
import Space from "./Space";
import Epic1 from "../Space/Board/Epic1";
import Epic2 from "../Space/Board/Epic2";
import Epic3 from "../Space/Board/Epic3";
import Epic4 from "../Space/Board/Epic4";
import Epic5 from "../Space/Board/Epic5";
import Epic6 from "../Space/Board/Epic6";
import Epic7 from "../Space/Board/Epic7";
import Epic8 from "../Space/Board/Epic8";
import "../Space/Board/Board.css";
import { DragHandleVerticalIcon, Menu, Popover, Position, TextInputField, Dialog, SelectMenu } from "evergreen-ui";

import avatar from "../assets/avatar.jpg";
import avatar1 from "../assets/avatar1.jpeg";
import avatar2 from "../assets/avatar2.jpeg";
import add from "../assets/add.svg";
import arrow_down from "../assets/arrow_down.svg";
import { MoreIcon } from "evergreen-ui";
import arrow from "../assets/arrow.svg";

function Table() {
    const [isShown, setIsShown] = React.useState(false);
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
                        // minWidth={240}
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
                                        <span>Software Engineer</span>
                                        {/* <MoreIcon className="more_col" /> */}
                                    </Menu.Item>
                                    <Menu.Item
                                        style={coll_drpdwn}
                                        className="coll_drpdwn"
                                        icon={<img src={avatar1} alt="" className="bd_profiles" height="25" width="23" />}
                                    >
                                        <p>Abdu Rahiman</p>
                                        <span>Software Engineer</span>
                                        {/* <MoreIcon className="more_col" /> */}
                                    </Menu.Item>
                                    <Menu.Item
                                        style={coll_drpdwn}
                                        className="coll_drpdwn"
                                        icon={<img src={avatar} alt="" className="bd_profiles" height="25" width="23" />}
                                    >
                                        <p>Abdu Rahiman</p>
                                        <span>Software Engineer</span>
                                        {/* <MoreIcon className="more_col" /> */}
                                    </Menu.Item>
                                    <Menu.Item
                                        style={coll_drpdwn}
                                        className="coll_drpdwn"
                                        icon={<img src={avatar1} alt="" className="bd_profiles" height="25" width="23" />}
                                    >
                                        <p>Abdu Rahiman</p>
                                        <span>Software Engineer</span>
                                        {/* <MoreIcon className="more_col" /> */}
                                    </Menu.Item>
                                    <Menu.Item
                                        style={coll_drpdwn}
                                        className="coll_drpdwn"
                                        icon={<img src={avatar} alt="" className="bd_profiles" height="25" width="23" />}
                                    >
                                        <p>Abdu Rahiman</p>
                                        <span>Software Engineer</span>
                                        {/* <MoreIcon className="more_col" /> */}
                                    </Menu.Item>
                                </Menu.Group>
                                <Menu.Divider />
                                <Menu.Group>
                                    <Menu.Item
                                        onClick={() => setIsShown(true)}
                                        style={invite}
                                        icon={<img src={add} alt="" height="10" width="10" />}
                                    >
                                        <p className="invite_">Invite teammates</p>
                                    </Menu.Item>
                                </Menu.Group>
                            </Menu>
                        }
                    >
                        <div className="board_collaborators">
                            <div>
                                <img src={avatar} alt="" className="bd_profiles" height="19" width="19" />
                            </div>
                            <div>
                                <img src={avatar1} alt="" className="bd_profiles" height="19" width="19" />
                            </div>
                            <div>
                                <img src={avatar2} alt="" className="bd_profiles" height="19" width="19" />
                            </div>
                            <div className="board_profile">
                                <p>+8</p>
                            </div>
                        </div>
                    </Popover>
                    <div className="epic_label">
                        <div className="epic">
                            Epic
                            <img src={arrow_down} alt="" className="epic_drpdwn" height="6" width="7" />
                        </div>
                        <div className="epic">
                            Label
                            <img src={arrow_down} alt="" className="epic_drpdwn" height="6" width="7" />
                        </div>
                    </div>
                </div>
                <div className="boards">
                    <div className="status">
                        <div className="status_header">
                            <DragHandleVerticalIcon className="bd_add" />
                            <img src={add} alt="" className="bd_add" height="14" width="10" />
                            <p>To-do-list</p>
                        </div>
                        <Epic1 />
                        <Epic2 />
                        <Epic3 />
                        <Epic4 />
                        <Epic1 />
                        <Epic2 />
                        <Epic3 />
                        <Epic4 />
                    </div>
                    <div className="status extra">
                        <div className="status_header">
                            <DragHandleVerticalIcon className="bd_add" />
                            <img src={add} alt="" className="bd_add" height="14" width="10" />
                            <p>Processing</p>
                        </div>
                        <Epic5 />
                        <Epic6 />
                        <Epic7 />
                        <Epic5 />
                        <Epic6 />
                        <Epic7 />
                    </div>
                    <div className="status extra">
                        <div className="status_header">
                            <DragHandleVerticalIcon className="bd_add" />
                            <img src={add} alt="" className="bd_add" height="14" width="10" />
                            <p>Done</p>
                        </div>
                        <Epic1 />
                        <Epic8 />
                        <Epic1 />
                        <Epic8 />
                    </div>
                    <div className="status">
                        <div className="status_header">
                            <DragHandleVerticalIcon className="bd_add" />
                            <img src={add} alt="" className="bd_add" height="14" width="10" />
                            <p>To-do-list</p>
                        </div>
                        <Epic1 />
                        <Epic2 />
                        <Epic3 />
                        <Epic4 />
                        <Epic1 />
                        <Epic2 />
                        <Epic3 />
                        <Epic4 />
                    </div>
                    <div className="status extra">
                        <div className="status_header">
                            <DragHandleVerticalIcon className="bd_add" />
                            <img src={add} alt="" className="bd_add" height="14" width="10" />
                            <p>Processing</p>
                        </div>
                        <Epic5 />
                        <Epic6 />
                        <Epic7 />
                        <Epic5 />
                        <Epic6 />
                        <Epic7 />
                    </div>
                    <div className="status extra">
                        <div className="status_header">
                            <DragHandleVerticalIcon className="bd_add" />
                            <img src={add} alt="" className="bd_add" height="14" width="10" />
                            <p>Done</p>
                        </div>
                        <Epic1 />
                        <Epic8 />
                        <Epic1 />
                        <Epic8 />
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

export default Table;
