import React from "react";
import "./Email_verification.css";
import deski_ash from "../assets/deski_ash.svg";
import mail_sent from "../assets/mail_sent.svg";
import { useHistory, Link } from "react-router-dom";

function Email_verification() {
    let history = useHistory();

    return (
        <div>
            <div className="email">
                <div className="create_site">
                    <img src={deski_ash} alt="" className="create_site_logo" height="80" width="120" />
                </div>
                <h3>Great, Check your inbox</h3>
                <div className="create_site">
                    <img src={mail_sent} alt="" height="220" width="220" className="mailsent" />
                </div>
                <p>We have emailed a verification link to:</p>
                <p>
                    <span className="bold">ebfshsbvdv.@gmail.com</span>
                </p>
                <p>It will expire shortly, so verify soon</p>
                <br></br>
                <p>Remember to check your spam folder</p>
                <div className="create_site">
                    <button
                        className="resend_email"
                        onClick={() => {
                            history.push("/setting_up");
                        }}
                    >
                        Resend email
                    </button>
                </div>
                <p>
                    <span className="bold">Need to change your email address?</span>
                </p>

                <p>
                    You will need to
                    <Link to="/signup" className="fp_link">
                        <span className="blue_text"> create a new account</span>
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Email_verification;
