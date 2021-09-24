import React from "react";
import "./Create_site.css";
import deski_ash from "../assets/deski_ash.svg";
import { Pane, TextInput } from "evergreen-ui";
import { useMediaQuery } from "react-responsive";
import { useHistory } from "react-router-dom";
import checkmark from "../assets/checkmark.svg";

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 951 });
    return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 950 });
    return isTablet ? children : null;
};
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
};

function Create_site() {
    const [value, setValue] = React.useState("");

    let history = useHistory();
    const [incorrect, SetIncorrect] = React.useState(false);
    const [correct, SetCorrect] = React.useState(false);

    return (
        <div>
            <Desktop>
                <div className="create_site">
                    <img src={deski_ash} alt="" className="create_site_logo" height="80" width="120" />
                </div>
                <div className="create_site">
                    <Pane className="create_site_pane">
                        <h1>Let's get started</h1>
                        <h4>Give your site a name</h4>
                        <p className="choose">Choose something familiar like your team and company</p>
                        <TextInput
                            width={322}
                            onInput={(e) => {
                                setValue(e.target.value);
                                if (value.length > 0) {
                                    SetIncorrect(true);
                                } else {
                                    SetIncorrect(false);
                                }
                                if (value.length == 0) {
                                    SetCorrect(true);
                                } else {
                                    SetCorrect(false);
                                }
                            }}
                            border="solid 1.5px #c5c5c5"
                            backgroundColor="#fafbfc"
                            className="create_site_inputfield"
                            placeholder="Your-site-name                                                                   .deski.app"
                        />
                        {incorrect && <p className="invalid">*The username already exists</p>}
                        {correct && (
                            <p className="invalid_">
                                * Username available <img src={checkmark} alt="" height={9} />
                            </p>
                        )}
                        <button
                            className={correct ? "create_site_button_active" : "create_site_button"}
                            onClick={() => {
                                history.push("/email_verification");
                            }}
                        >
                            Continue
                        </button>
                    </Pane>
                </div>
            </Desktop>
            <Mobile>
                <div className="create_site">
                    <img src={deski_ash} alt="" className="create_site_logo" height="80" width="120" />
                </div>
                <div className="create_site">
                    <Pane className="mob_create_site_pane">
                        <h1>Let's get started</h1>
                        <h4>Give your site a name</h4>
                        <p className="choose">Choose something familiar like your team and company</p>
                        <TextInput
                            onInput={(e) => {
                                setValue(e.target.value);
                                if (value.length > 0) {
                                    SetIncorrect(true);
                                } else {
                                    SetIncorrect(false);
                                }
                                if (value.length == 0) {
                                    SetCorrect(true);
                                } else {
                                    SetCorrect(false);
                                }
                            }}
                            width={220}
                            borderColor="#c5c5c5"
                            backgroundColor="#fafbfc"
                            className="mob_create_site_inputfield"
                            placeholder="Your-site-name                               .deski.app"
                        />
                        {incorrect && <p className="invalid">*The username already exists</p>}
                        {correct && (
                            <p className="invalid_">
                                * Username available <img src={checkmark} alt="" height={9} />
                            </p>
                        )}
                        <button
                            className={correct ? "mob_create_site_button_active" : "mob_create_site_button"}
                            onClick={() => {
                                history.push("/email_verification");
                            }}
                        >
                            Continue
                        </button>
                    </Pane>
                </div>
            </Mobile>
            <Tablet>
                <div className="create_site">
                    <img src={deski_ash} alt="" className="create_site_logo" height="80" width="120" />
                </div>
                <div className="create_site">
                    <Pane className="create_site_pane">
                        <h1>Let's get started</h1>
                        <h4>Give your site a name</h4>
                        <p className="choose">Choose something familiar like your team and company</p>
                        <TextInput
                            onInput={(e) => {
                                setValue(e.target.value);
                                if (value.length > 0) {
                                    SetIncorrect(true);
                                } else {
                                    SetIncorrect(false);
                                }
                                if (value.length == 0) {
                                    SetCorrect(true);
                                } else {
                                    SetCorrect(false);
                                }
                            }}
                            width={322}
                            borderColor="#c5c5c5"
                            backgroundColor="#fafbfc"
                            className="create_site_inputfield"
                            placeholder="Your-site-name                                                                   .deski.app"
                        />
                        {incorrect && <p className="invalid">*The username already exists</p>}
                        {correct && (
                            <p className="invalid_">
                                * Username available <img src={checkmark} alt="" height={9} />
                            </p>
                        )}
                        <button
                            className={correct ? "create_site_button_active" : "create_site_button"}
                            onClick={() => {
                                history.push("/email_verification");
                            }}
                        >
                            Continue
                        </button>
                    </Pane>
                </div>
            </Tablet>
        </div>
    );
}

export default Create_site;
