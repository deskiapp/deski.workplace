import React from "react";
import Header from "./Header";
import "./Dashboard.css";
import "./Board/Board.css";
import Space from "./Space";

import avatar from "../assets/avatar.jpg";
import avatar1 from "../assets/avatar1.jpeg";
import avatar2 from "../assets/avatar2.jpeg";
import add_ from "../assets/add_.svg";
import arrow_down from "../assets/arrow_down.svg";
import { Table, Pane, Popover, Menu, TextInput } from "evergreen-ui";

function Dashboard() {
    const containerStyles = {
        // position: "absolute",
        height: 15,
        width: "370px",
        backgroundColor: "rgba(19,218,181,0.2)",
        borderRadius: 50,
        // marginTop: "100px",
        marginLeft: "240px",
    };
    const containerStyles1 = {
        height: 15,
        width: "370px",
        backgroundColor: "rgba(19,218,181,0.2)",
        borderRadius: 50,
        marginLeft: "570px",
        marginTop: "45px",
    };
    const fillerStyles = {
        height: "100%",
        width: "70%",
        backgroundColor: "#13dab5",
        borderRadius: "inherit",
        textAlign: "right",
    };

    const labelStyles = {
        paddingRight: "7px",
        paddingTop: "2px",
        fontSize: "10px",
        letterSpacing: "0.5px",
        color: "white",
        fontFamily: "GTEestiProDisplay-Light",
    };
    const containerStyles2 = {
        height: 15,
        width: "690px",
        backgroundColor: "rgba(123,123,123,0.2)",
        borderRadius: 50,
        marginLeft: "240px",
        marginTop: "15px",
    };
    const containerStyles3 = {
        height: 15,
        width: "670px",
        backgroundColor: "rgba(123,123,123,0.2)",
        borderRadius: 50,
        marginLeft: "350px",
        marginTop: "85px",
    };
    const fillerStyles2 = {
        height: "100%",
        width: "40%",
        backgroundColor: "#7b7b7b",
        borderRadius: "inherit",
        textAlign: "right",
    };
    const containerStyles4 = {
        height: 15,
        width: "380px",
        backgroundColor: "rgba(255,136,17,0.2)",
        borderRadius: 50,
        marginLeft: "303px",
        marginTop: "85px",
    };
    const fillerStyles4 = {
        height: "100%",
        width: "40%",
        backgroundColor: "#ff8811",
        borderRadius: "inherit",
        textAlign: "right",
    };

    return (
        <div>
            <Header />
            <Space />
            <div className="map">
                <h2>Epic Roadmap</h2>
                <div className="map_head">
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
                    <div className="epic_label">
                        <Popover
                            content={
                                <Pane height={310} width={430} className="create_epic">
                                    <h4>Create new epic</h4>
                                    <p>
                                        Initiatives are collections of epics that drive toward a common goal. An epic
                                        captures and tracks performance-related work.
                                    </p>
                                    <h5>Epic name </h5>
                                    <TextInput borderRadius="4px" width={364} height={30} />
                                    <h6>What’s your epic name ?</h6>
                                    <h5>Start date </h5>
                                    <TextInput type="date" borderRadius="4px" width={170} height={30} />
                                    <div className="text_col">
                                        <h5>Due date </h5>
                                        <TextInput type="date" borderRadius="4px" width={170} height={30} />
                                    </div>
                                    <button className="btn1">Create</button>
                                    <button className="btn2">Cancel</button>
                                </Pane>
                            }
                        >
                            <div className="create_popover_">
                                <div className="epic">
                                    <img src={add_} alt="" className="epic_drpdwn" height="10" width="10" />
                                    Create
                                </div>
                            </div>
                        </Popover>

                        <Popover
                            minWidth={50}
                            content={
                                <Menu>
                                    <Menu.Group>
                                        <Menu.Item>
                                            <p className="menucontent">To do</p>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <p className="menucontent">Inprogress</p>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <p className="menucontent">Done</p>
                                        </Menu.Item>
                                    </Menu.Group>
                                </Menu>
                            }
                        >
                            <div className="epic">
                                Status category
                                <img src={arrow_down} alt="" className="epic_drpdwn" height="7" width="8" />
                            </div>
                        </Popover>
                    </div>
                </div>
                <div className="map_table_">
                    <Pane className="map_table">
                        <div className="map_progress">
                            <div style={containerStyles}>
                                <div style={fillerStyles}>
                                    <div style={labelStyles}>70%</div>
                                </div>
                            </div>

                            <div style={containerStyles1}>
                                <div style={fillerStyles}>
                                    <div style={labelStyles}>70%</div>
                                </div>
                            </div>

                            <div style={containerStyles2}>
                                <div style={fillerStyles2}>
                                    <div style={labelStyles}>40%</div>
                                </div>
                            </div>
                            <div style={containerStyles4}>
                                <div style={fillerStyles4}>
                                    <div style={labelStyles}>70%</div>
                                </div>
                            </div>
                            <div style={containerStyles3}>
                                <div style={fillerStyles2}>
                                    <div style={labelStyles}>40%</div>
                                </div>
                            </div>
                            <Pane className="map_fixed">
                                <div>Weeks</div>
                                <div>Months</div>
                                <div>Quarter</div>
                            </Pane>
                        </div>
                        <div>
                            <Table.Row height={32} marginTop={-310}>
                                <Table.Cell className="map_column vertical"></Table.Cell>
                                <Table.Cell className="map_column main" flexBasis={110}>
                                    Epic
                                </Table.Cell>
                                <Table.Cell className="map_column sub">Mon, 7/1</Table.Cell>
                                <Table.Cell className="map_column sub">Tue, 7/2</Table.Cell>
                                <Table.Cell className="map_column sub">Wed, 7/3</Table.Cell>
                                <Table.Cell className="map_column sub">Thu, 7/4</Table.Cell>
                                <Table.Cell className="map_column sub">Fri, 7/5</Table.Cell>
                                <Table.Cell className="map_column sub">Sat, 7/6</Table.Cell>
                                <Table.Cell className="map_column sub">Sun, 7/7</Table.Cell>
                                <Table.Cell className="map_column sub">Mon, 7/8</Table.Cell>
                                <Table.Cell className="map_column sub">Tue, 7/9</Table.Cell>
                                <Table.Cell className="sub">Wed, 7/10</Table.Cell>
                            </Table.Row>
                            <Table.Row height={130}>
                                <Table.Cell className="map_column vertical">
                                    Nursing
                                    <br /> Fundamentals of
                                </Table.Cell>
                                <Table.Cell className="map_column sub" flexBasis={110}>
                                    Pharmacology 1 <br />
                                    <br />
                                    Pharmacology 2 <br />
                                    <br />
                                    Parenteral Therapies <br />
                                    <br />
                                    Peri-Operative Nursing
                                </Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                            <Table.Row height={100}>
                                <Table.Cell className="map_column vertical">
                                    Nursing
                                    <br />
                                    Neurologic
                                </Table.Cell>
                                <Table.Cell className="map_column sub" flexBasis={110}>
                                    Neuro 1 <br />
                                    <br />
                                    Neuro 2 <br />
                                    <br />
                                    Neuro 3 + Workbook
                                </Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                            <Table.Row height={100}>
                                <Table.Cell className="map_column vertical">
                                    Disorders
                                    <br /> Endocrine
                                </Table.Cell>
                                <Table.Cell className="map_column sub" flexBasis={110}>
                                    GIT 1 <br />
                                    <br />
                                    GIT 2<br />
                                    <br /> GIT 3 + Workbook
                                </Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                            <Table.Row height={130}>
                                <Table.Cell className="map_column vertical">
                                    Tract
                                    <br /> Gastrointestinal
                                </Table.Cell>
                                <Table.Cell className="map_column sub" flexBasis={110}>
                                    Endo 1<br />
                                    <br /> Endo 2 <br />
                                    <br />
                                    Endo 3 + Workbook <br />
                                    <br />
                                    Renal 1
                                </Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                            <Table.Row height={130}>
                                <Table.Cell className="map_column vertical">
                                    Nursing
                                    <br /> Fundamentals of
                                </Table.Cell>
                                <Table.Cell className="map_column sub" flexBasis={110}>
                                    Pharmacology 1 <br />
                                    <br />
                                    Pharmacology 2 <br />
                                    <br />
                                    Parenteral Therapies <br />
                                    <br />
                                    Peri-Operative Nursing
                                </Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                            <Table.Row height={100}>
                                <Table.Cell className="map_column vertical">
                                    Nursing
                                    <br />
                                    Neurologic
                                </Table.Cell>
                                <Table.Cell className="map_column sub" flexBasis={110}>
                                    Neuro 1 <br />
                                    <br />
                                    Neuro 2 <br />
                                    <br />
                                    Neuro 3 + Workbook
                                </Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                            <Table.Row height={100}>
                                <Table.Cell className="map_column vertical">
                                    Disorders
                                    <br /> Endocrine
                                </Table.Cell>
                                <Table.Cell className="map_column sub" flexBasis={110}>
                                    GIT 1 <br />
                                    <br />
                                    GIT 2<br />
                                    <br /> GIT 3 + Workbook
                                </Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                            <Table.Row height={130}>
                                <Table.Cell className="map_column vertical">
                                    Tract
                                    <br /> Gastrointestinal
                                </Table.Cell>
                                <Table.Cell className="map_column sub" flexBasis={110}>
                                    Endo 1<br />
                                    <br /> Endo 2 <br />
                                    <br />
                                    Endo 3 + Workbook <br />
                                    <br />
                                    Renal 1
                                </Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell className="map_column"></Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                        </div>
                    </Pane>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
