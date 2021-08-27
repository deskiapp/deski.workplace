import React from "react";
import "./Workplace.css";
import deski_ash from "../assets/deski_ash.svg";
import { Link } from "react-router-dom";
import bell from "../assets/bell.svg";
import group_work from "../assets/group_work.svg";
import trash from "../assets/trash.svg";
import add from "../assets/add.svg";
import avatar from "../assets/avatar.jpg";
import { Avatar, Pane, SearchInput, DragHandleVerticalIcon } from "evergreen-ui";

function Workplace() {
    const searchinput = {
        width: "210px",
        borderRadius: "4px",
        backgroundColor: "#efefef",
        border: "none",
        height: "30px",
    };
    return (
        <div>
            <header>
                <img src={deski_ash} alt="" height="60" width="110" />
                <div className="wrk_nav">
                    <Link to="/home" className="wrknav_links">
                        Home
                    </Link>
                    <Link to="/feed" className="wrknav_links">
                        Feed
                    </Link>
                    <Link to="/template" className="wrknav_links">
                        Templates
                    </Link>
                    <div className="header_right">
                        <Avatar src={avatar} size={34} />
                    </div>
                    <div className="bell">
                        <img src={bell} alt="" height="20" width="16" className="bell" />
                    </div>
                </div>
            </header>
            <div className="sidebar">
                <Pane className="sidepane">
                    <SearchInput style={searchinput} className="searchinput" placeholder="Find a base workspace" />
                    <p className="wrk_title">Workspaces</p>
                    <img src={group_work} alt="" height="13" width="13" />
                    <p className="img_title">My First Workspace</p>
                    <DragHandleVerticalIcon className="moreicon" />
                    <div className="workspace">
                        <img src={group_work} alt="" height="13" width="13" />
                        <p className="img_title">Workspace 2</p>
                        <DragHandleVerticalIcon className="moreicon" />
                    </div>
                    <div className="workspace">
                        <img src={group_work} alt="" height="13" width="13" />
                        <p className="img_title">Workspace 3</p>
                        <DragHandleVerticalIcon className="moreicon" />
                    </div>
                    <div className="workspace">
                        <img src={group_work} alt="" height="13" width="13" />
                        <p className="img_title">Workspace 4</p>
                        <DragHandleVerticalIcon className="moreicon" />
                    </div>
                    <div className="workspace">
                        <img src={group_work} alt="" height="13" width="13" />
                        <p className="img_title">Workspace 5</p>
                        <DragHandleVerticalIcon className="moreicon" />
                    </div>
                    <div className="workspace">
                        <img src={group_work} alt="" height="13" width="13" />
                        <p className="img_title">Workspace 6</p>
                        <DragHandleVerticalIcon className="moreicon" />
                    </div>
                    <div className="workspace">
                        <img src={group_work} alt="" height="13" width="13" />
                        <p className="img_title">Workspace 7</p>
                        <DragHandleVerticalIcon className="moreicon" />
                    </div>
                    <div className="workspace">
                        <img src={group_work} alt="" height="13" width="13" />
                        <p className="img_title">Workspace 8</p>
                        <DragHandleVerticalIcon className="moreicon" />
                    </div>
                    <div className="workspace">
                        <img src={group_work} alt="" height="13" width="13" />
                        <p className="img_title">Workspace 9</p>
                        <DragHandleVerticalIcon className="moreicon" />
                    </div>
                    <div className="workspace">
                        <img src={group_work} alt="" height="13" width="13" />
                        <p className="img_title">Workspace 10</p>
                        <DragHandleVerticalIcon className="moreicon" />
                    </div>
                    <div className="workspace">
                        <img src={group_work} alt="" height="13" width="13" />
                        <p className="img_title">Workspace 11</p>
                        <DragHandleVerticalIcon className="moreicon" />
                    </div>
                    <div className="workspace">
                        <img src={group_work} alt="" height="13" width="13" />
                        <p className="img_title">Workspace 12</p>
                        <DragHandleVerticalIcon className="moreicon" />
                    </div>
                    <div className="workspace">
                        <img src={group_work} alt="" height="13" width="13" />
                        <p className="img_title">Workspace 13</p>
                        <DragHandleVerticalIcon className="moreicon" />
                    </div>
                    <div className="workspace">
                        <img src={group_work} alt="" height="13" width="13" />
                        <p className="img_title">Workspace 14</p>
                        <DragHandleVerticalIcon className="moreicon" />
                    </div>
                    <div className="workspace">
                        <img src={add} alt="" height="10" width="10" />
                        <p className="img_titl">Add Workspace</p>
                    </div>
                    <Link to="/trash" className="links">
                        <div className="workspace spc">
                            <img src={trash} alt="" height="10" width="10" />
                            <p className="img_titl">Trash</p>
                        </div>
                    </Link>
                </Pane>
            </div>
        </div>
    );
}

export default Workplace;
