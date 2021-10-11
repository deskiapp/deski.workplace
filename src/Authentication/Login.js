import React from "react";
import "./Login.css";
import path from "../assets/path.svg";
import deski_white from "../assets/deski_white.svg";
import google_text from "../assets/google_text.svg";
import { Pane, TextInput } from "evergreen-ui";
import { Link, useHistory } from "react-router-dom";
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

function Login() {
    let history = useHistory();

    return ( <
        div >
        <
        Desktop >
        <
        div >
        <
        img src = { path }
        alt = ""
        className = "path" / >
        <
        div className = "logo" >
        <
        img src = { deski_white }
        alt = ""
        height = "80"
        width = "120" / >
        <
        /div> <
        div className = "login" >
        <
        Pane className = "login_pane" >
        <
        p className = "p1" > Login to
        continue < /p> <
        h5 > Your teams site < /h5> <
        TextInput width = { 265 }
        className = "login_inputfield"
        borderRadius = { 2 }
        borderColor = "#dfe1e6"
        placeholder = "Enter email" /
        >
        <
        TextInput width = { 265 }
        type = "password"
        className = "login_inputfield"
        borderColor = "#dfe1e6"
        borderRadius = { 2 }
        placeholder = "Password" /
        >
        <
        button className = "login_continue"
        onClick = {
            () => {
                history.push("/home");
            }
        } >
        Continue <
        /button> <
        p className = "p2" > OR < /p> <
        button className = "login_btn"
        onClick = {
            () => {
                history.push("/home");
            }
        } >
        <
        img src = { google_text }
        alt = ""
        height = "16"
        width = "250" / >
        <
        /button> <
        div className = "border" > < /div> <
        div >
        <
        Link to = "forgot_password"
        className = "login_link" >
        Can 't login? <
        /Link> <
        ul >
        <
        li >
        <
        Link to = "/signup"
        className = "login_li" >
        Signup
        for an account <
        /Link> <
        /li> <
        /ul> <
        /div> <
        /Pane> <
        /div> <
        div className = "outside" >
        <
        a href = "https://deski-c8e53.web.app/privacypolicy"
        rel = "noreferrer"
        target = "_blank"
        className = "login_link" >
        Privacy policy <
        /a> <
        ul >
        <
        li className = "li" >
        <
        Link to = "#"
        className = "login_li" >
        User notice <
        /Link> <
        /li> <
        /ul> <
        /div> <
        div className = "end_div" >
        <
        div className = "end_border" > < /div> <
        /div> <
        /div> <
        /Desktop> <
        Mobile >
        <
        div >
        <
        img src = { path }
        alt = ""
        className = "path" / >
        <
        div className = "mob_logo" >
        <
        img src = { deski_white }
        alt = ""
        height = "40"
        width = "70" / >
        <
        /div> <
        div className = "login" >
        <
        Pane className = "mob_login_pane" >
        <
        p className = "p1" > Login to
        continue < /p> <
        h5 > Your teams site < /h5> <
        TextInput width = { 210 }
        className = "mob_login_inputfield"
        borderRadius = { 2 }
        borderColor = "#dfe1e6"
        placeholder = "Enter email" /
        >
        <
        TextInput width = { 210 }
        type = "password"
        className = "mob_login_inputfield"
        borderColor = "#dfe1e6"
        borderRadius = { 2 }
        placeholder = "Password" /
        >
        <
        button className = "mob_login_continue"
        onClick = {
            () => {
                history.push("/workplace");
            }
        } >
        Continue <
        /button> <
        p className = "p2" > OR < /p> <
        button className = "mob_login_btn"
        onClick = {
            () => {
                history.push("/workplace");
            }
        } >
        <
        img src = { google_text }
        alt = ""
        height = "13"
        width = "150" / >
        <
        /button> <
        div className = "mob_border" > < /div> <
        div >
        <
        Link to = "/forgot_password"
        className = "mob_login_link" >
        Can 't login? <
        /Link> <
        ul >
        <
        li >
        <
        Link to = "/signup"
        className = "mob_login_li" >
        Signup
        for an account <
        /Link> <
        /li> <
        /ul> <
        /div> <
        /Pane> <
        /div> <
        div className = "mob_outside" >
        <
        a href = "https://deski-c8e53.web.app/privacypolicy"
        rel = "noreferrer"
        target = "_blank"
        className = "mob_login_link" >
        Privacy policy <
        /a> <
        ul >
        <
        li className = "li" >
        <
        Link to = "#"
        className = "mob_login_li" >
        User notice <
        /Link> <
        /li> <
        /ul> <
        /div> <
        div className = "end_div" >
        <
        div className = "mob_end_border" > < /div> <
        /div> <
        /div> <
        /Mobile> <
        Tablet >
        <
        div >
        <
        img src = { path }
        alt = ""
        className = "path" / >
        <
        div className = "tab_logo" >
        <
        img src = { deski_white }
        alt = ""
        height = "80"
        width = "120" / >
        <
        /div> <
        div className = "login" >
        <
        Pane className = "login_pane" >
        <
        p className = "p1" > Login to
        continue < /p> <
        h5 > Your teams site < /h5> <
        TextInput width = { 265 }
        className = "login_inputfield"
        borderRadius = { 2 }
        borderColor = "#dfe1e6"
        placeholder = "Enter email" /
        >
        <
        TextInput width = { 265 }
        type = "password"
        className = "login_inputfield"
        borderColor = "#dfe1e6"
        borderRadius = { 2 }
        placeholder = "Password" /
        >
        <
        button className = "login_continue"
        onClick = {
            () => {
                history.push("/workplace");
            }
        } >
        Continue <
        /button> <
        p className = "p2" > OR < /p> <
        button className = "login_btn"
        onClick = {
            () => {
                history.push("/workplace");
            }
        } >
        <
        img src = { google_text }
        alt = ""
        height = "16"
        width = "250" / >
        <
        /button> <
        div className = "border" > < /div> <
        div >
        <
        Link to = "/forgot_password"
        className = "login_link" >
        Can 't login? <
        /Link> <
        ul >
        <
        li >
        <
        Link to = "/signup"
        className = "login_li" >
        Signup
        for an account <
        /Link> <
        /li> <
        /ul> <
        /div> <
        /Pane> <
        /div> <
        div className = "outside" >
        <
        a href = "https://deski-c8e53.web.app/privacypolicy"
        target = "_blank"
        rel = "noreferrer"
        className = "login_link" >
        Privacy policy <
        /a> <
        ul >
        <
        li className = "li" >
        <
        Link to = "#"
        className = "login_li" >
        User notice <
        /Link> <
        /li> <
        /ul> <
        /div> <
        div className = "end_div" >
        <
        div className = "end_border" > < /div> <
        /div> <
        /div> <
        /Tablet> <
        /div>
    );
}

export default Login;