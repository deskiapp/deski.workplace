import React,{useState} from "react";
import "./Login.css";
import path from "../assets/path.svg";
import deski_white from "../assets/deski_white.svg";
import google_text from "../assets/google_text.svg";
import { Pane, TextInput, toaster } from "evergreen-ui";
import { Link, useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import firebase from "../services/firebase";

const auth = firebase.auth();

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
    
    const [incorrect, SetIncorrect] = React.useState(false);
    const [googleincorrect, setGoogleincorrect] = React.useState(false);

    
    let history = useHistory();

 
    const [signupData, setSignUpData] = useState({
        email: "",
        password: "",
       
    });


  

    const handleChangeInput = (props) => (e) => {
        if (props === "email") {
            setSignUpData({
                email: e.target.value,
                password: signupData.password,
              
            });
        } else if (props === "password") {
            setSignUpData({
                email: signupData.email,
                password: e.target.value,
              
            });
  
    };
}

const handleSignup = (props) => {
  
            if(signupData.email===""){


            }else if(signupData.password===""){



            }else{

                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
                
                var urlencoded = new URLSearchParams();
                urlencoded.append("email", signupData.email);
                urlencoded.append("password",signupData.password);
                
             
                var requestOptions = {
                  method: 'POST',
                  headers: myHeaders,
                  body: urlencoded,
                  redirect: 'follow'
                };
                
                fetch("http://18.116.203.74:6769/login", requestOptions)
                  .then(response => {
                    if (response.ok){
                      response.json().then(json => {
                        console.log(json.user_email+" "+json.user_password)
                        console.log(signupData.email+" "+signupData.password)
   
                     
                           if(json.user_email == undefined || json.user_password == undefined){

                                SetIncorrect(true);
                            }
                            else  if(signupData.email.trim()===json.user_email.trim() && signupData.password.trim()=== json.user_password.trim()){
                                localStorage.setItem('data',signupData.email)
                                history.push('/setting_up')
                           }
                      })
                    }
                 
                    
                  })
                  
                  .catch(error => console.log('error: ', error)
               )

            }
           
         
        }
    
        const handleSignupWithGmail = (props) => {
            const googleProvider = new firebase.auth.GoogleAuthProvider();
            auth.signInWithPopup(googleProvider)
                .then((res) => {
                    console.log(res.user);
    
                    var displayName = res.user.displayName;
                    var email = res.user.email;
                    var firebaseUid = res.user.uid;
                    console.log(displayName + " --- " + email + " --- " + firebaseUid);
    
                    var details = {
                        
                        email: email,
                      
                    };
    
                    var formBody = [];
                    for (var property in details) {
                        var encodedKey = encodeURIComponent(property);
                        var encodedValue = encodeURIComponent(details[property]);
                        formBody.push(encodedKey + "=" + encodedValue);
                    }
                    formBody = formBody.join("&");
    

            fetch("http://18.116.203.74:6769/checkUser",  {
                        method: 'POST',
                     
                        headers: {
                          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                        },
                        body: formBody
                      }).then(response => {
                        if (response.ok){
                          response.json().then(json => {
                            console.log(json.message)

    
           
    
                             if(parseInt(json.message) === 1 ){
    
                                localStorage.setItem('data',email)
                           
                            history.push("/setting_up")

                               
                           }
                             else  if(parseInt(json.message) === 0) {
    
                               setGoogleincorrect(true)
                                
                                }
    
                          })
                        }
                     
                        
                      })

              
                    }).catch((error) => {
                      console.log(error.message)
                    })
              
              
                  }
        React.useState(() => {});



    return (
        <div>
            <Desktop>
                <div>
                    <img src={path} alt="" className="path" />
                    <div className="logo">
                        <img src={deski_white} alt="" height="80" width="120" />
                    </div>
                    <div className="login">
                        <Pane className="login_pane">
                            <p className="p1">Login to continue</p>
                            <h5>Your teams site</h5>
                            {incorrect && <p className="invalid">*The username or password is incorrect</p>}
                            {googleincorrect && <p className="invalid">*The user is not exist</p>}
                            <TextInput
                             
                                width={265}
                                className="login_inputfield"
                                borderRadius={2}
                                borderColor="#dfe1e6"
                                placeholder="Enter email"
                             
                                onChange={handleChangeInput("email")}
                            />
                            <TextInput
                                width={265}
                                type="password"
                                className="login_inputfield"
                                borderColor="#dfe1e6"
                                borderRadius={2}
                                placeholder="Password"
                                onChange={handleChangeInput("password")}
                            />
                            <button
                                className="login_continue"
                                onClick={() => {
                                    handleSignup("");
                                }}
                            >
                                Continue
                            </button>
                            <p className="p2">OR</p>
                            <button
                                className="login_btn"
                                onClick={() => {
                                    handleSignupWithGmail("");
                                }}
                            >
                                <img src={google_text} alt="" height="16" width="250" />
                            </button>
                            <div className="border"></div>
                            <div>
                                <Link to="forgot_password" className="login_link">
                                    Can't login?
                                </Link>
                                <ul>
                                    <li>
                                        <Link to="/signup" className="login_li">
                                            Signup for an account
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Pane>
                    </div>
                    <div className="outside">
                        <a
                            href="https://deski-c8e53.web.app/privacypolicy"
                            rel="noreferrer"
                            target="_blank"
                            className="login_link"
                        >
                            Privacy policy
                        </a>
                        <ul>
                            <li className="li">
                                <Link to="#" className="login_li">
                                    User notice
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="end_div">
                        <div className="end_border"></div>
                    </div>
                </div>
            </Desktop>
            <Mobile>
                <div>
                    <img src={path} alt="" className="path" />
                    <div className="mob_logo">
                        <img src={deski_white} alt="" height="40" width="70" />
                    </div>
                    <div className="login">
                        <Pane className="mob_login_pane">
                            <p className="p1">Login to continue</p>
                            <h5>Your teams site</h5>
                            {incorrect && <p className="invalid">*The username or password is incorrect</p>}
                            {googleincorrect && <p className="invalid">*The user is not exist</p>}


                            <TextInput
                                width={210}
                                className="mob_login_inputfield"
                                borderRadius={2}
                                borderColor="#dfe1e6"
                           
                                placeholder="Enter email"
                                onChange={handleChangeInput("email")}
                            />
                            <TextInput
                                width={210}
                                type="password"
                                className="mob_login_inputfield"
                                borderColor="#dfe1e6"
                                borderRadius={2}
                                placeholder="Password"
                                onChange={handleChangeInput("password")}
                            />
                            <button
                                className="mob_login_continue"
                                onClick={() => {
                                    handleSignup("");
                                }}
                            >
                                Continue
                            </button>
                            <p className="p2">OR</p>
                            <button
                                className="mob_login_btn"
                                onClick={() => {
                                    handleSignupWithGmail("");
                                }}
                            >
                                <img src={google_text} alt="" height="13" width="150" />
                            </button>
                            <div className="mob_border"></div>
                            <div>
                                <Link to="/forgot_password" className="mob_login_link">
                                    Can't login?
                                </Link>
                                <ul>
                                    <li>
                                        <Link to="/signup" className="mob_login_li">
                                            Signup for an account
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Pane>
                    </div>
                    <div className="mob_outside">
                        <a
                            href="https://deski-c8e53.web.app/privacypolicy"
                            rel="noreferrer"
                            target="_blank"
                            className="mob_login_link"
                        >
                            Privacy policy
                        </a>
                        <ul>
                            <li className="li">
                                <Link to="#" className="mob_login_li">
                                    User notice
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="end_div">
                        <div className="mob_end_border"></div>
                    </div>
                </div>
            </Mobile>
            <Tablet>
                <div>
                    <img src={path} alt="" className="path" />
                    <div className="tab_logo">
                        <img src={deski_white} alt="" height="80" width="120" />
                    </div>
                    <div className="login">
                        <Pane className="login_pane">
                            <p className="p1">Login to continue</p>
                            <h5>Your teams site</h5>
                            {incorrect && <p className="invalid">*The username or password is incorrect</p>}
                            {googleincorrect && <p className="invalid">*The user is not exist</p>}


                            <TextInput
                                width={265}
                                className="login_inputfield"
                                borderRadius={2}
                                borderColor="#dfe1e6"
                                placeholder="Enter email"
                                
                                onChange={handleChangeInput("email")}
                            />
                            <TextInput
                                width={265}
                                type="password"
                                className="login_inputfield"
                                borderColor="#dfe1e6"
                                borderRadius={2}
                                placeholder="Password"
                                onChange={handleChangeInput("password")}
                            />
                            <button
                                className="login_continue"
                                onClick={() => {
                                    handleSignup("");
                                }}
                            >
                                Continue
                            </button>
                            <p className="p2">OR</p>
                            <button
                                className="login_btn"
                                onClick={() => {
                                    handleSignupWithGmail("");
                                }}
                            >
                                <img src={google_text} alt="" height="16" width="250" />
                            </button>
                            <div className="border"></div>
                            <div>
                                <Link to="/forgot_password" className="login_link">
                                    Can't login?
                                </Link>
                                <ul>
                                    <li>
                                        <Link to="/signup" className="login_li">
                                            Signup for an account
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Pane>
                    </div>
                    <div className="outside">
                        <a
                            href="https://deski-c8e53.web.app/privacypolicy"
                            target="_blank"
                            rel="noreferrer"
                            className="login_link"
                        >
                            Privacy policy
                        </a>
                        <ul>
                            <li className="li">
                                <Link to="#" className="login_li">
                                    User notice
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="end_div">
                        <div className="end_border"></div>
                    </div>
                </div>
            </Tablet>
        </div>
    );
}

export default Login;
