import React from "react";
import "./Workspaces.css";
import Header from "../Workplace/Header";
import Profile from "./Profile";
import bug from "../assets/bug.svg";
import app from "../assets/app.svg";
import { Pane, Popover, Menu, TextInputField, Dialog, SelectMenu, Avatar, MoreIcon, Position } from "evergreen-ui";
import share from "../assets/share.svg";
import dlt from "../assets/dlt.svg";
import rename from "../assets/rename.svg";
import settings from "../assets/settings.svg";
import arrow from "../assets/arrow.svg";

function Workspaces() {
    const textinput = {
        height: "40px",
        border: "solid 0.1px #cecece",
        color: "#9a9a9a",
    };
    const menu = {
        height: "30px",
    };

    const [selected, setSelected] = React.useState(null);
    const [selected1, setSelected1] = React.useState(null);
    const [isShown, setIsShown] = React.useState(false);
    const [isShown1, setIsShown1] = React.useState(false);
    const [isShown2, setIsShown2] = React.useState(false);

    return (
        <div>
            <Header />
            <Profile />
            <div className="workspaces">
                <h2>My workspaces</h2>
                <div className="my_workspace">
                    <h4>My first workspace</h4>
                    <Popover
                        position={Position.BOTTOM_LEFT}
                        minWidth={120}
                        content={
                            <Menu>
                                <Menu.Group>
                                    <Menu.Item style={menu} icon={<Avatar src={settings} shape="square" size={10} />}>
                                        <p className="menucontent">Workspace settings</p>
                                    </Menu.Item>
                                    <Menu.Item
                                        onSelect={() => setIsShown(true)}
                                        style={menu}
                                        icon={<img src={share} alt="" height="10" width="10" />}
                                    >
                                        <p className="menucontent">Share workspace</p>
                                    </Menu.Item>
                                    <Menu.Item style={menu} icon={<img src={rename} alt="" height="10" width="10" />}>
                                        <p className="menucontent">Rename workspace</p>
                                    </Menu.Item>
                                    <Menu.Item
                                        onClick={() => setIsShown1(true)}
                                        style={menu}
                                        icon={<img src={dlt} alt="" height="10" width="10" />}
                                    >
                                        <p className="menucontent">Delete workspace</p>
                                    </Menu.Item>
                                </Menu.Group>
                            </Menu>
                        }
                    >
                        <div className="arrow_div">
                            <img src={arrow} alt="" className="arrow1" />
                        </div>
                    </Popover>
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
                        onCloseComplete={() => setIsShown2(false)}
                        preventBodyScrolling
                        hasHeader={false}
                        isShown={isShown2}
                        hasFooter={false}
                    >
                        <div className="share_workspace">
                            <h4>Move My First workplace to another workspace</h4>
                            <p>Choose workspace</p>

                            <SelectMenu
                                height={140}
                                width={400}
                                title="My second workspace"
                                options={[
                                    "My first workspace",
                                    "My second workspace",
                                    "My third workspace",
                                    "My fourth workspace",
                                ].map((label) => ({
                                    label,
                                    value: label,
                                }))}
                                selected={selected1}
                                closeOnSelect={true}
                                hasFilter={false}
                                hasTitle={false}
                                onSelect={(item) => setSelected1(item.value)}
                            >
                                <button className="dropdwn">
                                    {selected1 || "My second workspace"}
                                    <img src={arrow} className="drop_icon_pro" alt="" height="8" width="15" />
                                </button>
                            </SelectMenu>

                            <div>
                                <button className="cancel_btn move" onClick={() => setIsShown2(false)}>
                                    Cancel
                                </button>
                                <button className="move_btn" onClick={() => setIsShown2(false)} s>
                                    Move
                                </button>
                            </div>
                        </div>
                    </Dialog>
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
                    <div className="card_div">
                        <Pane className="card1">
                            <Popover
                                position={Position.BOTTOM_LEFT}
                                minWidth={50}
                                content={
                                    <Menu>
                                        <Menu.Group>
                                            <Menu.Item style={menu}>
                                                <p className="menucontent">Rename space</p>
                                            </Menu.Item>
                                            <Menu.Item style={menu}>
                                                <p className="menucontent">Share</p>
                                            </Menu.Item>
                                            <Menu.Item onSelect={() => setIsShown2(true)} style={menu}>
                                                <p className="menucontent">Move space</p>
                                            </Menu.Item>
                                            <Menu.Item style={menu}>
                                                <p className="menucontent">Duplicate</p>
                                            </Menu.Item>
                                            <Menu.Item intent="danger" style={menu}>
                                                <p className="menucontentred">Delete</p>
                                            </Menu.Item>
                                        </Menu.Group>
                                    </Menu>
                                }
                            >
                                <MoreIcon className="more_" />
                            </Popover>

                            <img src={bug} alt="" height="34" width="34" />
                            <h4>Hexcode</h4>
                            <p className="span4">www.hexcode.co</p>
                            <p className="des">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                            </p>
                        </Pane>
                        <Pane className="card2">
                            <Popover
                                position={Position.BOTTOM_LEFT}
                                minWidth={50}
                                content={
                                    <Menu>
                                        <Menu.Group>
                                            <Menu.Item style={menu}>
                                                <p className="menucontent">Rename space</p>
                                            </Menu.Item>
                                            <Menu.Item style={menu}>
                                                <p className="menucontent">Share</p>
                                            </Menu.Item>
                                            <Menu.Item onSelect={() => setIsShown2(true)} style={menu}>
                                                <p className="menucontent">Move space</p>
                                            </Menu.Item>
                                            <Menu.Item style={menu}>
                                                <p className="menucontent">Duplicate</p>
                                            </Menu.Item>
                                            <Menu.Item intent="danger" style={menu}>
                                                <p className="menucontentred">Delete</p>
                                            </Menu.Item>
                                        </Menu.Group>
                                    </Menu>
                                }
                            >
                                <MoreIcon className="more_" />
                            </Popover>
                            <img src={app} alt="" height="34" width="34" />
                            <h4>Ramotion</h4>
                            <p className="span4">www.ramotion.com</p>
                            <p className="des">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                            </p>
                        </Pane>
                        <Pane className="card2">
                            <Popover
                                position={Position.BOTTOM_LEFT}
                                minWidth={50}
                                content={
                                    <Menu>
                                        <Menu.Group>
                                            <Menu.Item style={menu}>
                                                <p className="menucontent">Rename space</p>
                                            </Menu.Item>
                                            <Menu.Item style={menu}>
                                                <p className="menucontent">Share</p>
                                            </Menu.Item>
                                            <Menu.Item onSelect={() => setIsShown2(true)} style={menu}>
                                                <p className="menucontent">Move space</p>
                                            </Menu.Item>
                                            <Menu.Item style={menu}>
                                                <p className="menucontent">Duplicate</p>
                                            </Menu.Item>
                                            <Menu.Item intent="danger" style={menu}>
                                                <p className="menucontentred">Delete</p>
                                            </Menu.Item>
                                        </Menu.Group>
                                    </Menu>
                                }
                            >
                                <MoreIcon className="more_" />
                            </Popover>
                            <img src={bug} alt="" height="34" width="34" />
                            <h4>Hexcode</h4>
                            <p className="span4">www.hexcode.co</p>
                            <p className="des">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                            </p>
                        </Pane>
                    </div>
                    <br></br>
                    <div className="card_div card_secondrow">
                        <Pane className="card1">
                            <Popover
                                position={Position.BOTTOM_LEFT}
                                minWidth={50}
                                content={
                                    <Menu>
                                        <Menu.Group>
                                            <Menu.Item style={menu}>
                                                <p className="menucontent">Rename space</p>
                                            </Menu.Item>
                                            <Menu.Item style={menu}>
                                                <p className="menucontent">Share</p>
                                            </Menu.Item>
                                            <Menu.Item onSelect={() => setIsShown2(true)} style={menu}>
                                                <p className="menucontent">Move space</p>
                                            </Menu.Item>
                                            <Menu.Item style={menu}>
                                                <p className="menucontent">Duplicate</p>
                                            </Menu.Item>
                                            <Menu.Item intent="danger" style={menu}>
                                                <p className="menucontentred">Delete</p>
                                            </Menu.Item>
                                        </Menu.Group>
                                    </Menu>
                                }
                            >
                                <MoreIcon className="more_" />
                            </Popover>
                            <img src={bug} alt="" height="34" width="34" />
                            <h4>Hexcode</h4>
                            <p className="span4">www.hexcode.co</p>
                            <p className="des">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                            </p>
                        </Pane>
                        <Pane className="card2">
                            <Popover
                                position={Position.BOTTOM_LEFT}
                                minWidth={50}
                                content={
                                    <Menu>
                                        <Menu.Group>
                                            <Menu.Item style={menu}>
                                                <p className="menucontent">Rename space</p>
                                            </Menu.Item>
                                            <Menu.Item style={menu}>
                                                <p className="menucontent">Share</p>
                                            </Menu.Item>
                                            <Menu.Item onSelect={() => setIsShown2(true)} style={menu}>
                                                <p className="menucontent">Move space</p>
                                            </Menu.Item>
                                            <Menu.Item style={menu}>
                                                <p className="menucontent">Duplicate</p>
                                            </Menu.Item>
                                            <Menu.Item intent="danger" style={menu}>
                                                <p className="menucontentred">Delete</p>
                                            </Menu.Item>
                                        </Menu.Group>
                                    </Menu>
                                }
                            >
                                <MoreIcon className="more_" />
                            </Popover>
                            <img src={app} alt="" height="34" width="34" />
                            <h4>Ramotion</h4>
                            <p className="span4">www.ramotion.com</p>
                            <p className="des">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                            </p>
                        </Pane>
                        <Pane className="card2">
                            <Popover
                                position={Position.BOTTOM_LEFT}
                                minWidth={50}
                                content={
                                    <Menu>
                                        <Menu.Group>
                                            <Menu.Item style={menu}>
                                                <p className="menucontent">Rename space</p>
                                            </Menu.Item>
                                            <Menu.Item style={menu}>
                                                <p className="menucontent">Share</p>
                                            </Menu.Item>
                                            <Menu.Item onSelect={() => setIsShown2(true)} style={menu}>
                                                <p className="menucontent">Move space</p>
                                            </Menu.Item>
                                            <Menu.Item style={menu}>
                                                <p className="menucontent">Duplicate</p>
                                            </Menu.Item>
                                            <Menu.Item intent="danger" style={menu}>
                                                <p className="menucontentred">Delete</p>
                                            </Menu.Item>
                                        </Menu.Group>
                                    </Menu>
                                }
                            >
                                <MoreIcon className="more_" />
                            </Popover>
                            <img src={bug} alt="" height="34" width="34" />
                            <h4>Hexcode</h4>
                            <p className="span4">www.hexcode.co</p>
                            <p className="des">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                            </p>
                        </Pane>
                    </div>
                </div>
                <div className="second_workspace">
                    <h4>
                        My second workspace
                        <span>Shared</span>
                    </h4>
                    <div className="card_div">
                        <Pane className="card1">
                            <Popover
                                position={Position.BOTTOM_LEFT}
                                minWidth={50}
                                content={
                                    <Menu>
                                        <Menu.Group>
                                            <Menu.Item style={menu}>
                                                <p className="menucontent">Rename space</p>
                                            </Menu.Item>
                                            <Menu.Item style={menu}>
                                                <p className="menucontent">Share</p>
                                            </Menu.Item>
                                            <Menu.Item onSelect={() => setIsShown2(true)} style={menu}>
                                                <p className="menucontent">Move space</p>
                                            </Menu.Item>
                                            <Menu.Item style={menu}>
                                                <p className="menucontent">Duplicate</p>
                                            </Menu.Item>
                                            <Menu.Item intent="danger" style={menu}>
                                                <p className="menucontentred">Delete</p>
                                            </Menu.Item>
                                        </Menu.Group>
                                    </Menu>
                                }
                            >
                                <MoreIcon className="more_" />
                            </Popover>
                            <img src={bug} alt="" height="34" width="34" />
                            <h4>Hexcode</h4>
                            <p className="span4">www.hexcode.co</p>
                            <p className="des">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                            </p>
                        </Pane>
                        <Pane className="card2">
                            <Popover
                                position={Position.BOTTOM_LEFT}
                                minWidth={50}
                                content={
                                    <Menu>
                                        <Menu.Group>
                                            <Menu.Item style={menu}>
                                                <p className="menucontent">Rename space</p>
                                            </Menu.Item>
                                            <Menu.Item style={menu}>
                                                <p className="menucontent">Share</p>
                                            </Menu.Item>
                                            <Menu.Item onSelect={() => setIsShown2(true)} style={menu}>
                                                <p className="menucontent">Move space</p>
                                            </Menu.Item>
                                            <Menu.Item style={menu}>
                                                <p className="menucontent">Duplicate</p>
                                            </Menu.Item>
                                            <Menu.Item intent="danger" style={menu}>
                                                <p className="menucontentred">Delete</p>
                                            </Menu.Item>
                                        </Menu.Group>
                                    </Menu>
                                }
                            >
                                <MoreIcon className="more_" />
                            </Popover>
                            <img src={app} alt="" height="34" width="34" />
                            <h4>Ramotion</h4>
                            <p className="span4">www.ramotion.com</p>
                            <p className="des">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                            </p>
                        </Pane>
                        <Pane className="card2">
                            <Popover
                                position={Position.BOTTOM_LEFT}
                                minWidth={50}
                                content={
                                    <Menu>
                                        <Menu.Group>
                                            <Menu.Item style={menu}>
                                                <p className="menucontent">Rename space</p>
                                            </Menu.Item>
                                            <Menu.Item style={menu}>
                                                <p className="menucontent">Share</p>
                                            </Menu.Item>
                                            <Menu.Item onSelect={() => setIsShown2(true)} style={menu}>
                                                <p className="menucontent">Move space</p>
                                            </Menu.Item>
                                            <Menu.Item style={menu}>
                                                <p className="menucontent">Duplicate</p>
                                            </Menu.Item>
                                            <Menu.Item intent="danger" style={menu}>
                                                <p className="menucontentred">Delete</p>
                                            </Menu.Item>
                                        </Menu.Group>
                                    </Menu>
                                }
                            >
                                <MoreIcon className="more_" />
                            </Popover>
                            <img src={bug} alt="" height="34" width="34" />
                            <h4>Hexcode</h4>
                            <p className="span4">www.hexcode.co</p>
                            <p className="des">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                            </p>
                        </Pane>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Workspaces;
