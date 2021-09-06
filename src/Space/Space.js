import React from "react";
import "./Space.css";
import { Link, useLocation } from "react-router-dom";
import map from "../assets/map.svg";
import chart from "../assets/chart.svg";
import calendar from "../assets/calendar.svg";
import table from "../assets/table.svg";
import board from "../assets/board.svg";
import settings from "../assets/settings.svg";
import add from "../assets/add.svg";
import { SearchInput } from "evergreen-ui";

function Space() {
    const searchinput = {
        width: "210px",
        borderRadius: "4px",
        backgroundColor: "#efefef",
        border: "none",
        height: "30px",
    };
    const location = useLocation();
    const [selectedtabs, setSelectedTabs] = React.useState(0);

    React.useEffect(() => {
        // alert(location.pathname)
        if (location.pathname === "/dashboard") {
            setSelectedTabs(0);
        }

        if (location.pathname === "/board") {
            setSelectedTabs(1);
        }

        if (location.pathname === "/table") {
            setSelectedTabs(2);
        }

        if (location.pathname === "/gantt_chart") {
            setSelectedTabs(3);
        }

        if (location.pathname === "/calendar") {
            setSelectedTabs(4);
        }
        if (location.pathname === "/create_view") {
            setSelectedTabs(5);
        }
        if (location.pathname === "/settings") {
            setSelectedTabs(6);
        }
    });
    return (
        <div>
            <div className="space_sidebar">
                <SearchInput style={searchinput} className="search_input" placeholder="Find workspace view" />
                <p className="title">Agile Project Management</p>
                <Link to="/dashboard" className={selectedtabs === 0 ? "profile_links_selected" : "profile_links"}>
                    <img src={map} alt="" height="11" width="16" />
                    <p className="content">Epic Roadmap</p>
                </Link>
                <Link to="/board" className={selectedtabs === 1 ? "profile_links_selected" : "profile_links"}>
                    <img src={board} alt="" height="15" width="15" />
                    <p className="content">Board</p>
                </Link>
                <Link to="/table" className={selectedtabs === 2 ? "profile_links_selected" : "profile_links"}>
                    <img src={table} alt="" height="13" width="16" />
                    <p className="content">Table</p>
                </Link>
                <Link to="/gantt_chart" className={selectedtabs === 3 ? "profile_links_selected" : "profile_links"}>
                    <img src={chart} alt="" height="15" width="16" />
                    <p className="content">Gantt Chart</p>
                </Link>
                <Link to="/calendar" className={selectedtabs === 4 ? "profile_links_selected" : "profile_links"}>
                    <img src={calendar} alt="" height="13" width="16" />
                    <p className="content">Calendar</p>
                </Link>
                <Link to="/create_view" className={selectedtabs === 5 ? "profile_links_selected" : "profile_links"}>
                    <img src={add} alt="" height="12" width="16" />
                    <p className="content">Create View</p>
                </Link>
                <Link to="/settings" className={selectedtabs === 6 ? "profile_links_selected" : "profile_links"}>
                    <img src={settings} alt="" height="12" width="16" />
                    <p className="content">Settings</p>
                </Link>
            </div>
        </div>
    );
}

export default Space;
