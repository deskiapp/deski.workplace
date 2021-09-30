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
import Login from "./Authentication/Login";
import Signup from "./Authentication/Signup";
import Create_site from "./Authentication/Create_site";
import Setting_up from "./Authentication/Setting_up";
import Email_verification from "./Authentication/Email_verification";
import Forgot_password from "./Authentication/Forgot_password";
import Template from "./Workplace/Template";
import Templates from "./Workplace/Templates";
import Workplace from "./Workplace/Workplace";
import Calendars from "./Space/Calendars";
import Kanban from "./Workplace/Kanban";
import Blank_project from "./Workplace/Blank_project";
import Feed from "./Workplace/Feed";
import Create_new from "./Workplace/Create_new";
import Account from "./Profile/Account";
import Collaborators from "./Profile/Collaborators";
import Workspaces from "./Profile/Workspaces";
import Referrals from "./Profile/Referrals";
import User_details from "./Profile/User_details";
import Workplace_trash from "./Workplace/Workplace_trash";
import Profile_trash from "./Profile/Profile_trash";
import Dashboard from "./Space/Dashboard";
import People from "./Space/People";
import Works from "./Space/Works";
import Filters from "./Space/Filters";
import Create from "./Space/Create";
import Settings from "./Space/Settings";
import Board from "./Space/Board/Board";
import View from "./Space/View";
import Calendar from "./Space/Calendar";
import Chart from "./Space/Chart";
import Table from "./Space/Table";
import Upgrad from "./Profile/Upgrad";
import List from "./Space/List";

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
                <Route path="/workplace" component={Workplace} />
                <Route path="/feed" component={Feed} />
                <Route path="/template" component={Template} />
                <Route path="/account" component={Account} />
                <Route path="/collaborators" component={Collaborators} />
                <Route path="/workspaces" component={Workspaces} />
                <Route path="/referrals" component={Referrals} />
                <Route path="/user_details" component={User_details} />
                <Route path="/workplace_trash" component={Workplace_trash} />
                <Route path="/profile_trash" component={Profile_trash} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/people" component={People} />
                <Route path="/works" component={Works} />
                <Route path="/filters" component={Filters} />
                <Route path="/create" component={Create} />
                <Route path="/settings" component={Settings} />
                <Route path="/board" component={Board} />
                <Route path="/table" component={Table} />
                <Route path="/gantt_chart" component={Chart} />
                <Route path="/calendar" component={Calendar} />
                <Route path="/create_view" component={View} />
                <Route path="/upgrade" component={Upgrad} />
                <Route path="/list" component={List} />
                <Route path="/new_project" component={Create_new} />
                <Route path="/blank_project" component={Blank_project} />
                <Route path="/templates" component={Templates} />
                <Route path="/kanban" component={Kanban} />
                <Route path="/calendars" component={Calendars} />
            </Router>
        </div>
    );
}

export default App;
