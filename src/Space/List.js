import React from "react";
import "./List.css";
import Header from "./Header";
import Space from "./Space";
import arrow from "../assets/arrow.svg";

import arrow_down from "../assets/arrow_down.svg";
import userplus from "../assets/userplus.svg";
import arrow_right from "../assets/arrow_right.svg";
import done from "../assets/done.svg";
import listadd from "../assets/listadd.svg";
import details_arrow from "../assets/details_arrow.svg";
import compare from "../assets/compare.svg";
import add_ from "../assets/add_.svg";
import checkmark_circle from "../assets/checkmark_circle.svg";
import arrow_dropdown from "../assets/arrow_dropdown.svg";
import {
    Popover,
    Menu,
    Dialog,
    TextInputField,
    TextInput,
    SelectMenu,
    Position,
    Table,
    MoreIcon,
    Pane,
    DragHandleVerticalIcon,
} from "evergreen-ui";
import avatar from "../assets/avatar.jpg";
import avatar1 from "../assets/avatar1.jpeg";
import avatar2 from "../assets/avatar2.jpeg";

function List() {
    const [selected, setSelected] = React.useState(null);
    const [isShown, setIsShown] = React.useState(false);
    const [writeTask, setWriteTask] = React.useState(false);
    const [writeTask1, setWriteTask1] = React.useState(false);
    const [writeTask2, setWriteTask2] = React.useState(false);
    const [contentOpen, setContentOpen] = React.useState(true);
    const [editableField, setEditableField] = React.useState(false);
    const [editableField1, setEditableField1] = React.useState(false);
    const [editableField2, setEditableField2] = React.useState(false);
    const [contentOpen1, setContentOpen1] = React.useState(true);
    const [contentOpen2, setContentOpen2] = React.useState(true);

    const editable_body = {
        fontFamily: "GTEestiProDisplay-light",
        fontSize: "12px",
        color: "#444444",
    };
    const coll_drpdwn = {
        height: "35px",
        paddingBottom: "15px",
    };
    const editable = {
        // paddingLeft: "-20px",
    };
    const disabled = {
        marginTop: "-10px",
        marginLeft: "-18px",
        marginRight: "-10px",
    };
    const textinput = {
        height: "40px",
        border: "solid 0.1px #cecece",
        color: "#9a9a9a",
    };
    const invite = {
        height: "20px",
    };
    const table_padding = {
        padding: 0,
        paddingLeft: "10px",
    };
    const table_padding_ = {
        padding: "3px",
    };
    const menu = {
        height: "23px",
        marginLeft: "-18px",
    };
    function handleKeyDown(e) {
        if (e.key === "Enter") {
            setEditableField(false);
        }
    }
    function handleKeyDown1(e) {
        if (e.key === "Enter") {
            setEditableField1(false);
        }
    }
    function handleKeyDown2(e) {
        if (e.key === "Enter") {
            setEditableField2(false);
        }
    }
    return (
        <div>
            <Header />
            <Space />
            <div className="map">
                <h2>List</h2>
                <div className="map_head">
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
                        <div className="map_collaborators">
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
                </div>

                <Pane className="list" width={1052}>
                    <Table.Row height={28} className="border_">
                        <Table.Cell className="map_column list_head" style={table_padding} flexBasis={550}>
                            Task name
                            <img src={arrow_down} alt="" className="arrow_down" />
                        </Table.Cell>
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
                                            icon={
                                                <img src={avatar} alt="" className="bd_profiles" height="25" width="23" />
                                            }
                                        >
                                            <p>Abdu Rahiman</p>
                                        </Menu.Item>
                                        <Menu.Item
                                            style={coll_drpdwn}
                                            className="coll_drpdwn"
                                            icon={
                                                <img src={avatar1} alt="" className="bd_profiles" height="25" width="23" />
                                            }
                                        >
                                            <p>Abdu Rahiman</p>
                                        </Menu.Item>
                                        <Menu.Item
                                            style={coll_drpdwn}
                                            className="coll_drpdwn"
                                            icon={
                                                <img src={avatar} alt="" className="bd_profiles" height="25" width="23" />
                                            }
                                        >
                                            <p>Abdu Rahiman</p>
                                        </Menu.Item>
                                        <Menu.Item
                                            style={coll_drpdwn}
                                            className="coll_drpdwn"
                                            icon={
                                                <img src={avatar1} alt="" className="bd_profiles" height="25" width="23" />
                                            }
                                        >
                                            <p>Abdu Rahiman</p>
                                        </Menu.Item>
                                        <Menu.Item
                                            style={coll_drpdwn}
                                            className="coll_drpdwn"
                                            icon={
                                                <img src={avatar} alt="" className="bd_profiles" height="25" width="23" />
                                            }
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
                            <Table.Cell className="map_column list_head" style={table_padding}>
                                Assignee
                                <img src={arrow_down} alt="" className="arrow_down1" />
                            </Table.Cell>
                        </Popover>

                        <Table.Cell className="map_column list_head" style={table_padding}>
                            Due date
                            <img src={arrow_down} alt="" className="arrow_down1" />
                        </Table.Cell>
                        <Table.Cell className="map_column list_head" style={table_padding}>
                            Label
                            <img src={arrow_down} alt="" className="arrow_down2" />
                        </Table.Cell>
                        <Table.Cell className="list_head" style={table_padding}>
                            Status
                            <img src={arrow_down} alt="" className="arrow_down3" />
                        </Table.Cell>
                    </Table.Row>
                </Pane>
                <div className="todo_div">
                    <DragHandleVerticalIcon className="drag" />
                    <div>
                        <img
                            src={arrow_dropdown}
                            alt=""
                            className={contentOpen ? "visible arrow_right" : "hidden arrow_right"}
                            height="10"
                            width="10"
                            onClick={() => setContentOpen(false)}
                        />
                        <img
                            src={arrow_right}
                            className={contentOpen ? "hidden arrow_right" : "visible arrow_right"}
                            alt=""
                            height="10"
                            width="10"
                            onClick={() => setContentOpen(true)}
                        />

                        <p className="todo">To do</p>
                        <img src={listadd} alt="" height="11" width="11" onClick={() => setWriteTask(true)} />
                        <div className="td">
                            <Popover
                                minWidth={30}
                                position={Position.BOTTOM_LEFT}
                                content={
                                    <Menu>
                                        <Menu.Group>
                                            <Menu.Item style={menu}>
                                                <p className="menucontent_">Set column limit</p>
                                            </Menu.Item>
                                            <Menu.Item style={menu}>
                                                <p className="menucontent_">Delete</p>
                                            </Menu.Item>
                                        </Menu.Group>
                                    </Menu>
                                }
                            >
                                <MoreIcon className="list_more" />
                            </Popover>
                        </div>
                    </div>
                </div>

                {contentOpen && (
                    <Pane className="list">
                        {writeTask && (
                            <Table.Row height={28} className="border_">
                                <Table.Cell className="map_column editable_body" style={table_padding} flexBasis={550}>
                                    <img src={checkmark_circle} alt="" height="10" width="10" />
                                    <p onClick={() => setEditableField(true)}>Write a task name</p>

                                    {editableField && (
                                        <TextInput
                                            onKeyDown={handleKeyDown}
                                            style={editable_body}
                                            fontSize="13px"
                                            marginLeft="-125px"
                                            borderRadius="none"
                                            width="700px"
                                            height="26px"
                                            borderLeft="none"
                                            paddingLeft="40px"
                                            autoFocus
                                        />
                                    )}
                                </Table.Cell>
                                <Table.Cell className="map_column list_body" style={table_padding}></Table.Cell>
                                <Table.Cell className="map_column list_body" style={table_padding_}></Table.Cell>
                                <Table.Cell className="map_column list_body">
                                    <p className="low"></p>
                                </Table.Cell>
                                <Table.Cell className="list_body">
                                    <p></p>
                                </Table.Cell>
                            </Table.Row>
                        )}
                        <Table.Row height={28} className="border_">
                            <Table.Cell className="map_column list_body" style={table_padding} flexBasis={550}>
                                <img src={checkmark_circle} alt="" height="10" width="10" />
                                <p>Develop prototype</p>
                                <div>
                                    <Popover
                                        minWidth={30}
                                        position={Position.BOTTOM_LEFT}
                                        content={
                                            <Menu>
                                                <Menu.Group>
                                                    <Menu.Item className="disabled_" style={disabled} disabled>
                                                        <p>Move between selections</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                        style={menu}
                                                    >
                                                        <p className="menucontent_">To do</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Processing</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Done</p>
                                                    </Menu.Item>
                                                </Menu.Group>
                                            </Menu>
                                        }
                                    >
                                        <img src={compare} alt="" height="8" width="14" />
                                    </Popover>
                                    <span>Details</span>
                                    <img src={details_arrow} alt="" height="6" width="8" />
                                </div>
                            </Table.Cell>
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
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
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
                                <Table.Cell className="map_column list_body" style={table_padding}>
                                    <img src={avatar} alt="" height="16" width="14" className="assignee" />
                                    Ashly
                                </Table.Cell>
                            </Popover>
                            <Table.Cell className="map_column list_body" style={table_padding_}>
                                Today - sep 20
                            </Table.Cell>
                            <Table.Cell className="map_column list_body">
                                <p className="low">Low</p>
                            </Table.Cell>
                            <Table.Cell className="list_body">
                                <p className="track">On track</p>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row height={28}>
                            <Table.Cell className="map_column list_body" flexBasis={550} style={table_padding}>
                                <img src={checkmark_circle} alt="" height="10" width="10" />
                                <p>Collect assets and implement too</p>
                                <div>
                                    <Popover
                                        minWidth={30}
                                        position={Position.BOTTOM_LEFT}
                                        content={
                                            <Menu>
                                                <Menu.Group>
                                                    <Menu.Item className="disabled_" style={disabled} disabled>
                                                        <p>Move between selections</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                        style={menu}
                                                    >
                                                        <p className="menucontent_">To do</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Processing</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Done</p>
                                                    </Menu.Item>
                                                </Menu.Group>
                                            </Menu>
                                        }
                                    >
                                        <img src={compare} alt="" height="8" width="14" />
                                    </Popover>
                                    <span>Details</span>
                                    <img src={details_arrow} alt="" height="6" width="8" />
                                </div>
                            </Table.Cell>
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
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
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
                                <Table.Cell className="map_column list_body" style={table_padding}>
                                    <img src={avatar} alt="" height="16" width="14" className="assignee" />
                                    Ashly
                                </Table.Cell>
                            </Popover>
                            <Table.Cell className="map_column list_body" style={table_padding_}>
                                Today - sep 20
                            </Table.Cell>
                            <Table.Cell className="map_column list_body">
                                <p className="low">Low</p>
                            </Table.Cell>
                            <Table.Cell className=" list_body">
                                <p className="risk">At risk</p>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row height={28}>
                            <Table.Cell className="map_column list_body" flexBasis={550} style={table_padding}>
                                <img src={checkmark_circle} alt="" height="10" width="10" />
                                <p>Acquire customer feedback</p>
                                <div>
                                    <Popover
                                        minWidth={30}
                                        position={Position.BOTTOM_LEFT}
                                        content={
                                            <Menu>
                                                <Menu.Group>
                                                    <Menu.Item className="disabled_" style={disabled} disabled>
                                                        <p>Move between selections</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                        style={menu}
                                                    >
                                                        <p className="menucontent_">To do</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Processing</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Done</p>
                                                    </Menu.Item>
                                                </Menu.Group>
                                            </Menu>
                                        }
                                    >
                                        <img src={compare} alt="" height="8" width="14" />
                                    </Popover>
                                    <span>Details</span>
                                    <img src={details_arrow} alt="" height="6" width="8" />
                                </div>
                            </Table.Cell>
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
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
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
                                <Table.Cell className="map_column list_body" style={table_padding}>
                                    <img src={avatar} alt="" height="16" width="14" className="assignee" />
                                    Ashly
                                </Table.Cell>
                            </Popover>
                            <Table.Cell className="map_column list_body" style={table_padding_}>
                                Sep 20 - sep 25
                            </Table.Cell>
                            <Table.Cell className="map_column list_body">
                                <p className="medium">Medium</p>
                            </Table.Cell>
                            <Table.Cell className=" list_body">
                                <p className="medium">Medium</p>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row height={28}>
                            <Table.Cell className="map_column list_body" flexBasis={550} style={table_padding}>
                                <img src={checkmark_circle} alt="" height="10" width="10" />
                                <p>A/B test report submission </p>
                                <div>
                                    <Popover
                                        minWidth={30}
                                        position={Position.BOTTOM_LEFT}
                                        content={
                                            <Menu>
                                                <Menu.Group>
                                                    <Menu.Item className="disabled_" style={disabled} disabled>
                                                        <p>Move between selections</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                        style={menu}
                                                    >
                                                        <p className="menucontent_">To do</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Processing</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Done</p>
                                                    </Menu.Item>
                                                </Menu.Group>
                                            </Menu>
                                        }
                                    >
                                        <img src={compare} alt="" height="8" width="14" />
                                    </Popover>
                                    <span>Details</span>
                                    <img src={details_arrow} alt="" height="6" width="8" />
                                </div>
                            </Table.Cell>
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
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
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
                                <Table.Cell className="map_column list_body" style={table_padding}>
                                    <img src={avatar} alt="" height="16" width="14" className="assignee" />
                                    Ashly
                                </Table.Cell>
                            </Popover>
                            <Table.Cell className="map_column list_body" style={table_padding_}>
                                Sep 20 - sep 25
                            </Table.Cell>
                            <Table.Cell className="map_column list_body">
                                <p className="high">High</p>
                            </Table.Cell>
                            <Table.Cell className=" list_body">
                                <p className="normal">Normal</p>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row height={28}>
                            <Table.Cell className="map_column list_body" flexBasis={550} style={table_padding}>
                                <img src={checkmark_circle} alt="" height="10" width="10" />
                                <p>Server implementation - technology paper brief </p>
                                <div>
                                    <Popover
                                        minWidth={30}
                                        position={Position.BOTTOM_LEFT}
                                        content={
                                            <Menu>
                                                <Menu.Group>
                                                    <Menu.Item className="disabled_" style={disabled} disabled>
                                                        <p>Move between selections</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                        style={menu}
                                                    >
                                                        <p className="menucontent_">To do</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Processing</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Done</p>
                                                    </Menu.Item>
                                                </Menu.Group>
                                            </Menu>
                                        }
                                    >
                                        <img src={compare} alt="" height="8" width="14" />
                                    </Popover>
                                    <span>Details</span>
                                    <img src={details_arrow} alt="" height="6" width="8" />
                                </div>
                            </Table.Cell>
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
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
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
                                <Table.Cell className="map_column list_body" style={table_padding}>
                                    <img src={avatar} alt="" height="16" width="14" className="assignee" />
                                    Ashly
                                </Table.Cell>
                            </Popover>
                            <Table.Cell className="map_column list_body" style={table_padding_}>
                                Sep 20 - sep 25
                            </Table.Cell>
                            <Table.Cell className="map_column list_body">
                                <p className="high">High</p>
                            </Table.Cell>
                            <Table.Cell className="list_body">
                                <p className="high_">High</p>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row height={28}>
                            <Table.Cell className="map_column list_body" flexBasis={550} style={table_padding}>
                                <img src={checkmark_circle} alt="" height="10" width="10" />
                                <p>Firebase</p>
                                <div>
                                    <Popover
                                        minWidth={30}
                                        position={Position.BOTTOM_LEFT}
                                        content={
                                            <Menu>
                                                <Menu.Group>
                                                    <Menu.Item className="disabled_" style={disabled} disabled>
                                                        <p>Move between selections</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                        style={menu}
                                                    >
                                                        <p className="menucontent_">To do</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Processing</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Done</p>
                                                    </Menu.Item>
                                                </Menu.Group>
                                            </Menu>
                                        }
                                    >
                                        <img src={compare} alt="" height="8" width="14" />
                                    </Popover>
                                    <span>Details</span>
                                    <img src={details_arrow} alt="" height="6" width="8" />
                                </div>
                            </Table.Cell>
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
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
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
                                <Table.Cell className="map_column list_body" style={table_padding}>
                                    <img src={avatar} alt="" height="16" width="14" className="assignee" />
                                    Ashly
                                </Table.Cell>
                            </Popover>
                            <Table.Cell className="map_column list_body" style={table_padding_}>
                                Sep 20 - sep 25
                            </Table.Cell>
                            <Table.Cell className="map_column list_body">
                                <p className="medium">Medium</p>
                            </Table.Cell>
                            <Table.Cell className="list_body"></Table.Cell>
                        </Table.Row>
                        <Table.Row height={28}>
                            <Table.Cell className="map_column list_body" flexBasis={550} style={table_padding}>
                                <img src={checkmark_circle} alt="" height="10" width="10" />
                                <p>Product board data export file </p>
                                <div>
                                    <Popover
                                        minWidth={30}
                                        position={Position.BOTTOM_LEFT}
                                        content={
                                            <Menu>
                                                <Menu.Group>
                                                    <Menu.Item className="disabled_" style={disabled} disabled>
                                                        <p>Move between selections</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                        style={menu}
                                                    >
                                                        <p className="menucontent_">To do</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Processing</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Done</p>
                                                    </Menu.Item>
                                                </Menu.Group>
                                            </Menu>
                                        }
                                    >
                                        <img src={compare} alt="" height="8" width="14" />
                                    </Popover>
                                    <span>Details</span>
                                    <img src={details_arrow} alt="" height="6" width="8" />
                                </div>
                            </Table.Cell>
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
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
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
                                <Table.Cell className="map_column list_body" style={table_padding}>
                                    <img src={avatar} alt="" height="16" width="14" className="assignee" />
                                    Ashly
                                </Table.Cell>
                            </Popover>
                            <Table.Cell className="map_column list_body" style={table_padding_}>
                                Sep 20 - sep 25
                            </Table.Cell>
                            <Table.Cell className="map_column list_body">
                                <p className="medium">Medium</p>
                            </Table.Cell>
                            <Table.Cell className="list_body"></Table.Cell>
                        </Table.Row>
                        <Table.Row height={28}>
                            <Table.Cell className="map_column list_body" flexBasis={550} style={table_padding}>
                                <img src={checkmark_circle} alt="" height="10" width="10" />
                                <p>Payment remainder </p>
                                <div>
                                    <Popover
                                        minWidth={30}
                                        position={Position.BOTTOM_LEFT}
                                        content={
                                            <Menu>
                                                <Menu.Group>
                                                    <Menu.Item className="disabled_" style={disabled} disabled>
                                                        <p>Move between selections</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                        style={menu}
                                                    >
                                                        <p className="menucontent_">To do</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Processing</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Done</p>
                                                    </Menu.Item>
                                                </Menu.Group>
                                            </Menu>
                                        }
                                    >
                                        <img src={compare} alt="" height="8" width="14" />
                                    </Popover>
                                    <span>Details</span>
                                    <img src={details_arrow} alt="" height="6" width="8" />
                                </div>
                            </Table.Cell>
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
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
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
                                <Table.Cell className="map_column list_body" style={table_padding}>
                                    <img src={avatar} alt="" height="16" width="14" className="assignee" />
                                    Ashly
                                </Table.Cell>
                            </Popover>
                            <Table.Cell className="map_column list_body" style={table_padding_}>
                                Sep 20 - sep 25
                            </Table.Cell>
                            <Table.Cell className="map_column list_body">
                                <p className="high">High</p>
                            </Table.Cell>
                            <Table.Cell className="list_body"></Table.Cell>
                        </Table.Row>
                        <Table.Row height={28}>
                            <Table.Cell className="map_column list_body" flexBasis={550} style={table_padding}>
                                <img src={checkmark_circle} alt="" height="10" width="10" />
                                <p>User data packet </p>
                                <div>
                                    <Popover
                                        minWidth={30}
                                        position={Position.BOTTOM_LEFT}
                                        content={
                                            <Menu>
                                                <Menu.Group>
                                                    <Menu.Item className="disabled_" style={disabled} disabled>
                                                        <p>Move between selections</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                        style={menu}
                                                    >
                                                        <p className="menucontent_">To do</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Processing</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Done</p>
                                                    </Menu.Item>
                                                </Menu.Group>
                                            </Menu>
                                        }
                                    >
                                        <img src={compare} alt="" height="8" width="14" />
                                    </Popover>
                                    <span>Details</span>
                                    <img src={details_arrow} alt="" height="6" width="8" />
                                </div>
                            </Table.Cell>
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
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
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
                                <Table.Cell className="map_column list_body" style={table_padding}>
                                    <img src={avatar} alt="" height="16" width="14" className="assignee" />
                                    Ashly
                                </Table.Cell>
                            </Popover>
                            <Table.Cell className="map_column list_body" style={table_padding_}>
                                Sep 20 - sep 25
                            </Table.Cell>
                            <Table.Cell className="map_column list_body">
                                <p className="low">Low</p>
                            </Table.Cell>
                            <Table.Cell className=" list_body"></Table.Cell>
                        </Table.Row>
                    </Pane>
                )}

                <div className="todo_div">
                    <DragHandleVerticalIcon className="drag" />
                    <div>
                        <img
                            src={arrow_dropdown}
                            alt=""
                            className={contentOpen1 ? "visible arrow_right" : "hidden arrow_right"}
                            height="10"
                            width="10"
                            onClick={() => setContentOpen1(false)}
                        />
                        <img
                            src={arrow_right}
                            className={contentOpen1 ? "hidden arrow_right" : "visible arrow_right"}
                            alt=""
                            height="10"
                            width="10"
                            onClick={() => setContentOpen1(true)}
                        />

                        <p className="todo">Processing</p>
                        <img src={listadd} alt="" height="11" width="11" onClick={() => setWriteTask1(true)} />
                        <div className="pro">
                            <Popover
                                minWidth={30}
                                position={Position.BOTTOM_LEFT}
                                content={
                                    <Menu>
                                        <Menu.Group>
                                            <Menu.Item style={menu}>
                                                <p className="menucontent_">Set column limit</p>
                                            </Menu.Item>
                                            <Menu.Item style={menu}>
                                                <p className="menucontent_">Delete</p>
                                            </Menu.Item>
                                        </Menu.Group>
                                    </Menu>
                                }
                            >
                                <MoreIcon className="list_more" />
                            </Popover>
                        </div>
                    </div>
                </div>

                {contentOpen1 && (
                    <Pane className="list">
                        {writeTask1 && (
                            <Table.Row height={28} className="border_">
                                <Table.Cell className="map_column editable_body" style={table_padding} flexBasis={550}>
                                    <img src={checkmark_circle} alt="" height="10" width="10" />
                                    <p onClick={() => setEditableField1(true)}>Write a task name</p>

                                    {editableField1 && (
                                        <TextInput
                                            onKeyDown={handleKeyDown1}
                                            style={editable_body}
                                            fontSize="13px"
                                            marginLeft="-125px"
                                            borderRadius="none"
                                            width="700px"
                                            height="26px"
                                            borderLeft="none"
                                            paddingLeft="40px"
                                            autoFocus
                                        />
                                    )}
                                </Table.Cell>
                                <Table.Cell className="map_column list_body" style={table_padding}></Table.Cell>
                                <Table.Cell className="map_column list_body" style={table_padding_}></Table.Cell>
                                <Table.Cell className="map_column list_body">
                                    <p className="low"></p>
                                </Table.Cell>
                                <Table.Cell className="list_body">
                                    <p></p>
                                </Table.Cell>
                            </Table.Row>
                        )}
                        <Table.Row height={28} className="border_">
                            <Table.Cell className="map_column list_body" style={table_padding} flexBasis={550}>
                                <img src={checkmark_circle} alt="" height="10" width="10" />
                                <p>Develop prototype</p>
                                <div>
                                    <Popover
                                        minWidth={30}
                                        position={Position.BOTTOM_LEFT}
                                        content={
                                            <Menu>
                                                <Menu.Group>
                                                    <Menu.Item className="disabled_" style={disabled} disabled>
                                                        <p>Move between selections</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                        style={menu}
                                                    >
                                                        <p className="menucontent_">To do</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Processing</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Done</p>
                                                    </Menu.Item>
                                                </Menu.Group>
                                            </Menu>
                                        }
                                    >
                                        <img src={compare} alt="" height="8" width="14" />
                                    </Popover>
                                    <span>Details</span>
                                    <img src={details_arrow} alt="" height="6" width="8" />
                                </div>
                            </Table.Cell>
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
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
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
                                <Table.Cell className="map_column list_body" style={table_padding}>
                                    <img src={avatar} alt="" height="16" width="14" className="assignee" />
                                    Ashly
                                </Table.Cell>
                            </Popover>
                            <Table.Cell className="map_column list_body" style={table_padding_}>
                                Today - sep 20
                            </Table.Cell>
                            <Table.Cell className="map_column list_body">
                                <p className="low">Low</p>
                            </Table.Cell>
                            <Table.Cell className="list_body">
                                <p className="track">On track</p>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row height={28}>
                            <Table.Cell className="map_column list_body" flexBasis={550} style={table_padding}>
                                <img src={checkmark_circle} alt="" height="10" width="10" />
                                <p>Collect assets and implement too</p>
                                <div>
                                    <Popover
                                        minWidth={30}
                                        position={Position.BOTTOM_LEFT}
                                        content={
                                            <Menu>
                                                <Menu.Group>
                                                    <Menu.Item className="disabled_" style={disabled} disabled>
                                                        <p>Move between selections</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                        style={menu}
                                                    >
                                                        <p className="menucontent_">To do</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Processing</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Done</p>
                                                    </Menu.Item>
                                                </Menu.Group>
                                            </Menu>
                                        }
                                    >
                                        <img src={compare} alt="" height="8" width="14" />
                                    </Popover>
                                    <span>Details</span>
                                    <img src={details_arrow} alt="" height="6" width="8" />
                                </div>
                            </Table.Cell>
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
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
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
                                <Table.Cell className="map_column list_body" style={table_padding}>
                                    <img src={avatar} alt="" height="16" width="14" className="assignee" />
                                    Ashly
                                </Table.Cell>
                            </Popover>
                            <Table.Cell className="map_column list_body" style={table_padding_}>
                                Today - sep 20
                            </Table.Cell>
                            <Table.Cell className="map_column list_body">
                                <p className="low">Low</p>
                            </Table.Cell>
                            <Table.Cell className=" list_body">
                                <p className="risk">At risk</p>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row height={28}>
                            <Table.Cell className="map_column list_body" flexBasis={550} style={table_padding}>
                                <img src={checkmark_circle} alt="" height="10" width="10" />
                                <p>Acquire customer feedback</p>
                                <div>
                                    <Popover
                                        minWidth={30}
                                        position={Position.BOTTOM_LEFT}
                                        content={
                                            <Menu>
                                                <Menu.Group>
                                                    <Menu.Item className="disabled_" style={disabled} disabled>
                                                        <p>Move between selections</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                        style={menu}
                                                    >
                                                        <p className="menucontent_">To do</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Processing</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Done</p>
                                                    </Menu.Item>
                                                </Menu.Group>
                                            </Menu>
                                        }
                                    >
                                        <img src={compare} alt="" height="8" width="14" />
                                    </Popover>
                                    <span>Details</span>
                                    <img src={details_arrow} alt="" height="6" width="8" />
                                </div>
                            </Table.Cell>
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
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
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
                                <Table.Cell className="map_column list_body" style={table_padding}>
                                    <img src={avatar} alt="" height="16" width="14" className="assignee" />
                                    Ashly
                                </Table.Cell>
                            </Popover>
                            <Table.Cell className="map_column list_body" style={table_padding_}>
                                Sep 20 - sep 25
                            </Table.Cell>
                            <Table.Cell className="map_column list_body">
                                <p className="medium">Medium</p>
                            </Table.Cell>
                            <Table.Cell className=" list_body">
                                <p className="medium">Medium</p>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row height={28}>
                            <Table.Cell className="map_column list_body" flexBasis={550} style={table_padding}>
                                <img src={checkmark_circle} alt="" height="10" width="10" />
                                <p>A/B test report submission </p>
                                <div>
                                    <Popover
                                        minWidth={30}
                                        position={Position.BOTTOM_LEFT}
                                        content={
                                            <Menu>
                                                <Menu.Group>
                                                    <Menu.Item className="disabled_" style={disabled} disabled>
                                                        <p>Move between selections</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                        style={menu}
                                                    >
                                                        <p className="menucontent_">To do</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Processing</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Done</p>
                                                    </Menu.Item>
                                                </Menu.Group>
                                            </Menu>
                                        }
                                    >
                                        <img src={compare} alt="" height="8" width="14" />
                                    </Popover>
                                    <span>Details</span>
                                    <img src={details_arrow} alt="" height="6" width="8" />
                                </div>
                            </Table.Cell>
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
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
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
                                <Table.Cell className="map_column list_body" style={table_padding}>
                                    <img src={avatar} alt="" height="16" width="14" className="assignee" />
                                    Ashly
                                </Table.Cell>
                            </Popover>
                            <Table.Cell className="map_column list_body" style={table_padding_}>
                                Sep 20 - sep 25
                            </Table.Cell>
                            <Table.Cell className="map_column list_body">
                                <p className="high">High</p>
                            </Table.Cell>
                            <Table.Cell className=" list_body">
                                <p className="normal">Normal</p>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row height={28}>
                            <Table.Cell className="map_column list_body" flexBasis={550} style={table_padding}>
                                <img src={checkmark_circle} alt="" height="10" width="10" />
                                <p>Server implementation - technology paper brief </p>
                                <div>
                                    <Popover
                                        minWidth={30}
                                        position={Position.BOTTOM_LEFT}
                                        content={
                                            <Menu>
                                                <Menu.Group>
                                                    <Menu.Item className="disabled_" style={disabled} disabled>
                                                        <p>Move between selections</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                        style={menu}
                                                    >
                                                        <p className="menucontent_">To do</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Processing</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Done</p>
                                                    </Menu.Item>
                                                </Menu.Group>
                                            </Menu>
                                        }
                                    >
                                        <img src={compare} alt="" height="8" width="14" />
                                    </Popover>
                                    <span>Details</span>
                                    <img src={details_arrow} alt="" height="6" width="8" />
                                </div>
                            </Table.Cell>
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
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
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
                                <Table.Cell className="map_column list_body" style={table_padding}>
                                    <img src={avatar} alt="" height="16" width="14" className="assignee" />
                                    Ashly
                                </Table.Cell>
                            </Popover>
                            <Table.Cell className="map_column list_body" style={table_padding_}>
                                Sep 20 - sep 25
                            </Table.Cell>
                            <Table.Cell className="map_column list_body">
                                <p className="high">High</p>
                            </Table.Cell>
                            <Table.Cell className="list_body">
                                <p className="high_">High</p>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row height={28}>
                            <Table.Cell className="map_column list_body" flexBasis={550} style={table_padding}>
                                <img src={checkmark_circle} alt="" height="10" width="10" />
                                <p>Firebase</p>
                                <div>
                                    <Popover
                                        minWidth={30}
                                        position={Position.BOTTOM_LEFT}
                                        content={
                                            <Menu>
                                                <Menu.Group>
                                                    <Menu.Item className="disabled_" style={disabled} disabled>
                                                        <p>Move between selections</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                        style={menu}
                                                    >
                                                        <p className="menucontent_">To do</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Processing</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Done</p>
                                                    </Menu.Item>
                                                </Menu.Group>
                                            </Menu>
                                        }
                                    >
                                        <img src={compare} alt="" height="8" width="14" />
                                    </Popover>
                                    <span>Details</span>
                                    <img src={details_arrow} alt="" height="6" width="8" />
                                </div>
                            </Table.Cell>
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
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
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
                                <Table.Cell className="map_column list_body" style={table_padding}>
                                    <img src={avatar} alt="" height="16" width="14" className="assignee" />
                                    Ashly
                                </Table.Cell>
                            </Popover>
                            <Table.Cell className="map_column list_body" style={table_padding_}>
                                Sep 20 - sep 25
                            </Table.Cell>
                            <Table.Cell className="map_column list_body">
                                <p className="medium">Medium</p>
                            </Table.Cell>
                            <Table.Cell className="list_body"></Table.Cell>
                        </Table.Row>
                        <Table.Row height={28}>
                            <Table.Cell className="map_column list_body" flexBasis={550} style={table_padding}>
                                <img src={checkmark_circle} alt="" height="10" width="10" />
                                <p>Product board data export file </p>
                                <div>
                                    <Popover
                                        minWidth={30}
                                        position={Position.BOTTOM_LEFT}
                                        content={
                                            <Menu>
                                                <Menu.Group>
                                                    <Menu.Item className="disabled_" style={disabled} disabled>
                                                        <p>Move between selections</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                        style={menu}
                                                    >
                                                        <p className="menucontent_">To do</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Processing</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Done</p>
                                                    </Menu.Item>
                                                </Menu.Group>
                                            </Menu>
                                        }
                                    >
                                        <img src={compare} alt="" height="8" width="14" />
                                    </Popover>
                                    <span>Details</span>
                                    <img src={details_arrow} alt="" height="6" width="8" />
                                </div>
                            </Table.Cell>
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
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
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
                                <Table.Cell className="map_column list_body" style={table_padding}>
                                    <img src={avatar} alt="" height="16" width="14" className="assignee" />
                                    Ashly
                                </Table.Cell>
                            </Popover>
                            <Table.Cell className="map_column list_body" style={table_padding_}>
                                Sep 20 - sep 25
                            </Table.Cell>
                            <Table.Cell className="map_column list_body">
                                <p className="medium">Medium</p>
                            </Table.Cell>
                            <Table.Cell className="list_body"></Table.Cell>
                        </Table.Row>
                        <Table.Row height={28}>
                            <Table.Cell className="map_column list_body" flexBasis={550} style={table_padding}>
                                <img src={checkmark_circle} alt="" height="10" width="10" />
                                <p>Payment remainder </p>
                                <div>
                                    <Popover
                                        minWidth={30}
                                        position={Position.BOTTOM_LEFT}
                                        content={
                                            <Menu>
                                                <Menu.Group>
                                                    <Menu.Item className="disabled_" style={disabled} disabled>
                                                        <p>Move between selections</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                        style={menu}
                                                    >
                                                        <p className="menucontent_">To do</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Processing</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Done</p>
                                                    </Menu.Item>
                                                </Menu.Group>
                                            </Menu>
                                        }
                                    >
                                        <img src={compare} alt="" height="8" width="14" />
                                    </Popover>
                                    <span>Details</span>
                                    <img src={details_arrow} alt="" height="6" width="8" />
                                </div>
                            </Table.Cell>
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
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
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
                                <Table.Cell className="map_column list_body" style={table_padding}>
                                    <img src={avatar} alt="" height="16" width="14" className="assignee" />
                                    Ashly
                                </Table.Cell>
                            </Popover>
                            <Table.Cell className="map_column list_body" style={table_padding_}>
                                Sep 20 - sep 25
                            </Table.Cell>
                            <Table.Cell className="map_column list_body">
                                <p className="high">High</p>
                            </Table.Cell>
                            <Table.Cell className="list_body"></Table.Cell>
                        </Table.Row>
                        <Table.Row height={28}>
                            <Table.Cell className="map_column list_body" flexBasis={550} style={table_padding}>
                                <img src={checkmark_circle} alt="" height="10" width="10" />
                                <p>User data packet </p>
                                <div>
                                    <Popover
                                        minWidth={30}
                                        position={Position.BOTTOM_LEFT}
                                        content={
                                            <Menu>
                                                <Menu.Group>
                                                    <Menu.Item className="disabled_" style={disabled} disabled>
                                                        <p>Move between selections</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                        style={menu}
                                                    >
                                                        <p className="menucontent_">To do</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Processing</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Done</p>
                                                    </Menu.Item>
                                                </Menu.Group>
                                            </Menu>
                                        }
                                    >
                                        <img src={compare} alt="" height="8" width="14" />
                                    </Popover>
                                    <span>Details</span>
                                    <img src={details_arrow} alt="" height="6" width="8" />
                                </div>
                            </Table.Cell>
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
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
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
                                <Table.Cell className="map_column list_body" style={table_padding}>
                                    <img src={avatar} alt="" height="16" width="14" className="assignee" />
                                    Ashly
                                </Table.Cell>
                            </Popover>
                            <Table.Cell className="map_column list_body" style={table_padding_}>
                                Sep 20 - sep 25
                            </Table.Cell>
                            <Table.Cell className="map_column list_body">
                                <p className="low">Low</p>
                            </Table.Cell>
                            <Table.Cell className=" list_body"></Table.Cell>
                        </Table.Row>
                    </Pane>
                )}
                <div className="todo_div">
                    <DragHandleVerticalIcon className="drag" />
                    <div>
                        <img
                            src={arrow_dropdown}
                            alt=""
                            className={contentOpen2 ? "visible arrow_right" : "hidden arrow_right"}
                            height="10"
                            width="10"
                            onClick={() => setContentOpen2(false)}
                        />
                        <img
                            src={arrow_right}
                            className={contentOpen2 ? "hidden arrow_right" : "visible arrow_right"}
                            alt=""
                            height="10"
                            width="10"
                            onClick={() => setContentOpen2(true)}
                        />

                        <p className="todo">Done</p>
                        <img src={listadd} alt="" height="11" width="11" onClick={() => setWriteTask2(true)} />
                        <div className="done">
                            <Popover
                                minWidth={30}
                                position={Position.BOTTOM_LEFT}
                                content={
                                    <Menu>
                                        <Menu.Group>
                                            <Menu.Item style={menu}>
                                                <p className="menucontent_">Set column limit</p>
                                            </Menu.Item>
                                            <Menu.Item style={menu}>
                                                <p className="menucontent_">Delete</p>
                                            </Menu.Item>
                                        </Menu.Group>
                                    </Menu>
                                }
                            >
                                <MoreIcon className="list_more" />
                            </Popover>
                        </div>
                    </div>
                </div>
                {contentOpen2 && (
                    <Pane className="list">
                        {writeTask2 && (
                            <Table.Row height={28} className="border_">
                                <Table.Cell className="map_column editable_body" style={table_padding} flexBasis={550}>
                                    <img src={checkmark_circle} alt="" height="10" width="10" />
                                    <p onClick={() => setEditableField2(true)}>Write a task name</p>

                                    {editableField2 && (
                                        <TextInput
                                            onKeyDown={handleKeyDown2}
                                            style={editable_body}
                                            fontSize="13px"
                                            marginLeft="-125px"
                                            borderRadius="none"
                                            width="700px"
                                            height="26px"
                                            borderLeft="none"
                                            paddingLeft="40px"
                                            autoFocus
                                        />
                                    )}
                                </Table.Cell>
                                <Table.Cell className="map_column list_body" style={table_padding}></Table.Cell>
                                <Table.Cell className="map_column list_body" style={table_padding_}></Table.Cell>
                                <Table.Cell className="map_column list_body">
                                    <p className="low"></p>
                                </Table.Cell>
                                <Table.Cell className="list_body">
                                    <p></p>
                                </Table.Cell>
                            </Table.Row>
                        )}
                        <Table.Row height={28} className="border_">
                            <Table.Cell className="map_column list_body" style={table_padding} flexBasis={550}>
                                <img src={checkmark_circle} alt="" height="10" width="10" />
                                <p>Develop prototype</p>
                                <div>
                                    <Popover
                                        minWidth={30}
                                        position={Position.BOTTOM_LEFT}
                                        content={
                                            <Menu>
                                                <Menu.Group>
                                                    <Menu.Item className="disabled_" style={disabled} disabled>
                                                        <p>Move between selections</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                        style={menu}
                                                    >
                                                        <p className="menucontent_">To do</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Processing</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Done</p>
                                                    </Menu.Item>
                                                </Menu.Group>
                                            </Menu>
                                        }
                                    >
                                        <img src={compare} alt="" height="8" width="14" />
                                    </Popover>
                                    <span>Details</span>
                                    <img src={details_arrow} alt="" height="6" width="8" />
                                </div>
                            </Table.Cell>
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
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
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
                                <Table.Cell className="map_column list_body" style={table_padding}>
                                    <img src={avatar} alt="" height="16" width="14" className="assignee" />
                                    Ashly
                                </Table.Cell>
                            </Popover>
                            <Table.Cell className="map_column list_body" style={table_padding_}>
                                Today - sep 20
                            </Table.Cell>
                            <Table.Cell className="map_column list_body">
                                <p className="low">Low</p>
                            </Table.Cell>
                            <Table.Cell className="list_body">
                                <p className="track">On track</p>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row height={28}>
                            <Table.Cell className="map_column list_body" flexBasis={550} style={table_padding}>
                                <img src={checkmark_circle} alt="" height="10" width="10" />
                                <p>Collect assets and implement too</p>
                                <div>
                                    <Popover
                                        minWidth={30}
                                        position={Position.BOTTOM_LEFT}
                                        content={
                                            <Menu>
                                                <Menu.Group>
                                                    <Menu.Item className="disabled_" style={disabled} disabled>
                                                        <p>Move between selections</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                        style={menu}
                                                    >
                                                        <p className="menucontent_">To do</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Processing</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Done</p>
                                                    </Menu.Item>
                                                </Menu.Group>
                                            </Menu>
                                        }
                                    >
                                        <img src={compare} alt="" height="8" width="14" />
                                    </Popover>
                                    <span>Details</span>
                                    <img src={details_arrow} alt="" height="6" width="8" />
                                </div>
                            </Table.Cell>
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
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
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
                                <Table.Cell className="map_column list_body" style={table_padding}>
                                    <img src={avatar} alt="" height="16" width="14" className="assignee" />
                                    Ashly
                                </Table.Cell>
                            </Popover>
                            <Table.Cell className="map_column list_body" style={table_padding_}>
                                Today - sep 20
                            </Table.Cell>
                            <Table.Cell className="map_column list_body">
                                <p className="low">Low</p>
                            </Table.Cell>
                            <Table.Cell className=" list_body">
                                <p className="risk">At risk</p>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row height={28}>
                            <Table.Cell className="map_column list_body" flexBasis={550} style={table_padding}>
                                <img src={checkmark_circle} alt="" height="10" width="10" />
                                <p>Acquire customer feedback</p>
                                <div>
                                    <Popover
                                        minWidth={30}
                                        position={Position.BOTTOM_LEFT}
                                        content={
                                            <Menu>
                                                <Menu.Group>
                                                    <Menu.Item className="disabled_" style={disabled} disabled>
                                                        <p>Move between selections</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                        style={menu}
                                                    >
                                                        <p className="menucontent_">To do</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Processing</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Done</p>
                                                    </Menu.Item>
                                                </Menu.Group>
                                            </Menu>
                                        }
                                    >
                                        <img src={compare} alt="" height="8" width="14" />
                                    </Popover>
                                    <span>Details</span>
                                    <img src={details_arrow} alt="" height="6" width="8" />
                                </div>
                            </Table.Cell>
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
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
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
                                <Table.Cell className="map_column list_body" style={table_padding}>
                                    <img src={avatar} alt="" height="16" width="14" className="assignee" />
                                    Ashly
                                </Table.Cell>
                            </Popover>
                            <Table.Cell className="map_column list_body" style={table_padding_}>
                                Sep 20 - sep 25
                            </Table.Cell>
                            <Table.Cell className="map_column list_body">
                                <p className="medium">Medium</p>
                            </Table.Cell>
                            <Table.Cell className=" list_body">
                                <p className="medium">Medium</p>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row height={28}>
                            <Table.Cell className="map_column list_body" flexBasis={550} style={table_padding}>
                                <img src={checkmark_circle} alt="" height="10" width="10" />
                                <p>A/B test report submission </p>
                                <div>
                                    <Popover
                                        minWidth={30}
                                        position={Position.BOTTOM_LEFT}
                                        content={
                                            <Menu>
                                                <Menu.Group>
                                                    <Menu.Item className="disabled_" style={disabled} disabled>
                                                        <p>Move between selections</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                        style={menu}
                                                    >
                                                        <p className="menucontent_">To do</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Processing</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Done</p>
                                                    </Menu.Item>
                                                </Menu.Group>
                                            </Menu>
                                        }
                                    >
                                        <img src={compare} alt="" height="8" width="14" />
                                    </Popover>
                                    <span>Details</span>
                                    <img src={details_arrow} alt="" height="6" width="8" />
                                </div>
                            </Table.Cell>
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
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
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
                                <Table.Cell className="map_column list_body" style={table_padding}>
                                    <img src={avatar} alt="" height="16" width="14" className="assignee" />
                                    Ashly
                                </Table.Cell>
                            </Popover>
                            <Table.Cell className="map_column list_body" style={table_padding_}>
                                Sep 20 - sep 25
                            </Table.Cell>
                            <Table.Cell className="map_column list_body">
                                <p className="high">High</p>
                            </Table.Cell>
                            <Table.Cell className=" list_body">
                                <p className="normal">Normal</p>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row height={28}>
                            <Table.Cell className="map_column list_body" flexBasis={550} style={table_padding}>
                                <img src={checkmark_circle} alt="" height="10" width="10" />
                                <p>Server implementation - technology paper brief </p>
                                <div>
                                    <Popover
                                        minWidth={30}
                                        position={Position.BOTTOM_LEFT}
                                        content={
                                            <Menu>
                                                <Menu.Group>
                                                    <Menu.Item className="disabled_" style={disabled} disabled>
                                                        <p>Move between selections</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                        style={menu}
                                                    >
                                                        <p className="menucontent_">To do</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Processing</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Done</p>
                                                    </Menu.Item>
                                                </Menu.Group>
                                            </Menu>
                                        }
                                    >
                                        <img src={compare} alt="" height="8" width="14" />
                                    </Popover>
                                    <span>Details</span>
                                    <img src={details_arrow} alt="" height="6" width="8" />
                                </div>
                            </Table.Cell>
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
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
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
                                <Table.Cell className="map_column list_body" style={table_padding}>
                                    <img src={avatar} alt="" height="16" width="14" className="assignee" />
                                    Ashly
                                </Table.Cell>
                            </Popover>
                            <Table.Cell className="map_column list_body" style={table_padding_}>
                                Sep 20 - sep 25
                            </Table.Cell>
                            <Table.Cell className="map_column list_body">
                                <p className="high">High</p>
                            </Table.Cell>
                            <Table.Cell className="list_body">
                                <p className="high_">High</p>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row height={28}>
                            <Table.Cell className="map_column list_body" flexBasis={550} style={table_padding}>
                                <img src={checkmark_circle} alt="" height="10" width="10" />
                                <p>Firebase</p>
                                <div>
                                    <Popover
                                        minWidth={30}
                                        position={Position.BOTTOM_LEFT}
                                        content={
                                            <Menu>
                                                <Menu.Group>
                                                    <Menu.Item className="disabled_" style={disabled} disabled>
                                                        <p>Move between selections</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                        style={menu}
                                                    >
                                                        <p className="menucontent_">To do</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Processing</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Done</p>
                                                    </Menu.Item>
                                                </Menu.Group>
                                            </Menu>
                                        }
                                    >
                                        <img src={compare} alt="" height="8" width="14" />
                                    </Popover>
                                    <span>Details</span>
                                    <img src={details_arrow} alt="" height="6" width="8" />
                                </div>
                            </Table.Cell>
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
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
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
                                <Table.Cell className="map_column list_body" style={table_padding}>
                                    <img src={avatar} alt="" height="16" width="14" className="assignee" />
                                    Ashly
                                </Table.Cell>
                            </Popover>
                            <Table.Cell className="map_column list_body" style={table_padding_}>
                                Sep 20 - sep 25
                            </Table.Cell>
                            <Table.Cell className="map_column list_body">
                                <p className="medium">Medium</p>
                            </Table.Cell>
                            <Table.Cell className="list_body"></Table.Cell>
                        </Table.Row>
                        <Table.Row height={28}>
                            <Table.Cell className="map_column list_body" flexBasis={550} style={table_padding}>
                                <img src={checkmark_circle} alt="" height="10" width="10" />
                                <p>Product board data export file </p>
                                <div>
                                    <Popover
                                        minWidth={30}
                                        position={Position.BOTTOM_LEFT}
                                        content={
                                            <Menu>
                                                <Menu.Group>
                                                    <Menu.Item className="disabled_" style={disabled} disabled>
                                                        <p>Move between selections</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                        style={menu}
                                                    >
                                                        <p className="menucontent_">To do</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Processing</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Done</p>
                                                    </Menu.Item>
                                                </Menu.Group>
                                            </Menu>
                                        }
                                    >
                                        <img src={compare} alt="" height="8" width="14" />
                                    </Popover>
                                    <span>Details</span>
                                    <img src={details_arrow} alt="" height="6" width="8" />
                                </div>
                            </Table.Cell>
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
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
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
                                <Table.Cell className="map_column list_body" style={table_padding}>
                                    <img src={avatar} alt="" height="16" width="14" className="assignee" />
                                    Ashly
                                </Table.Cell>
                            </Popover>
                            <Table.Cell className="map_column list_body" style={table_padding_}>
                                Sep 20 - sep 25
                            </Table.Cell>
                            <Table.Cell className="map_column list_body">
                                <p className="medium">Medium</p>
                            </Table.Cell>
                            <Table.Cell className="list_body"></Table.Cell>
                        </Table.Row>
                        <Table.Row height={28}>
                            <Table.Cell className="map_column list_body" flexBasis={550} style={table_padding}>
                                <img src={checkmark_circle} alt="" height="10" width="10" />
                                <p>Payment remainder </p>
                                <div>
                                    <Popover
                                        minWidth={30}
                                        position={Position.BOTTOM_LEFT}
                                        content={
                                            <Menu>
                                                <Menu.Group>
                                                    <Menu.Item className="disabled_" style={disabled} disabled>
                                                        <p>Move between selections</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                        style={menu}
                                                    >
                                                        <p className="menucontent_">To do</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Processing</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Done</p>
                                                    </Menu.Item>
                                                </Menu.Group>
                                            </Menu>
                                        }
                                    >
                                        <img src={compare} alt="" height="8" width="14" />
                                    </Popover>
                                    <span>Details</span>
                                    <img src={details_arrow} alt="" height="6" width="8" />
                                </div>
                            </Table.Cell>
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
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
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
                                <Table.Cell className="map_column list_body" style={table_padding}>
                                    <img src={avatar} alt="" height="16" width="14" className="assignee" />
                                    Ashly
                                </Table.Cell>
                            </Popover>
                            <Table.Cell className="map_column list_body" style={table_padding_}>
                                Sep 20 - sep 25
                            </Table.Cell>
                            <Table.Cell className="map_column list_body">
                                <p className="high">High</p>
                            </Table.Cell>
                            <Table.Cell className="list_body"></Table.Cell>
                        </Table.Row>
                        <Table.Row height={28}>
                            <Table.Cell className="map_column list_body" flexBasis={550} style={table_padding}>
                                <img src={checkmark_circle} alt="" height="10" width="10" />
                                <p>User data packet </p>
                                <div>
                                    <Popover
                                        minWidth={30}
                                        position={Position.BOTTOM_LEFT}
                                        content={
                                            <Menu>
                                                <Menu.Group>
                                                    <Menu.Item className="disabled_" style={disabled} disabled>
                                                        <p>Move between selections</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                        style={menu}
                                                    >
                                                        <p className="menucontent_">To do</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Processing</p>
                                                    </Menu.Item>
                                                    <Menu.Item
                                                        style={menu}
                                                        icon={<img src={done} alt="" height="8" width="8" />}
                                                    >
                                                        <p className="menucontent_">Done</p>
                                                    </Menu.Item>
                                                </Menu.Group>
                                            </Menu>
                                        }
                                    >
                                        <img src={compare} alt="" height="8" width="14" />
                                    </Popover>
                                    <span>Details</span>
                                    <img src={details_arrow} alt="" height="6" width="8" />
                                </div>
                            </Table.Cell>
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
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar1}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
                                            >
                                                <p>Abdu Rahiman</p>
                                            </Menu.Item>
                                            <Menu.Item
                                                style={coll_drpdwn}
                                                className="coll_drpdwn"
                                                icon={
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="bd_profiles"
                                                        height="25"
                                                        width="23"
                                                    />
                                                }
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
                                <Table.Cell className="map_column list_body" style={table_padding}>
                                    <img src={avatar} alt="" height="16" width="14" className="assignee" />
                                    Ashly
                                </Table.Cell>
                            </Popover>
                            <Table.Cell className="map_column list_body" style={table_padding_}>
                                Sep 20 - sep 25
                            </Table.Cell>
                            <Table.Cell className="map_column list_body">
                                <p className="low">Low</p>
                            </Table.Cell>
                            <Table.Cell className=" list_body"></Table.Cell>
                        </Table.Row>
                    </Pane>
                )}
            </div>
        </div>
    );
}

export default List;
