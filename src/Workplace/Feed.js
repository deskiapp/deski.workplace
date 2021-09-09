import React from "react";
import "./Feed.css";
import Workspace_list from "./Workspace_list";
import Header from "../Workplace/Header";
import { Pane, DragHandleVerticalIcon, SearchInput, Popover, Menu } from "evergreen-ui";
import app from "../assets/app.svg";
import bug from "../assets/bug.svg";
import alert from "../assets/alert.svg";
import arrow from "../assets/arrow.svg";
import ellipse1 from "../assets/ellipse1.svg";
import ellipse2 from "../assets/ellipse2.svg";
import ellipse3 from "../assets/ellipse3.svg";
import filter from "../assets/filter.svg";

function Feed() {
    const menu = {
        height: "25px",
    };
    const [selectedTab, setSelectedTab] = React.useState(0);

    return (
        <div>
            <Header />
            <Workspace_list />
            <div className="feed">
                <h2>My works</h2>
                <div>
                    <Pane className="feed_card">
                        <DragHandleVerticalIcon className="moreicon" />

                        <img src={bug} alt="" height="35" width="35" />
                        <h4>Bug Tracking</h4>
                        <p className="deski">www.deskiapp.com</p>
                        <p className="des">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                        </p>
                        <div className="tasks_con">
                            <div className="div">5</div>
                            <p className="task">My tasks</p>
                        </div>
                        <div className="issue_con">
                            <div className="div">24</div>
                            <p className="task">Open Issues</p>
                        </div>
                        <div className="color_line"></div>
                    </Pane>
                    <Pane className="feed_card">
                        <DragHandleVerticalIcon className="moreicon" />

                        <img src={app} alt="" height="35" width="35" />
                        <h4>App Dvelopment</h4>
                        <p className="deski">www.deskiapp.com</p>
                        <p className="des">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                        </p>
                        <div className="tasks_con">
                            <div className="div">5</div>
                            <p className="task">My tasks</p>
                        </div>
                        <div className="issue_con">
                            <div className="div">24</div>
                            <p className="task">Open Issues</p>
                        </div>
                        <div className="color_line1"></div>
                    </Pane>
                    <Pane className="feed_card">
                        <DragHandleVerticalIcon className="moreicon" />

                        <img src={bug} alt="" height="35" width="35" />
                        <h4>Openkart</h4>
                        <p className="deski">www.deskiapp.com</p>
                        <p className="des">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                        </p>
                        <div className="tasks_con">
                            <div className="div">5</div>
                            <p className="task">My tasks</p>
                        </div>
                        <div className="issue_con">
                            <div className="div">24</div>
                            <p className="task">Open Issues</p>
                        </div>
                        <div className="color_line2"></div>
                    </Pane>
                    <Pane className="feed_card">
                        <DragHandleVerticalIcon className="moreicon" />

                        <img src={app} alt="" height="35" width="35" />
                        <h4>Openkart</h4>
                        <p className="deski">www.deskiapp.com</p>
                        <p className="des">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                        </p>
                        <div className="tasks_con">
                            <div className="div">5</div>
                            <p className="task">My tasks</p>
                        </div>
                        <div className="issue_con">
                            <div className="div">24</div>
                            <p className="task">Open Issues</p>
                        </div>
                        <div className="color_line2"></div>
                    </Pane>
                </div>
                <div className="feed_center">
                    Show more <img src={arrow} alt="" className="feed_arrow" height="10" width="7" />
                </div>
                <div className="feed_btns">
                    <button onClick={() => setSelectedTab(0)} className={selectedTab === 0 ? "btn_selected" : "btn"}>
                        My tasks
                    </button>
                    <button onClick={() => setSelectedTab(1)} className={selectedTab === 1 ? "btn_selected" : "btn"}>
                        Open Issues
                        <div className="alert_issues">
                            5 <img src={alert} alt="" height="9" width="12" />
                        </div>
                    </button>
                    <button className="btn">Calendar</button>
                    <button onClick={() => setSelectedTab(2)} className={selectedTab === 2 ? "btn_selected" : "btn"}>
                        Overdue
                    </button>
                    <button onClick={() => setSelectedTab(3)} className={selectedTab === 3 ? "btn_selected" : "btn"}>
                        Completed
                    </button>
                    <button onClick={() => setSelectedTab(4)} className={selectedTab === 4 ? "btn_selected" : "btn"}>
                        Unsheduled
                    </button>
                </div>

                {selectedTab === 0 ? (
                    <div className="feed_contents">
                        <Popover
                            minWidth={30}
                            content={
                                <Menu>
                                    <Menu.Group>
                                        <Menu.Item style={menu}>
                                            <p className="menucontent">Sort as latest</p>
                                        </Menu.Item>

                                        <Menu.Item style={menu}>
                                            <p className="menucontent">Sort as first</p>
                                        </Menu.Item>
                                    </Menu.Group>
                                </Menu>
                            }
                        >
                            <button className="filter_btn">
                                <img src={filter} className="filter" alt="" height="10" width="14" />
                                Filter
                            </button>
                        </Popover>

                        <SearchInput height={27} className="task_search" width={200} placeholder="Find your task" />
                        <div className="task_con">
                            <button className="status_btn">
                                <img src={ellipse1} className="ellipse" alt="" height="12" width="10" />
                                New
                            </button>
                            <img src={bug} alt="" height="35" width="35" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit,Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                            </p>
                        </div>
                        <div className="task_con">
                            <button className="status_btn">
                                <img src={ellipse2} className="ellipse" alt="" height="12" width="10" />
                                Active
                            </button>
                            <img src={app} alt="" height="35" width="35" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit,Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                            </p>
                        </div>
                        <div className="task_con">
                            <button className="status_btn">
                                <img src={ellipse3} className="ellipse" alt="" height="12" width="10" />
                                Inprogress
                            </button>
                            <img src={bug} alt="" height="35" width="35" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit,Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                            </p>
                        </div>
                        <div className="task_con">
                            <button className="status_btn">
                                <img src={ellipse3} className="ellipse" alt="" height="12" width="10" />
                                Inprogress
                            </button>
                            <img src={bug} alt="" height="35" width="35" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit,Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                            </p>
                        </div>
                        <div className="task_con">
                            <button className="status_btn">
                                <img src={ellipse3} className="ellipse" alt="" height="12" width="10" />
                                Inprogress
                            </button>
                            <img src={bug} alt="" height="35" width="35" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit,Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                            </p>
                        </div>
                        <div className="task_con">
                            <button className="status_btn">
                                <img src={ellipse3} className="ellipse" alt="" height="12" width="10" />
                                Inprogress
                            </button>
                            <img src={bug} alt="" height="35" width="35" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit,Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                            </p>
                        </div>
                        <div className="task_con">
                            <button className="status_btn">
                                <img src={ellipse3} className="ellipse" alt="" height="12" width="10" />
                                Inprogress
                            </button>
                            <img src={bug} alt="" height="35" width="35" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit,Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                            </p>
                        </div>
                        <div className="task_con">
                            <button className="status_btn">
                                <img src={ellipse3} className="ellipse" alt="" height="12" width="10" />
                                Inprogress
                            </button>
                            <img src={bug} alt="" height="35" width="35" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit,Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                            </p>
                        </div>
                        <div className="task_con">
                            <button className="status_btn">
                                <img src={ellipse3} className="ellipse" alt="" height="12" width="10" />
                                Inprogress
                            </button>
                            <img src={bug} alt="" height="35" width="35" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit,Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                            </p>
                        </div>
                    </div>
                ) : selectedTab === 1 ? (
                    <div className="feed_contents">
                        <Popover
                            minWidth={30}
                            content={
                                <Menu>
                                    <Menu.Group>
                                        <Menu.Item style={menu}>
                                            <p className="menucontent">Sort as latest</p>
                                        </Menu.Item>

                                        <Menu.Item style={menu}>
                                            <p className="menucontent">Sort as first</p>
                                        </Menu.Item>
                                    </Menu.Group>
                                </Menu>
                            }
                        >
                            <button className="filter_btn">
                                <img src={filter} className="filter" alt="" height="10" width="14" />
                                Filter
                            </button>
                        </Popover>
                        <SearchInput height={27} className="task_search" width={200} placeholder="Find your task" />
                        <div className="task_con">
                            <button className="status_btn">
                                <img src={ellipse1} className="ellipse" alt="" height="12" width="10" />
                                New
                            </button>
                            <img src={bug} alt="" height="35" width="35" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit,Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                            </p>
                        </div>
                        <div className="task_con">
                            <button className="status_btn">
                                <img src={ellipse2} className="ellipse" alt="" height="12" width="10" />
                                Active
                            </button>
                            <img src={bug} alt="" height="35" width="35" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit,Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                            </p>
                        </div>
                        <div className="task_con">
                            <button className="status_btn">
                                <img src={ellipse3} className="ellipse" alt="" height="12" width="10" />
                                Inprogress
                            </button>
                            <img src={bug} alt="" height="35" width="35" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit,Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                            </p>
                        </div>
                    </div>
                ) : selectedTab === 2 ? (
                    <div className="feed_contents">
                        <Popover
                            minWidth={30}
                            content={
                                <Menu>
                                    <Menu.Group>
                                        <Menu.Item style={menu}>
                                            <p className="menucontent">Sort as latest</p>
                                        </Menu.Item>

                                        <Menu.Item style={menu}>
                                            <p className="menucontent">Sort as first</p>
                                        </Menu.Item>
                                    </Menu.Group>
                                </Menu>
                            }
                        >
                            <button className="filter_btn">
                                <img src={filter} className="filter" alt="" height="10" width="14" />
                                Filter
                            </button>
                        </Popover>
                        <SearchInput height={27} className="task_search" width={200} placeholder="Find your task" />
                        <div className="task_con">
                            <button className="status_btn">
                                <img src={ellipse1} className="ellipse" alt="" height="12" width="10" />
                                New
                            </button>
                            <img src={bug} alt="" height="35" width="35" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit,Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                            </p>
                        </div>
                        <div className="task_con">
                            <button className="status_btn">
                                <img src={ellipse2} className="ellipse" alt="" height="12" width="10" />
                                Active
                            </button>
                            <img src={app} alt="" height="35" width="35" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit,Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                            </p>
                        </div>
                        <div className="task_con">
                            <button className="status_btn">
                                <img src={ellipse3} className="ellipse" alt="" height="12" width="10" />
                                Inprogress
                            </button>
                            <img src={app} alt="" height="35" width="35" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit,Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                            </p>
                        </div>
                    </div>
                ) : selectedTab === 3 ? (
                    <div className="feed_contents">
                        <Popover
                            minWidth={30}
                            content={
                                <Menu>
                                    <Menu.Group>
                                        <Menu.Item style={menu}>
                                            <p className="menucontent">Sort as latest</p>
                                        </Menu.Item>

                                        <Menu.Item style={menu}>
                                            <p className="menucontent">Sort as first</p>
                                        </Menu.Item>
                                    </Menu.Group>
                                </Menu>
                            }
                        >
                            <button className="filter_btn">
                                <img src={filter} className="filter" alt="" height="10" width="14" />
                                Filter
                            </button>
                        </Popover>
                        <SearchInput height={27} className="task_search" width={200} placeholder="Find your task" />
                        <div className="task_con">
                            <button className="status_btn">
                                <img src={ellipse1} className="ellipse" alt="" height="12" width="10" />
                                New
                            </button>
                            <img src={app} alt="" height="35" width="35" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit,Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                            </p>
                        </div>
                        <div className="task_con">
                            <button className="status_btn">
                                <img src={ellipse2} className="ellipse" alt="" height="12" width="10" />
                                Active
                            </button>
                            <img src={app} alt="" height="35" width="35" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit,Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                            </p>
                        </div>
                        <div className="task_con">
                            <button className="status_btn">
                                <img src={ellipse3} className="ellipse" alt="" height="12" width="10" />
                                Inprogress
                            </button>
                            <img src={app} alt="" height="35" width="35" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit,Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                            </p>
                        </div>
                    </div>
                ) : selectedTab === 4 ? (
                    <div className="feed_contents">
                        <Popover
                            minWidth={30}
                            content={
                                <Menu>
                                    <Menu.Group>
                                        <Menu.Item style={menu}>
                                            <p className="menucontent">Sort as latest</p>
                                        </Menu.Item>

                                        <Menu.Item style={menu}>
                                            <p className="menucontent">Sort as first</p>
                                        </Menu.Item>
                                    </Menu.Group>
                                </Menu>
                            }
                        >
                            <button className="filter_btn">
                                <img src={filter} className="filter" alt="" height="10" width="14" />
                                Filter
                            </button>
                        </Popover>
                        <SearchInput height={27} className="task_search" width={200} placeholder="Find your task" />
                        <div className="task_con">
                            <button className="status_btn">
                                <img src={ellipse1} className="ellipse" alt="" height="12" width="10" />
                                New
                            </button>
                            <img src={app} alt="" height="35" width="35" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit,Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                            </p>
                        </div>
                        <div className="task_con">
                            <button className="status_btn">
                                <img src={ellipse2} className="ellipse" alt="" height="12" width="10" />
                                Active
                            </button>
                            <img src={bug} alt="" height="35" width="35" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit,Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                            </p>
                        </div>
                        <div className="task_con">
                            <button className="status_btn">
                                <img src={ellipse3} className="ellipse" alt="" height="12" width="10" />
                                Inprogress
                            </button>
                            <img src={app} alt="" height="35" width="35" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit,Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                            </p>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default Feed;
