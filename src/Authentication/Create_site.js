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


    const emaildata = JSON.stringify(localStorage.getItem('data'))
    
    let history = useHistory();
    const [incorrect, SetIncorrect] = React.useState(false);
    const [correct, SetCorrect] = React.useState(false);


    
    const [username, setUsername] = useState("");





    const CheckUsername = (props) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        
        var urlencoded = new URLSearchParams();
        urlencoded.append("username", username);
    
        
        var checkuserRequest = {
          method: 'POST',
          headers: myHeaders,
          body: urlencoded,
          redirect: 'follow'
        };

        fetch("http://18.116.203.74:6769/checkUsername", checkuserRequest)
      .then(response => {
        if (response.ok){
          response.json().then(json => {
            console.log(json.message)
            console.log(username)


             if(parseInt(json.message) === 0 ){

                 AddUsername();
           }
             else  if(parseInt(json.message) === 1) {

                   SetIncorrect(true);
                
                }

          })
        }
     
        
      })
      .catch(error => console.log('error: ', error)
   )

}
    

    const AddUsername = (props) =>{


        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (dt + Math.random()*16)%16 | 0;
            dt = Math.floor(dt/16);
            return (c=='x' ? r :(r&0x3|0x8)).toString(16);
        });


        if (username === "" || username.length >7) {
          
            
            } else {
               
                var urlencoded = new URLSearchParams();
                urlencoded.append("firebaseUid", uuid);
                urlencoded.append("userId", "");
                urlencoded.append("username", username);
                urlencoded.append("emailId", emaildata);
                urlencoded.append("timeStamp", new Date());

                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/x-www-form-urlencoded");


                var requestOptions = {
                  method: 'POST',
                  headers: myHeaders,
                  body: urlencoded,
                  redirect: 'follow' 
                };
  
             
                
                    fetch("http://18.116.203.74:6769/addUsername", requestOptions)
                    .then(response => {
                      if (response.ok){
                        response.json().then(json => {
                            console.log(username) 
                           

                                SetCorrect(true)
                            

                                setTimeout(function(){history.push("/setting_up")},1000);
                       
                
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
                                CheckUsername("");
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
                                CheckUsername("");
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
                                CheckUsername("");
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
