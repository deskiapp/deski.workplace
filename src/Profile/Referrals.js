import React from "react";
import "./Referrals.css";
import Header from "../Workplace/Header";
import Profile from "./Profile";

function Referrals() {
    return (
        <div>
            <Header />
            <Profile />
            <div className="referrals">
                <h2>Referrals and credits</h2>
                <div className="referrals_des">
                    <p className="title">TELL A FRIEND </p>
                    <p className="title right_p">YOUR CREDITS</p>
                    <p className="credit">Get $1 in credit for every person you refer to deski</p>
                    <p className="right_p credit">You currently have $2 in credit</p>
                    <p className="des">
                        You'll only receive credit when the person you invite signs up and verifies their email. You can
                        redeem this credit to upgrade a workspace to a plan. Referring someone below will not invite them to
                        your workspace or share any of your content with them. If you'd like to collaborate with someone,
                        you can add them as a collaborator to your space or workspace. You'll receive credit for both
                        referrals and collaborators once they sign up and verify their email addresses.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Referrals;
