import React from "react";
import create_back from "../assets/create_back.svg";
import kanbanboard from "../assets/kanbanboard.svg";
import { Link, useHistory } from "react-router-dom";
import { TextInput } from "evergreen-ui";

function Kanban() {
    const textinput = {
        height: "40px",
        width: "411px",
        border: "1px solid #E5E5E5",
        borderRadius: "2px",
        marginBottom: "29px",
    };
    const textinput1 = {
        height: "40px",
        width: "247px",
        border: "1px solid #E5E5E5",
        borderRadius: "2px",
        marginTop: "7px",
        marginBottom: "23px",
    };
    let history = useHistory();
    return (
        <div>
            <div
                className="back"
                onClick={() => {
                    history.goBack();
                }}
            >
                <img src={create_back} alt="" height="14" width="14.97" />
            </div>
            <div className="blank_project">
                <h2>New project</h2>
                <p className="name">
                    Name<span>*</span>
                </p>
                <TextInput style={textinput} />
                <p className="key">
                    Key<span>*</span>
                </p>
                <TextInput style={textinput1} />
                <p className="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="btn">Create Project</button>
            </div>
            <div className="kanban_container">
                <img src={kanbanboard} alt="" height="412" width="618" />
            </div>
        </div>
    );
}

export default Kanban;
