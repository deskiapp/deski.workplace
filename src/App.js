import React from "react";
import "./App.css";

import "./fonts/gt-eesti-pro-display-thin.otf";
import "./fonts/gt-eesti-pro-display-bold.otf";
import "./fonts/gt-eesti-pro-display-medium.otf";
import "./fonts/gt-eesti-pro-display-light.otf";
import "./fonts/gt-eesti-pro-display-regular.otf";
import "./fonts/segoeui.ttf";
import "./fonts/seguisb.ttf";
import "./fonts/segoeuisl.ttf";


import { BrowserRouter as Router, Route } from "react-router-dom";
import business_team from "./assets/business_team.svg";
import Login from "./Authentication/Login";
import Signup from "./Authentication/Signup";
import Create_site from "./Authentication/Create_site";
import Setting_up from "./Authentication/Setting_up";
import Email_verification from "./Authentication/Email_verification";
import Forgot_password from "./Authentication/Forgot_password";
import Template from "./Workplace/Template";
import Home from "./Workplace/Home";
import Feed from "./Workplace/Feed";
import Account from "./Profile/Account";
import Collaborators from "./Profile/Collaborators";
import Workspaces from "./Profile/Workspaces";
import Referrals from "./Profile/Referrals";
import User_details from "./Profile/User_details";
import Workplace_trash from "./Workplace/Workplace_trash";
import Profile_trash from "./Profile/Profile_trash";

function App() {
    return (
        <div className="App">
            <Router>
                <Route path="/" exact component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/create_site" component={Create_site} />
                <Route path="/setting_up" component={Setting_up} />
                <Route path="/email_verification" component={Email_verification} />
                <Route path="/forgot_password" component={Forgot_password} />
                <Route path="/home" component={Home} />
                <Route path="/feed" component={Feed} />
                <Route path="/template" component={Template} />
                <Route path="/account" component={Account} />
                <Route path="/collaborators" component={Collaborators} />
                <Route path="/workspaces" component={Workspaces} />
                <Route path="/referrals" component={Referrals} />
                <Route path="/user_details" component={User_details} />
                <Route path="/workplace_trash" component={Workplace_trash} />
                <Route path="/profile_trash" component={Profile_trash} />
            </Router>
        </div>
    );
}

export default App;
