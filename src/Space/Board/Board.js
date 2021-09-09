import React from "react";
import Header from "../Header";
import Space from "../Space";
import Epic1 from "./Epic1";
import Epic2 from "./Epic2";
import Epic3 from "./Epic3";
import Epic4 from "./Epic4";
import Epic5 from "./Epic5";
import Epic6 from "./Epic6";
import Epic7 from "./Epic7";
import Epic8 from "./Epic8";
import "./Board.css";
import { DragHandleVerticalIcon } from "evergreen-ui";

import avatar from "../../assets/avatar.jpg";
import avatar1 from "../../assets/avatar1.jpeg";
import avatar2 from "../../assets/avatar2.jpeg";
import add from "../../assets/add.svg";

function Board() {
    return (
        <div>
            <Header />
            <Space />
            <div className="board">
                <h2>Kanban Project</h2>
                <div className="bd_head">
                    <div>
                        <img src={avatar} alt="" className="bd_profiles" height="19" width="19" />
                    </div>
                    <div>
                        <img src={avatar1} alt="" className="bd_profiles" height="19" width="19" />
                    </div>
                    <div>
                        <img src={avatar2} alt="" className="bd_profiles" height="19" width="19" />
                    </div>
                    <div className="board_profile">
                        <p>+8</p>
                    </div>
                    <div className="epic">Epic</div>
                    <div className="epic">Label</div>
                </div>
                <div className="boards">
                    <div className="status">
                        <div className="status_header">
                            <DragHandleVerticalIcon className="bd_add" />
                            <img src={add} alt="" className="bd_add" height="14" width="10" />
                            <p>To-do-list</p>
                        </div>
                        <Epic1 />
                        <Epic2 />
                        <Epic3 />
                        <Epic4 />
                    </div>
                    <div className="status extra">
                        <div className="status_header">
                            <DragHandleVerticalIcon className="bd_add" />
                            <img src={add} alt="" className="bd_add" height="14" width="10" />
                            <p>Processing</p>
                        </div>
                        <Epic5 />
                        <Epic6 />
                        <Epic7 />
                    </div>
                    <div className="status extra">
                        <div className="status_header">
                            <DragHandleVerticalIcon className="bd_add" />
                            <img src={add} alt="" className="bd_add" height="14" width="10" />
                            <p>Done</p>
                        </div>
                        <Epic1 />
                        <Epic8 />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Board;
