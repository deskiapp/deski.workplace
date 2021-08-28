import React from "react";
import "./App.css";

import "./fonts/gt-eesti-pro-display-thin.otf";
import "./fonts/gt-eesti-pro-display-bold.otf";
import "./fonts/gt-eesti-pro-display-light.otf";
import "./fonts/segoeui.ttf";
import "./fonts/seguisb.ttf";
import "./fonts/segoeuisl.ttf";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Authentication/Login";
import Signup from "./Authentication/Signup";
import Create_site from "./Authentication/Create_site";
import Setting_up from "./Authentication/Setting_up";
import Email_verification from "./Authentication/Email_verification";
import Forgot_password from "./Authentication/Forgot_password";
import Template from "./Workplace/Template";
import Home from "./Workplace/Home";
import Feed from "./Workplace/Feed";

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
            </Router>
        </div>
    );
}

export default App;
