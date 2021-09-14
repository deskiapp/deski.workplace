import React from "react";
import "./Upgrade.css";
import Header from "../Workplace/Header";

function Upgrad() {
    return (
        <div>
            <Header />
            <div>
                <div className="pricing">
                    <h1 className="developer">Developer</h1>
                    <h1 className="preview">Preview</h1>
                </div>
                <div className="pricing_version">
                    <h1 className="version">Version</h1>
                </div>
            </div>
        </div>
    );
}

export default Upgrad;
