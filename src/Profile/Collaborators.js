import React from "react";
import "./Collaborators.css";
import Header from "../Workplace/Header";
import Profile from "./Profile";
import user from "../assets/user.svg";
import send from "../assets/send.svg";
import dropdown_circle from "../assets/dropdown-circle.svg";
import { MoreIcon } from "evergreen-ui";
import { TextInputField, Dialog, SelectMenu } from "evergreen-ui";
import arrow from "../assets/arrow.svg";

function Collaborators() {
    const [selected, setSelected] = React.useState(null);
    const [isShown, setIsShown] = React.useState(false);
    const textinput = {
        height: "40px",
        border: "solid 0.1px #cecece",
        color: "#9a9a9a",
    };

    return (
        <div>
            <Header />
            <Profile />
            <div className="collaborators">
                <h2>Manage people</h2>
                <div className="grid_container">
                    <div className="grid_item">
                        <h5 onClick={() => setIsShown(true)} className="cursor">
                            Invite workspace collaborators
                            <img className="dropdwn" src={send} alt="" height="14" width="14" />
                        </h5>
                    </div>
                    <div className="grid_item">
                        <h5>
                            All workspace <img className="dropdwn" src={dropdown_circle} alt="" height="10" width="10" />
                        </h5>
                    </div>
                    <div className="grid_item">
                        <h5>
                            User rolls <img className="dropdwn" src={dropdown_circle} alt="" height="10" width="10" />
                        </h5>
                    </div>
                    <div className="grid_item">
                        <img src={user} alt="" height="37" width="37" />
                        <p className="p user_name">Ameen</p>
                        <p className="id">ameenmoosa@deski.app</p>
                    </div>
                    <div className="grid_item">
                        <p className="p">Workspace collaborator</p>
                    </div>
                    <div className="grid_item">
                        <p className="p">
                            Owner
                            <MoreIcon className="more" />
                        </p>
                    </div>
                    <div className="grid_item">
                        <img src={user} alt="" height="37" width="37" />
                        <p className="p user_name">Abdul</p>
                        <p className="id">ameenmoosa@deski.app</p>
                    </div>
                    <div className="grid_item">
                        <p className="p">Workspace collaborator</p>
                    </div>
                    <div className="grid_item">
                        <p className="p">
                            Member
                            <MoreIcon className="more" />
                        </p>
                    </div>
                    <div className="grid_item">
                        <img src={user} alt="" height="37" width="37" />
                        <p className="p user_name">Mashood</p>
                        <p className="id">ameenmoosa@deski.app</p>
                    </div>
                    <div className="grid_item">
                        <p className="p">Workspace collaborator</p>
                    </div>
                    <div className="grid_item">
                        <p className="p">
                            Admin <MoreIcon className="more" />
                        </p>
                    </div>
                    <div className="grid_item">
                        <img src={user} alt="" height="37" width="37" />
                        <p className="p user_name">Paul walker</p>
                        <p className="id">ameenmoosa@deski.app</p>
                    </div>
                    <div className="grid_item">
                        <p className="p">Workspace collaborator</p>
                    </div>
                    <div className="grid_item">
                        <p className="p">
                            Admin
                            <MoreIcon className="more" />
                        </p>
                    </div>
                </div>
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
                            People you add will receive an invite automatically or after your site admin has approved the
                            request.
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
    );
}

export default Collaborators;
