import React from "react";
import "./Template.css";
import Workplace from "../Workplace/Workplace";
import Header from "../Workplace/Header";
import { Pane } from "evergreen-ui";
import { Link } from "react-router-dom";

function Template() {
    return (
        <div>
            <Header />
            <Workplace />
            <div className="template">
                <div className="template_main_title">
                    <h1>Standardize your work with</h1>
                </div>
                <div className="template_title">
                    <h1>customizable templates</h1>
                </div>
                <div className="template_card">
                    <Link to="/login">
                        <Pane className="template_panerow1frst" elevation={2}>
                            <p className="card_head">Use template</p>
                            <p className="card_title">Project Planning</p>
                            <p className="card_des">
                                Customer stories? Sprints? Epics? If hearing those words gets you excited for rapid product
                                development, then this is the template for you. This product planning template is perfect
                                for teams of all sizes working throughout the product life cycle
                            </p>
                        </Pane>
                    </Link>

                    <Link to="/login">
                        <Pane className="template_panerow1" elevation={2}>
                            <p className="card_head">Use template</p>
                            <p className="card_title">Bug Tracking</p>
                            <p className="card_des">
                                Itching for a better debugging process? This bug tracking system is ideal for QA analysts,
                                test engineers, or any fast-moving team that needs a collaborative issue tracker to keep
                                them on task.
                            </p>
                        </Pane>
                    </Link>

                    <Pane className="template_panerow1" elevation={2}>
                        <p className="card_headred">Unavilable</p>
                        <p className="card_title">Marketing</p>
                        <p className="card_des">
                            Performance marketing campaigns can get complicated. But thanks to this template, tracking those
                            campaigns doesn’t need to be. Use this template to track your spend, conversions, and return on
                            investment.
                        </p>
                    </Pane>
                </div>

                <div className="template_card">
                    <Pane className="template_panerow2frst" elevation={2}>
                        <p className="card_headred">Unavilable</p>
                        <p className="card_title">User Research</p>
                        <p className="card_des">
                            User research is the lifeblood of any product organization, and learning from your customers
                            through a thoughtful UX research program is essential for product evolution.
                        </p>
                    </Pane>

                    <Pane className="template_panerow2" elevation={2}>
                        <p className="card_headred">Unavilable</p>
                        <p className="card_title">Digital Video Production</p>
                        <p className="card_des">
                            Video production can seem daunting at first, but the key to any complicated, collaborative
                            project is organization.This digital video product template is perfect for keeping your entire
                            team.​
                        </p>
                    </Pane>

                    <Pane className="template_panerow2" elevation={2}>
                        <p className="card_headred">Unavilable</p>
                        <p className="card_title">Event Planning</p>
                        <p className="card_des">
                            Managing events is one part coordination, one part collaboration, and one part fire juggling.
                            This template helps you catalog every moving part, person, and place. It’s flexible enough for
                            every stage of event planning
                        </p>
                    </Pane>
                </div>
            </div>
        </div>
    );
}

export default Template;
