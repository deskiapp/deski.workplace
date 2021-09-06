import React from "react";
import "./People.css";
import Header from "./Header";
import { TextInput, TextInputField, Dialog, SelectMenu, Pane, Avatar } from "evergreen-ui";
import people1 from "../assets/people1.jpeg";
import people2 from "../assets/people2.jpg";
import people3 from "../assets/people3.jpg";
import people4 from "../assets/people4.jpg";
import people5 from "../assets/people5.jpg";
import people6 from "../assets/people6.jpg";
import search from "../assets/search.svg";
import arrow from "../assets/arrow.svg";

function People() {
    const textinput = {
        height: "40px",
        border: "solid 0.1px #cecece",
        color: "#9a9a9a",
    };
    const [isShown, setIsShown] = React.useState(false);
    const [selected, setSelected] = React.useState(null);

    const searchbox = {
        border: "solid 2px rgba(112, 112, 112, .3)",
        borderRadius: "5px",
        paddingLeft: "35px",
    };
    return (
        <div>
            <Header />
            <div className="people">
                <TextInput
                    className="searchbox"
                    width={850}
                    height={45}
                    style={searchbox}
                    placeholder="Search for people and teams"
                />
                <img src={search} alt="" className="searchicon" />
                <p>People</p>
                <button className="button1" onClick={() => setIsShown(true)}>
                    Add people
                </button>
                <button className="button2">Start a team</button>
                <div className="peoples">
                    <Pane className="people1">
                        <Avatar src={people1} size={70} />
                        <span>Tommy Guzman</span>
                        <p>Web developer</p>
                    </Pane>
                    <Pane className="people1">
                        <Avatar src={people2} size={70} />
                        <span>Tommy Guzman</span>
                        <p>Web developer</p>
                    </Pane>
                    <Pane className="people1">
                        <Avatar src={people3} size={70} />
                        <span>Tommy Guzman</span>
                        <p>Web developer</p>
                    </Pane>
                    <Pane className="people1">
                        <Avatar src={people4} size={70} />
                        <span>Tommy Guzman</span>
                        <p>Web developer</p>
                    </Pane>
                    <Pane className="people1">
                        <Avatar src={people5} size={70} />
                        <span>Tommy Guzman</span>
                        <p>Web developer</p>
                    </Pane>
                    <Pane className="people1">
                        <Avatar src={people6} size={70} />
                        <span>Tommy Guzman</span>
                        <p>Web developer</p>
                    </Pane>
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
                </div>
            </div>
        </div>
    );
}

export default People;
