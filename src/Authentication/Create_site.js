import React,{useState} from "react";
import "./Create_site.css";
import deski_ash from "../assets/deski_ash.svg";
import { Pane, TextInput } from "evergreen-ui";
import { useMediaQuery } from "react-responsive";
import { useHistory } from "react-router-dom";
import checkmark from "../assets/checkmark.svg";

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


function Create_site() {

    let history = useHistory();
    const [incorrect, SetIncorrect] = React.useState(false);
    const [correct, SetCorrect] = React.useState(false);


    const [username, setUsername] = useState("");

    const CreateSite = (props) =>{


        if (username === "") {
          
            
            } else {
               
                var urlencoded = new URLSearchParams();
                urlencoded.append("username", username);

                // var formBody = [];
                // for (var property in details) {
                //     var encodedKey = encodeURIComponent(property);
                //     var encodedValue = encodeURIComponent(details[property]);
                //     formBody.push(encodedKey + "=" + encodedValue);
                // }
                // formBody = formBody.join("&");

                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/x-www-form-urlencoded");


                var requestOptions = {
                  method: 'POST',
                  headers: myHeaders,
                  body: urlencoded,
                  redirect: 'follow'
                };
  
             
                
                    fetch("http://18.116.203.74:6769/checkUsername", requestOptions)
                    .then(response => {
                      if (response.ok){
                        response.json().then(json => {
                            console.log(username) 
                            console.log(json.message)   

                            if(parseInt(json.message) === 0 ){

                                SetCorrect(true)
                                SetIncorrect(false);

                                setTimeout(function(){history.push("/setting_up")},1000);
                           }
                             else  if(parseInt(json.message) === 1) {
    
                                   SetIncorrect(true);
                                   SetCorrect(false)
                                
                                }
                
                        })
                      }
                    })
                
                    .catch(error => console.log('error: ', error))
                
               
                }
            }


    return (
        <div>
            <Desktop>
                <div className="create_site">
                    <img src={deski_ash} alt="" className="create_site_logo" height="80" width="120" />
                </div>
                <div className="create_site">
                    <Pane className="create_site_pane">
                        <h1>Let's get started</h1>
                        <h4>Give your site a name</h4>
                        <p className="choose">Choose something familiar like your team and company</p>
                        <TextInput
                            width={322}
                        
                            onChange={(e)=>setUsername(e.target.value)}
                            border="solid 1.5px #c5c5c5"
                            backgroundColor="#fafbfc"
                            className="create_site_inputfield"
                            placeholder="Your-site-name                                                                   .deski.app"
                        />
                        {incorrect && <p className="invalid">*The username already exists</p>}
                        {correct && (
                            <p className="invalid_">
                                * Username available <img src={checkmark} alt="" height={9} />
                            </p>
                        )}
                        <button
                            className={(username === "") ? "create_site_button" : "create_site_button_active"}
                            onClick={() => {
                                CreateSite("");
                            }}
                        >
                            Continue
                        </button>
                    </Pane>
                </div>
            </Desktop>
            <Mobile>
                <div className="create_site">
                    <img src={deski_ash} alt="" className="create_site_logo" height="80" width="120" />
                </div>
                <div className="create_site">
                    <Pane className="mob_create_site_pane">
                        <h1>Let's get started</h1>
                        <h4>Give your site a name</h4>
                        <p className="choose">Choose something familiar like your team and company</p>
                        <TextInput
           
                            onChange={(e)=>setUsername(e.target.value)}


                            width={220}
                            borderColor="#c5c5c5"
                            backgroundColor="#fafbfc"
                            className="mob_create_site_inputfield"
                            placeholder="Your-site-name                               .deski.app"
                        />
                        {incorrect && <p className="invalid">*The username already exists</p>}
                        {correct && (
                            <p className="invalid_">
                                * Username available <img src={checkmark} alt="" height={9} />
                            </p>
                        )}
                        <button
                            className={correct ? "mob_create_site_button_active" : "mob_create_site_button"}
                            onClick={() => {
                                CreateSite("");
                            }}

                        >
                            Continue
                        </button>
                    </Pane>
                </div>
            </Mobile>
            <Tablet>
                <div className="create_site">
                    <img src={deski_ash} alt="" className="create_site_logo" height="80" width="120" />
                </div>
                <div className="create_site">
                    <Pane className="create_site_pane">
                        <h1>Let's get started</h1>
                        <h4>Give your site a name</h4>
                        <p className="choose">Choose something familiar like your team and company</p>
                        <TextInput
    
                            onChange={(e)=>setUsername(e.target.value)}


                            width={322}
                            borderColor="#c5c5c5"
                            backgroundColor="#fafbfc"
                            className="create_site_inputfield"
                            placeholder="Your-site-name                                                                   .deski.app"
                        />
                        {incorrect && <p className="invalid">*The username already exists</p>}
                        {correct && (
                            <p className="invalid_">
                                * Username available <img src={checkmark} alt="" height={9} />
                            </p>
                        )}
                        <button
                            className={correct ? "create_site_button_active" : "create_site_button"}
                            onClick={() => {
                                CreateSite("");
                            }}
                        >
                            Continue
                        </button>
                    </Pane>
                </div>
            </Tablet>
        </div>
    );
}

export default Create_site;
