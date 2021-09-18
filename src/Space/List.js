import React from "react";
import "./List.css";
import Header from "./Header";
import Space from "./Space";
import arrow from "../assets/arrow.svg";

import add_ from "../assets/add_.svg";
import checkmark_circle from "../assets/checkmark_circle.svg";
import arrow_dropdown from "../assets/arrow_dropdown.svg";
import {
    Popover,
    Menu,
    Dialog,
    TextInputField,
    SelectMenu,
    Position,
    Table,
    Pane,
    DragHandleVerticalIcon,
} from "evergreen-ui";
import avatar from "../assets/avatar.jpg";
import avatar1 from "../assets/avatar1.jpeg";
import avatar2 from "../assets/avatar2.jpeg";

function List() {
    const [selected, setSelected] = React.useState(null);
    const [isShown, setIsShown] = React.useState(false);
    const coll_drpdwn = {
        height: "35px",
        paddingBottom: "15px",
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
                    <Table.Row height={32} className="border_">
                        <Table.Cell className="map_column list_head" style={table_padding} flexBasis={615}>
                            Task name
                        </Table.Cell>
                        <Table.Cell className="map_column list_head" style={table_padding}>
                            Assignee
                        </Table.Cell>
                        <Table.Cell className="map_column list_head" style={table_padding}>
                            Due date
                        </Table.Cell>
                        <Table.Cell className="map_column list_head" style={table_padding}>
                            Label
                        </Table.Cell>
                        <Table.Cell className="list_head" style={table_padding}>
                            Status
                        </Table.Cell>
                    </Table.Row>
                </Pane>
                <div className="todo_div">
                    <DragHandleVerticalIcon className="drag" />
                    <div>
                        <img src={arrow_dropdown} alt="" height="7" width="10" />
                        <p className="todo">To do</p>
                    </div>
                </div>
                <Pane className="list" width={1052}>
                    <Table.Row height={32} className="border_">
                        <Table.Cell className="map_column list_body" style={table_padding} flexBasis={615}>
                            <img src={checkmark_circle} alt="" height="10" width="10" />
                            <p>Develop prototype</p>
                        </Table.Cell>
                        <Table.Cell className="map_column list_body" style={table_padding}>
                            <img src={avatar} alt="" height="16" width="14" className="assignee" />
                            Ashly
                        </Table.Cell>
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
                    <Table.Row height={32}>
                        <Table.Cell className="map_column list_body" flexBasis={615} style={table_padding}>
                            <img src={checkmark_circle} alt="" height="10" width="10" />
                            <p>Collect assets and implement too</p>
                        </Table.Cell>
                        <Table.Cell className="map_column list_body" style={table_padding}>
                            <img src={avatar} alt="" height="16" width="14" className="assignee" />
                            Ashly
                        </Table.Cell>
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
                    <Table.Row height={32}>
                        <Table.Cell className="map_column list_body" flexBasis={615} style={table_padding}>
                            <img src={checkmark_circle} alt="" height="10" width="10" />
                            <p>Acquire customer feedback</p>
                        </Table.Cell>
                        <Table.Cell className="map_column list_body" style={table_padding}>
                            <img src={avatar} alt="" height="16" width="14" className="assignee" />
                            Ashly
                        </Table.Cell>
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
                    <Table.Row height={32}>
                        <Table.Cell className="map_column list_body" flexBasis={615} style={table_padding}>
                            <img src={checkmark_circle} alt="" height="10" width="10" />
                            <p>A/B test report submission </p>
                        </Table.Cell>
                        <Table.Cell className="map_column list_body" style={table_padding}>
                            <img src={avatar} alt="" height="16" width="14" className="assignee" />
                            Ashly
                        </Table.Cell>
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
                    <Table.Row height={32}>
                        <Table.Cell className="map_column list_body" flexBasis={615} style={table_padding}>
                            <img src={checkmark_circle} alt="" height="10" width="10" />
                            <p>Server implementation - technology paper brief </p>
                        </Table.Cell>
                        <Table.Cell className="map_column list_body" style={table_padding}>
                            <img src={avatar} alt="" height="16" width="14" className="assignee" />
                            Ashly
                        </Table.Cell>
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
                    <Table.Row height={32}>
                        <Table.Cell className="map_column list_body" flexBasis={615} style={table_padding}>
                            <img src={checkmark_circle} alt="" height="10" width="10" />
                            <p>Firebase</p>
                        </Table.Cell>
                        <Table.Cell className="map_column list_body" style={table_padding}>
                            <img src={avatar} alt="" height="16" width="14" className="assignee" />
                            Ashly
                        </Table.Cell>
                        <Table.Cell className="map_column list_body" style={table_padding_}>
                            Sep 20 - sep 25
                        </Table.Cell>
                        <Table.Cell className="map_column list_body">
                            <p className="medium">Medium</p>
                        </Table.Cell>
                        <Table.Cell className="list_body"></Table.Cell>
                    </Table.Row>
                    <Table.Row height={32}>
                        <Table.Cell className="map_column list_body" flexBasis={615} style={table_padding}>
                            <img src={checkmark_circle} alt="" height="10" width="10" />
                            <p>Product board data export file </p>
                        </Table.Cell>
                        <Table.Cell className="map_column list_body" style={table_padding}>
                            <img src={avatar} alt="" height="16" width="14" className="assignee" />
                            Ashly
                        </Table.Cell>
                        <Table.Cell className="map_column list_body" style={table_padding_}>
                            Sep 20 - sep 25
                        </Table.Cell>
                        <Table.Cell className="map_column list_body">
                            <p className="medium">Medium</p>
                        </Table.Cell>
                        <Table.Cell className="list_body"></Table.Cell>
                    </Table.Row>
                    <Table.Row height={32}>
                        <Table.Cell className="map_column list_body" flexBasis={615} style={table_padding}>
                            <img src={checkmark_circle} alt="" height="10" width="10" />
                            <p>Payment remainder </p>
                        </Table.Cell>
                        <Table.Cell className="map_column list_body" style={table_padding}>
                            <img src={avatar} alt="" height="16" width="14" className="assignee" />
                            Ash
                        </Table.Cell>
                        <Table.Cell className="map_column list_body" style={table_padding_}>
                            Sep 20 - sep 25
                        </Table.Cell>
                        <Table.Cell className="map_column list_body">
                            <p className="high">High</p>
                        </Table.Cell>
                        <Table.Cell className="list_body"></Table.Cell>
                    </Table.Row>
                    <Table.Row height={32}>
                        <Table.Cell className="map_column list_body" flexBasis={615} style={table_padding}>
                            <img src={checkmark_circle} alt="" height="10" width="10" />
                            <p>User data packet </p>
                        </Table.Cell>
                        <Table.Cell className="map_column list_body" style={table_padding}>
                            <img src={avatar} alt="" height="16" width="14" className="assignee" />
                            Ash
                        </Table.Cell>
                        <Table.Cell className="map_column list_body" style={table_padding_}>
                            Sep 20 - sep 25
                        </Table.Cell>
                        <Table.Cell className="map_column list_body">
                            <p className="low">Low</p>
                        </Table.Cell>
                        <Table.Cell className=" list_body"></Table.Cell>
                    </Table.Row>
                </Pane>
                <div className="pro_div">
                    <img src={arrow_dropdown} alt="" height="7" width="10" />
                    <p className="pro">Processing</p>
                </div>
            </div>
        </div>
    );
}

export default List;
