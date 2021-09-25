import React, { useState } from "react";
import "./Workspace_list.css";
import { Link } from "react-router-dom";
import group_work from "../assets/group_work.svg";
import trash from "../assets/trash.svg";
import add from "../assets/add.svg";
import { Pane, SearchInput, DragHandleVerticalIcon } from "evergreen-ui";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const finalSpaceCharacters = [
    {
        id: "My First Workspace",
        name: "My First Workspace",
    },
    {
        id: "Workspace 2",
        name: "Workspace 2",
    },
    {
        id: "Workspace 3",
        name: "Workspace 3",
    },
    {
        id: "Workspace 4",
        name: "Workspace 4",
    },
    {
        id: "Workspace 5",
        name: "Workspace 5",
    },
    {
        id: "Workspace 6",
        name: "Workspace 6",
    },
    {
        id: "Workspace 7",
        name: "Workspace 7",
    },
    {
        id: "Workspace 8",
        name: "Workspace 8",
    },
    {
        id: "Workspace 9",
        name: "Workspace 9",
    },
    {
        id: "Workspace 10",
        name: "Workspace 10",
    },
    {
        id: "Workspace 11",
        name: "Workspace 11",
    },
    {
        id: "Workspace 12",
        name: "Workspace 12",
    },
    {
        id: "Workspace 13",
        name: "Workspace 13",
    },
    {
        id: "Workspace 14",
        name: "Workspace 14",
    },
];

function Workspace_list() {
    const [characters, updateCharacters] = useState(finalSpaceCharacters);

    function handleOnDragEnd(result) {
        if (!result.destination) return;
        const items = Array.from(characters);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        updateCharacters(items);
    }
    const searchinput = {
        width: "210px",
        borderRadius: "4px",
        backgroundColor: "#efefef",
        border: "none",
        height: "30px",
    };
    return (
        <div>
            <div className="sidebar">
                <Pane className="sidepane">
                    <SearchInput style={searchinput} className="searchinput" placeholder="Find a base workspace" />
                    <p className="wrk_title">Workspaces</p>
                    <DragDropContext onDragEnd={handleOnDragEnd}>
                        <Droppable droppableId="characters">
                            {(provided) => (
                                <div className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                                    {characters.map(({ id, name }, index) => {
                                        return (
                                            <Draggable key={id} draggableId={id} index={index}>
                                                {(provided) => (
                                                    <Link
                                                        to="#"
                                                        className="drag_links"
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                    >
                                                        <img src={group_work} alt="" height="13" width="13" />
                                                        <p className="img_title">{name}</p>
                                                        <DragHandleVerticalIcon className="dragicon" />
                                                    </Link>
                                                )}
                                            </Draggable>
                                        );
                                    })}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                    <Link to="#" className="dash_links">
                        <img src={add} alt="" height="10" width="10" />
                        <p className="img_titl">Add Workspace</p>
                    </Link>
                    <Link to="/workplace_trash" className="dash_links">
                        <img src={trash} alt="" height="10" width="10" />
                        <p className="img_titl">Trash</p>
                    </Link>
                </Pane>
            </div>
        </div>
    );
}

export default Workspace_list;
