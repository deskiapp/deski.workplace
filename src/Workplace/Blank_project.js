import React from "react";
import "./Blank_project.css";
import create_back from "../assets/create_back.svg";
import scrumboard from "../assets/scrumboard.svg";
import { Link, useHistory } from "react-router-dom";
import { TextInput } from "evergreen-ui";

function Blank_project() {
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
                <p className="name">Name</p>
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
            <div className="color_container"></div>
            <div className="board_container">
                <img src={scrumboard} alt="" height="442" width="663" />
            </div>
        </div>
    );
}

export default Blank_project;
