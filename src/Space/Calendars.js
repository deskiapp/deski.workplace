import React, { useState } from "react";
import "./Calendars.css";
import Calendar from "react-calendar";
import sun from "../assets/sun.svg";
import cloud from "../assets/cloud.svg";
import camera from "../assets/camera.svg";
import elliblue from "../assets/elliblue.svg";
import ellirose from "../assets/ellirose.svg";
import elliyellow from "../assets/elliyellow.svg";

function Calendars() {
    const [value, onChange] = useState(new Date());
    return (
        <div>
            <div className="leftmenu">
                <Calendar onChange={onChange} value={value} />
                <div className="leftmenu_contents">
                    <div>
                        <p className="today">
                            TODAY<span>2/27/2021</span>
                        </p>
                        <p className="temp">
                            55º<span>/40º</span>
                        </p>
                        <img src={sun} alt="" />
                    </div>
                    <div>
                        <p className="title">All-Hands Company Meeting</p>
                    </div>
                    <div className="time">
                        <img src={elliblue} alt="" />
                        <p>8:30 - 9:00 AM</p>
                        <img src={camera} alt="" />
                    </div>
                    <div className="time_sub">
                        <p>Monthly catch-up</p>
                    </div>
                    <div className="time">
                        <img src={elliblue} alt="" />
                        <p>8:30 - 9:00 AM</p>
                        <img src={camera} alt="" />
                    </div>
                    <div className="time_sub">
                        <p>Quarterly review</p>
                        <span>https://zoom.us/i/1983475281</span>
                    </div>
                    <div>
                        <p className="others">
                            TOMORROW<span>2/28/2021</span>
                        </p>
                        <p className="temp">
                            55º<span>/40º</span>
                        </p>
                        <img src={sun} alt="" />
                    </div>
                    <div className="time">
                        <img src={ellirose} alt="" />
                        <p>8:30 - 9:00 AM</p>
                        <img src={camera} alt="" />
                    </div>
                    <div className="time_sub">
                        <p>Visit to discuss improvements</p>
                        <span>https://zoom.us/i/1983475281</span>
                    </div>
                    <div className="time">
                        <img src={elliblue} alt="" />
                        <p>8:30 - 9:00 AM</p>
                        <img src={camera} alt="" />
                    </div>
                    <div className="time_sub">
                        <p>Presentation of new products and cost structure</p>
                    </div>
                    <div>
                        <p className="others">
                            MONDAY<span>3/1/2021</span>
                        </p>
                        <p className="temp">
                            55º<span>/40º</span>
                        </p>
                        <img src={sun} alt="" />
                    </div>
                    <div className="time">
                        <img src={ellirose} alt="" />
                        <p>8:30 - 9:00 AM</p>
                        <img src={camera} alt="" />
                    </div>
                    <div className="time_sub">
                        <p>City Sales Pitch</p>
                        <span>https://zoom.us/i/1983475281</span>
                    </div>
                    <div>
                        <p className="others">
                            TUESDAY<span>3/1/2021</span>
                        </p>
                        <p className="temp">
                            55º<span>/40º</span>
                        </p>
                        <img src={sun} alt="" />
                    </div>
                    <div className="time">
                        <img src={elliyellow} alt="" />
                        <p>8:30 - 9:00 AM</p>
                        <img src={camera} alt="" />
                    </div>
                    <div className="time_sub">
                        <p>Visit to discuss improvements</p>
                    </div>
                    <div>
                        <p className="others">
                            WEDNESDAY<span>3/1/2021</span>
                        </p>
                        <p className="temp">
                            55º<span>/40º</span>
                        </p>
                        <img src={sun} alt="" />
                    </div>
                    <div className="time">
                        <img src={elliblue} alt="" />
                        <p>8:30 - 9:00 AM</p>
                        <img src={camera} alt="" />
                    </div>
                    <div className="time_sub">
                        <p>Meeting to talk about Ross contract</p>
                    </div>
                    <div className="time">
                        <img src={elliblue} alt="" />
                        <p>8:30 - 9:00 AM</p>
                        <img src={camera} alt="" />
                    </div>
                    <div className="time_sub">
                        <p>Meeting to discuss the new proposal</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calendars;
