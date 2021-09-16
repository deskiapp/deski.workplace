import React from "react";
import "./Forgot_password.css";
import deski_white from "../assets/deski_white.svg";
import path from "../assets/path.svg";
import { Pane, TextInput } from "evergreen-ui";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

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

function Forgot_password() {
    const [incorrect, SetIncorrect] = React.useState(false);

    return (
        <div>
            <Desktop>
                <div>
                    <img src={path} alt="" className="path" />
                    <div className="logo">
                        <img src={deski_white} alt="" height="80" width="120" />
                    </div>
                    <div className="forgot_password">
                        <Pane className="forgt_pw_pane">
                            <p className="pane_title">Can't login</p>
                            {incorrect && (
                                <p className="invalid">*The email address is not enrolled with an organization</p>
                            )}
                            <p className="text_name">We'll send recovery link to</p>
                            <TextInput
                                width={322}
                                borderColor="#c5c5c5"
                                className="forgt_pw_inputfield"
                                placeholder="Enter email"
                                onInput={(e) => SetIncorrect(true)}
                            />
                            <button className="forgt_pw_button">Continue</button>
                            <Link to="/" className="fp_link">
                                <p className="return">Return to login</p>
                            </Link>
                        </Pane>
                    </div>
                </div>
            </Desktop>
            <Mobile>
                <div>
                    <img src={path} alt="" className="path" />
                    <div className="mob_logo">
                        <img src={deski_white} alt="" height="40" width="70" />
                    </div>
                    <div className="forgot_password">
                        <Pane className="mob_forgt_pw_pane">
                            <p className="mob_pane_title">Can't login</p>
                            {incorrect && (
                                <p className="invalid">*The email address is not enrolled with an organization</p>
                            )}
                            <p className="mob_text_name">We'll send recovery link to</p>
                            <TextInput
                                width={220}
                                onInput={(e) => SetIncorrect(true)}
                                borderColor="#c5c5c5"
                                className="mob_forgt_pw_inputfield"
                                placeholder="Enter email"
                            />
                            <button className="mob_forgt_pw_button">Continue</button>
                            <Link to="/" className="fp_link">
                                <p className="return">Return to login</p>
                            </Link>
                        </Pane>
                    </div>
                </div>
            </Mobile>
            <Tablet>
                <div>
                    <img src={path} alt="" className="path" />
                    <div className="tab_logo">
                        <img src={deski_white} alt="" height="80" width="120" />
                    </div>
                    <div className="forgot_password">
                        <Pane className="forgt_pw_pane">
                            <p className="pane_title">Can't login</p>
                            {incorrect && (
                                <p className="invalid">*The email address is not enrolled with an organization</p>
                            )}
                            <p className="text_name">We'll send recovery link to</p>
                            <TextInput
                                width={322}
                                onInput={(e) => SetIncorrect(true)}
                                borderColor="#c5c5c5"
                                className="forgt_pw_inputfield"
                                placeholder="Enter email"
                            />
                            <button className="forgt_pw_button">Continue</button>
                            <Link to="/" className="fp_link">
                                <p className="return">Return to login</p>
                            </Link>
                        </Pane>
                    </div>
                </div>
            </Tablet>
        </div>
    );
}

export default Forgot_password;
