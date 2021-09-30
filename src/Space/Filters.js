import React, { useState } from "react";
import Header from "./Header";
import "./Filters.css";
import Calendar from "react-calendar";
import sun from "../assets/sun.svg";
import cloud from "../assets/cloud.svg";
import camera from "../assets/camera.svg";
import elliblue from "../assets/elliblue.svg";
import ellirose from "../assets/ellirose.svg";
import elliyellow from "../assets/elliyellow.svg";

function Filters() {
    const [value, onChange] = useState(new Date());
    return (
        <div>
            <Header />
            <div className="leftmenu">
                <Calendar onChange={onChange} value={value} />
                <div className="leftmenu_contents">
                    <div>
                        <div className="img">
                            <img src={sun} alt="" />
                        </div>
                        <p className="temp">
                            55º<span>/40º</span>
                        </p>
                        <p className="today">
                            TODAY<span>2/27/2021</span>
                        </p>
                    </div>
                    <div className="title">
                        <p>All-Hands Company Meeting</p>
                    </div>
                    <div className="time">
                        <img src={elliblue} alt="" />
                        <p>8:30 - 9:00 AM</p>
                        <div className="camera">
                            <img src={camera} alt="" />
                        </div>
                    </div>
                    <div className="time_sub">
                        <p>Monthly catch-up</p>
                    </div>
                    <div className="time">
                        <img src={elliblue} alt="" />
                        <p>8:30 - 9:00 AM</p>
                        <div className="camera">
                            <img src={camera} alt="" />
                        </div>
                    </div>
                    <div className="time_sub">
                        <p>Quarterly review</p>
                        <div>https://zoom.us/i/1983475281</div>
                    </div>
                    <div>
                        <div className="img">
                            <img src={sun} alt="" />
                        </div>
                        <p className="temp">
                            55º<span>/40º</span>
                        </p>
                        <p className="others">
                            TOMORROW<span>2/28/2021</span>
                        </p>
                    </div>
                    <div className="time">
                        <img src={ellirose} alt="" />
                        <p>8:30 - 9:00 AM</p>
                        <div className="camera">
                            <img src={camera} alt="" />
                        </div>
                    </div>
                    <div className="time_sub">
                        <p>Visit to discuss improvements</p>
                        <div>https://zoom.us/i/1983475281</div>
                    </div>
                    <div className="time">
                        <img src={elliblue} alt="" />
                        <p>8:30 - 9:00 AM</p>
                        <div className="camera">
                            <img src={camera} alt="" />
                        </div>
                    </div>
                    <div className="time_sub">
                        <p>Presentation of new products and cost structure</p>
                    </div>
                    <div>
                        <div className="img">
                            <img src={cloud} alt="" />
                        </div>
                        <p className="temp">
                            55º<span>/40º</span>
                        </p>
                        <p className="others">
                            MONDAY<span>3/1/2021</span>
                        </p>
                    </div>
                    <div className="time">
                        <img src={ellirose} alt="" />
                        <p>8:30 - 9:00 AM</p>
                        <div className="camera">
                            <img src={camera} alt="" />
                        </div>
                    </div>
                    <div className="time_sub">
                        <p className="time_sub_">City Sales Pitch</p>
                        <div>
                            <p>https://zoom.us/i/1983475281</p>
                        </div>
                    </div>
                    <div>
                        <div className="img">
                            <img src={cloud} alt="" />
                        </div>
                        <p className="temp">
                            55º<span>/40º</span>
                        </p>
                        <p className="others">
                            TUESDAY<span>3/1/2021</span>
                        </p>
                    </div>
                    <div className="time">
                        <img src={elliyellow} alt="" />
                        <p>8:30 - 9:00 AM</p>
                        <div className="camera">
                            <img src={camera} alt="" />
                        </div>
                    </div>
                    <div className="time_sub">
                        <p>Visit to discuss improvements</p>
                    </div>
                    <div>
                        <div className="img">
                            <img src={cloud} alt="" />
                        </div>
                        <p className="temp">
                            55º<span>/40º</span>
                        </p>
                        <p className="others">
                            WEDNESDAY<span>3/1/2021</span>
                        </p>
                    </div>
                    <div className="time">
                        <img src={elliblue} alt="" />
                        <p>8:30 - 9:00 AM</p>
                        <div className="camera">
                            <img src={camera} alt="" />
                        </div>
                    </div>
                    <div className="time_sub">
                        <p>Meeting to talk about Ross contract</p>
                    </div>
                    <div className="time">
                        <img src={elliblue} alt="" />
                        <p>8:30 - 9:00 AM</p>
                        <div className="camera">
                            <img src={camera} alt="" />
                        </div>
                    </div>
                    <div className="time_sub">
                        <p>Meeting to discuss the new proposal</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filters;
