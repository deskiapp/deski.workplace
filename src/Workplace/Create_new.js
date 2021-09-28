import React from "react";
import "./Create_new.css";
import { Link, useHistory } from "react-router-dom";
import kanban from "../assets/kanban.svg";
import scrum from "../assets/scrum.svg";
import template from "../assets/template.svg";
import blank from "../assets/blank.svg";
import create_back from "../assets/create_back.svg";

function Create_new() {
    let history = useHistory();

    return (
        <div className="create_new">
            <div
                className="back"
                onClick={() => {
                    history.goBack();
                }}
            >
                <img src={create_back} alt="" height="14" width="14.97" />
            </div>
            <p>Create a new project</p>
            <span>How would you like to start?</span>
            <div className="projects">
                <Link to="/blank_project" className="links">
                    <div className="cards">
                        <div className="box">
                            <img src={blank} alt="" height="28.12" width="28.12" />
                        </div>
                        <div className="project_name">
                            <h1>Blank project</h1>
                            <p>Start from scratch</p>
                        </div>
                    </div>
                </Link>
                <div className="cards">
                    <div className="boxes">
                        <img src={kanban} alt="" height="40" width="40" />
                    </div>
                    <div className="project_name">
                        <h1>Kanban</h1>
                        <p>Advance your workflow</p>
                    </div>
                </div>
                <div className="cards">
                    <div className="boxes">
                        <img src={scrum} alt="" height="43.47" width="50.35" />
                    </div>
                    <div className="project_name">
                        <h1>Scrum</h1>
                        <p>Sprint towards project</p>
                    </div>
                </div>
                <div className="cards">
                    <div className="boxes">
                        <img src={template} alt="" height="43" width="34.3" />
                    </div>
                    <div className="project_name">
                        <h1>Templates</h1>
                        <p>Choose from library</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Create_new;
