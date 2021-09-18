import React, { useState } from "react";
import "./Signup.css";
import path from "../assets/path.svg";
import eye from "../assets/eye.svg";
import deski_white from "../assets/deski_white.svg";
import google_text from "../assets/google_text.svg";
import { Pane, TextInput } from "evergreen-ui";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

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

function Signup() {
    let history = useHistory();
    const [incorrect, SetIncorrect] = React.useState(false);

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    return (
        <div>
            <Desktop>
                <div className="su">
                    <img src={path} alt="" className="path" />
                    <div className="logo">
                        <img src={deski_white} alt="" height="80" width="120" />
                    </div>
                    <div className="signup">
                        <Pane className="signup_pane">
                            <h1>Get Started</h1>
                            <p className="title">Start your free account</p>
                            {incorrect && (
                                <p className="invalid">*Already exists an account registered with this email address</p>
                            )}
                            <div className="get_started">
                                <p className="required">Work Email</p>
                                <TextInput
                                    onInput={(e) => SetIncorrect(true)}
                                    width={300}
                                    borderRadius={2}
                                    borderColor="#c5c5c5"
                                />
                                <p className="required">Password</p>
                                <TextInput
                                    width={300}
                                    borderColor="#c5c5c5"
                                    borderRadius={2}
                                    type={passwordShown ? "text" : "password"}
                                />
                                <div className="eye">
                                    <img src={eye} alt="" onClick={togglePasswordVisiblity} width="12" height="12" />
                                </div>
                                <div className="name">
                                    <p className="required">First Name:</p>
                                    <TextInput width={140} borderRadius={2} borderColor="#c5c5c5" />
                                    <div className="inline_text">
                                        <p className="required">Last Name:</p>
                                        <TextInput width={140} borderRadius={2} borderColor="#c5c5c5" />
                                    </div>
                                </div>
                                <p className="content">
                                    By clicking below, you agree to the deski Cloud
                                    <a
                                        href="https://deski-c8e53.web.app/termsofservice"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="signup_link"
                                    >
                                        Terms of Service
                                    </a>
                                </p>
                                <p className="content content_">
                                    and
                                    <a
                                        href="https://deski-c8e53.web.app/privacypolicy"
                                        target="_blank"
                                        className="signup_link"
                                        rel="noreferrer"
                                    >
                                        Privacy Policy
                                    </a>
                                </p>
                                <button
                                    className="signup_continue"
                                    onClick={() => {
                                        history.push("/create_site");
                                    }}
                                >
                                    Continue
                                </button>
                            </div>
                            <p className="or">OR</p>

                            <button
                                className="signup_btn"
                                onClick={() => {
                                    history.push("/create_site");
                                }}
                            >
                                <img src={google_text} alt="" height="16" width="250" />
                            </button>

                            <p className="last">NO CREDIT CARD REQUIRED</p>
                        </Pane>
                    </div>
                </div>
            </Desktop>
            <Mobile>
                <div className="su">
                    <img src={path} alt="" className="path" />
                    <div className="mob_logo">
                        <img src={deski_white} alt="" height="40" width="70" />
                    </div>
                    <div className="signup">
                        <Pane className="mob_signup_pane">
                            <h1>Get Started</h1>
                            <p className="title">Start your free account</p>
                            {incorrect && (
                                <p className="invalid">*Already exists an account registered with this email address</p>
                            )}
                            <div className="get_started">
                                <p className="required">Work Email</p>
                                <TextInput
                                    width={200}
                                    onInput={(e) => SetIncorrect(true)}
                                    borderRadius={2}
                                    borderColor="#c5c5c5"
                                />
                                <p className="required">Password</p>
                                <TextInput
                                    width={200}
                                    borderColor="#c5c5c5"
                                    borderRadius={2}
                                    type={passwordShown ? "text" : "password"}
                                />
                                <div className="eye">
                                    <img src={eye} alt="" onClick={togglePasswordVisiblity} width="12" height="12" />
                                </div>
                                <div className="name">
                                    <p className="required">First Name:</p>
                                    <TextInput width={200} borderRadius={2} borderColor="#c5c5c5" />

                                    <p className="required">Last Name:</p>
                                    <TextInput width={200} borderRadius={2} borderColor="#c5c5c5" />
                                </div>
                                <p className="content">
                                    By clicking below, you agree to the deski Cloud
                                    <a
                                        href="https://deski-c8e53.web.app/termsofservice"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="signup_link"
                                    >
                                        Terms of Service
                                    </a>
                                </p>
                                <p className="content content_">
                                    and
                                    <a
                                        href="https://deski-c8e53.web.app/privacypolicy"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="signup_link"
                                    ></a>
                                </p>
                                <button
                                    className="mob_signup_continue"
                                    onClick={() => {
                                        history.push("/create_site");
                                    }}
                                >
                                    Continue
                                </button>
                            </div>
                            <p className="or">OR</p>

                            <button
                                className="mob_signup_btn"
                                onClick={() => {
                                    history.push("/create_site");
                                }}
                            >
                                <img src={google_text} alt="" height="13" width="150" />
                            </button>

                            <p className="last">NO CREDIT CARD REQUIRED</p>
                        </Pane>
                    </div>
                </div>
            </Mobile>
            <Tablet>
                <div className="su">
                    <img src={path} alt="" className="path" />
                    <div className="tab_logo">
                        <img src={deski_white} alt="" height="80" width="120" />
                    </div>
                    <div className="signup">
                        <Pane className="signup_pane">
                            <h1>Get Started</h1>
                            <p className="title">Start your free account</p>
                            {incorrect && (
                                <p className="invalid">*Already exists an account registered with this email address</p>
                            )}
                            <div className="get_started">
                                <p className="required">Work Email</p>
                                <TextInput
                                    width={300}
                                    onInput={(e) => SetIncorrect(true)}
                                    borderRadius={2}
                                    borderColor="#c5c5c5"
                                />
                                <p className="required">Password</p>
                                <TextInput
                                    width={300}
                                    borderColor="#c5c5c5"
                                    borderRadius={2}
                                    type={passwordShown ? "text" : "password"}
                                />
                                <div className="eye">
                                    <img src={eye} alt="" onClick={togglePasswordVisiblity} width="12" height="12" />
                                </div>
                                <div className="name">
                                    <p className="required">First Name:</p>
                                    <TextInput width={140} borderRadius={2} borderColor="#c5c5c5" />
                                    <div className="inline_text">
                                        <p className="required">Last Name:</p>
                                        <TextInput width={140} borderRadius={2} borderColor="#c5c5c5" />
                                    </div>
                                </div>
                                <p className="content">
                                    By clicking below, you agree to the deski Cloud
                                    <a
                                        href="https://deski-c8e53.web.app/termsofservice"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="signup_link"
                                    >
                                        Terms of Service
                                    </a>
                                </p>
                                <p className="content content_">
                                    and
                                    <a
                                        href="https://deski-c8e53.web.app/privacypolicy"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="signup_link"
                                    ></a>
                                </p>
                                <button
                                    className="signup_continue"
                                    onClick={() => {
                                        history.push("/create_site");
                                    }}
                                >
                                    Continue
                                </button>
                            </div>
                            <p className="or">OR</p>

                            <button
                                className="signup_btn"
                                onClick={() => {
                                    history.push("/create_site");
                                }}
                            >
                                <img src={google_text} alt="" height="16" width="250" />
                            </button>

                            <p className="last">NO CREDIT CARD REQUIRED</p>
                        </Pane>
                    </div>
                </div>
            </Tablet>
        </div>
    );
}

export default Signup;
