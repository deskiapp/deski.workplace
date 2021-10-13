import React,{useEffect,useState} from "react";
import "./Setting_up.css";
import deski_ash from "../assets/deski_ash.svg";
import business_team from "../assets/business_team.png";
import {useHistory} from 'react-router-dom'

function Setting_up() {

        let history = useHistory();
        

        const [value, setValue] = React.useState(0);
      
        useEffect(() => {
          setValue(10 * 45);
        
        });
    setTimeout(function(){history.push("/workplace")},2000);

    const containerStyles = {
        height: 7,
        width: "450px",
        backgroundColor: "#dfe1ef",
        borderRadius: 50,
        marginTop: 30,
        marginBottom: 80,
    };

    const fillerStyles = {
        height: "100%",
        width: `${value}px`,
        transition: '2s ease',
     
        backgroundColor: "#42526e",
        borderRadius: "inherit",
        textAlign: "right",
    };
    return (
        <div>
            <div className="setting_up">
                <div className="create_site">
                    <img src={deski_ash} alt="" className="create_site_logo" height="80" width="120" />
                </div>
                <h1>One moment your, site is starting up</h1>
                <div className="create_site"> 
                    <img src={business_team} alt="" className="business_team" />
 
                </div>
                <div className="create_site">
                    <div style={containerStyles}>
                        <div style={fillerStyles}></div>
                    </div>
                </div>
                <p>Thanks for signing up! our robots are working on your deski cloud site</p>
                <p>This won't take more than a minute or two, you'll be taken there once it's ready</p>
            </div>
        </div>
    );
}

export default Setting_up;
