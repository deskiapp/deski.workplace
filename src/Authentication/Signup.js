import React, { useState, useEffect } from "react";
import "./Signup.css";
import axios from 'axios'
import path from "../assets/path.svg";
import eye from "../assets/eye.svg";
import deski_white from "../assets/deski_white.svg";
import google_text from "../assets/google_text.svg";
import { Pane, TextInput, toaster } from "evergreen-ui";
import { useHistory } from "react-router-dom";
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

function Signup() {
   
  const [getDetails, setGetDetails] = useState({
    ip: "",
    latitude: "",
    longitude: "",
    country_code: "",
    country_name: "",
    postal:"",
    state:"",
    city:"",
});


  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data);
    setGetDetails({
        ip: res.data.IPv4,
        latitude: res.data.latitude,
        longitude:res.data.longitude,
        country_code:res.data.country_code,
        country_name:res.data.country_name,
        city:res.data.city,
        state:res.data.state,
        postal:res.data.postal,
       
    });


  }
  
  useEffect( () => {
    
    getData()

  }, [])
   

    let history = useHistory();
    const [incorrect, SetIncorrect] = React.useState(false);

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    const [signupData, setSignUpData] = useState({
        workEmail: "",
        password: "",
        firstName: "",
        lastName: "",
    });


  

    const handleChangeInput = (props) => (e) => {
        if (props === "wMail") {
            setSignUpData({
                workEmail: e.target.value,
                password: signupData.password,
                firstName: signupData.firstName,
                lastName: signupData.lastName,
            });
        } else if (props === "fName") {
            setSignUpData({
                workEmail: signupData.workEmail,
                password: signupData.password,
                firstName: e.target.value,
                lastName: signupData.lastName,
            });
        } else if (props === "lName") {
            setSignUpData({
                workEmail: signupData.workEmail,
                password: signupData.password,
                firstName: signupData.firstName,
                lastName: e.target.value,
            });
        } else if (props === "password") {
            setSignUpData({
                workEmail: signupData.workEmail,
                password: e.target.value,
                firstName: signupData.firstName,
                lastName: signupData.lastName,
            });
        }
    };

    const emailValidaton = (props) => {
        const regex =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!props || regex.test(props) === false) {
            return false;
        }
        return true;
    };

    const signUp = (props) => {

        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (dt + Math.random()*16)%16 | 0;
            dt = Math.floor(dt/16);
            return (c=='x' ? r :(r&0x3|0x8)).toString(16);
        });


        if (emailValidaton(signupData.workEmail)) {
            if (signupData.firstName.length >7 || signupData.firstName === "") {
                // alert("Empty first name");
            } else if (signupData.lastName.length >7 || signupData.lastName === "") {
                // alert("Empty last name");
            } else if (signupData.password.length >16 || signupData.password === "") {
                // alert("Empty password");
            } else {

            
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

                
                var urlencoded = new URLSearchParams();
                urlencoded.append("firebaseUid", uuid);
                urlencoded.append("email", signupData.workEmail);
                urlencoded.append("displayName", signupData.firstName);
                urlencoded.append("lastName", signupData.lastName);
                urlencoded.append("password", signupData.password);
                urlencoded.append("userIp", getDetails.ip);
                urlencoded.append("userRegtime", new Date());
                urlencoded.append("userLocation", getDetails.state +", "+ getDetails.city);               
                urlencoded.append("userGeolocation", getDetails.postal +"  "+ getDetails.latitude +"  "+ getDetails.longitude +"  "+ getDetails.country_code +"  "+ getDetails.country_name);   

                

                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: urlencoded,
                    redirect: 'follow'
                  };
                               
                
                    fetch("http://18.116.203.74:6769/signup", requestOptions)
                    .then(response => {
                      if (response.ok){
                        response.json().then(json => {
                          console.log(signupData.firstName+" "+signupData.lastName)
                          console.log(signupData.workEmail+" "+signupData.password)
     
                            localStorage.setItem('data',signupData.workEmail)
                                 
                               history.push("/email_verification");
                
                        })
                      }
                    })
                
                    .catch(error => console.log('error: ', error))
                
               
                }}else {
            // alert("not a valid email");
        }
    }
    
    const handleSignup = (props) => {
        
               
          

                    var myHeaders = new Headers();
                    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
                    
                    var urlencoded = new URLSearchParams();
                    urlencoded.append("email", signupData.workEmail);
                
                    
                    var checkuserRequest = {
                      method: 'POST',
                      headers: myHeaders,
                      body: urlencoded,
                      redirect: 'follow'
                    };

                    fetch("http://18.116.203.74:6769/checkUser", checkuserRequest)
                  .then(response => {
                    if (response.ok){
                      response.json().then(json => {
                        console.log(json.message)
                        console.log(signupData.workEmail)

       

                         if(parseInt(json.message) === 0 ){

                            signUp();
                   
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

    
           
    
                             if(parseInt(json.message) === 0){
    
                                SignupWithGmail();

                               
                           }
                             else  if(parseInt(json.message) === 1) {
    
                               SetIncorrect(true)
                                
                                }
    
                          })
                        }
                     
                        
                      })

              
                    }).catch((error) => {
                      console.log(error.message)
                    })
              
              
                  }
        React.useState(() => {});


    const SignupWithGmail = (props) => {
       

        const googleProvider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(googleProvider)
            .then((res) => {
                console.log(res.user);

                var displayName = res.user.displayName;
                var email = res.user.email;
                var firebaseUid = res.user.uid;
                console.log(displayName + " --- " + email + " --- " + firebaseUid);

                var details = {
                    firebaseUid: firebaseUid,
                    email: email,
                    displayName: displayName,
                    lastName: "",
                    password: "",
                    userRegtime: new Date() ,
                    userGeolocation: getDetails.postal +"  "+ getDetails.latitude +"  "+ getDetails.longitude +"  "+ getDetails.country_code +"  "+ getDetails.country_name ,
                    userLocation: getDetails.state +", "+ getDetails.city ,
                    userIp: getDetails.ip,
                };

                var formBody = [];
                for (var property in details) {
                    var encodedKey = encodeURIComponent(property);
                    var encodedValue = encodeURIComponent(details[property]);
                    formBody.push(encodedKey + "=" + encodedValue);
                }
                formBody = formBody.join("&");

                fetch('http://18.116.203.74:6769/signup', {
                    method: 'POST',
                
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    },
                    body: formBody
                  }).then(response => {
                    if (response.ok){
                      response.json().then(json => {
                     
   
                        localStorage.setItem('data',email)
                        history.push("/email_verification")
                
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
                <div className="su">
                    <img src={path} alt="" className="path" />
                    <div className="logo">
                        <img src={deski_white} alt="" height="80" width="120" />
                    </div>
                    <div className="signup">
                        <Pane className="signup_pane">
                            <h1>Get Started</h1>
                            <p className="title">Start your free account</p>
                            {incorrect && (
                                <p className="invalid">*Already exists an account registered with this email address</p>
                            )}
                            <div className="get_started">
                                <p className="required">Work Email</p>
                                <TextInput
                                 
                                    width={300}
                                    borderRadius={2}
                                    borderColor="#c5c5c5"
                                    onChange={handleChangeInput("wMail")}
                                />
                                <p className="required">Password</p>
                                <TextInput
                                    width={300}
                                    borderColor="#c5c5c5"
                                    borderRadius={2}
                                    type={passwordShown ? "text" : "password"}
                                    onChange={handleChangeInput("password")}
                                />
                                <div className="eye">
                                    <img src={eye} alt="" onClick={togglePasswordVisiblity} width="12" height="12" />
                                </div>
                                <div className="name">
                                    <p className="required">First Name:</p>
                                    <TextInput
                                        width={140}
                                        borderRadius={2}
                                        borderColor="#c5c5c5"
                                        onChange={handleChangeInput("fName")}
                                    />
                                    <div className="inline_text">
                                        <p className="required">Last Name:</p>
                                        <TextInput
                                            width={140}
                                            borderRadius={2}
                                            borderColor="#c5c5c5"
                                            onChange={handleChangeInput("lName")}
                                        />
                                    </div>
                                </div>
                                <p className="content">
                                    By clicking below, you agree to the deski Cloud
                                    <a
                                        href="https://deski-c8e53.web.app/termsofservice"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="signup_link"
                                    >
                                        Terms of Service
                                    </a>
                                </p>
                                <p className="content content_">
                                    and
                                    <a
                                        href="https://deski-c8e53.web.app/privacypolicy"
                                        target="_blank"
                                        className="signup_link"
                                        rel="noreferrer"
                                    >
                                        Privacy Policy
                                    </a>
                                </p>
                                <button
                                    className="signup_continue"
                                    onClick={() => {
                                        handleSignup("");
                                    }}
                                >
                                    Continue
                                </button>
                            </div>
                            <p className="or">OR</p>

                            <button
                                className="signup_btn"
                                onClick={() => {
                                    handleSignupWithGmail("");
                                }}
                            >
                                <img src={google_text} alt="" height="16" width="250" />
                            </button>

                            <p className="last">NO CREDIT CARD REQUIRED</p>
                        </Pane>
                    </div>
                </div>
            </Desktop>
            <Mobile>
                <div className="su">
                    <img src={path} alt="" className="path" />
                    <div className="mob_logo">
                        <img src={deski_white} alt="" height="40" width="70" />
                    </div>
                    <div className="signup">
                        <Pane className="mob_signup_pane">
                            <h1>Get Started</h1>
                            <p className="title">Start your free account</p>
                            {incorrect && (
                                <p className="invalid">*Already exists an account registered with this email address</p>
                            )}
                            <div className="get_started">
                                <p className="required">Work Email</p>
                                <TextInput
                                    width={200}
                                    borderRadius={2}
                                    borderColor="#c5c5c5"
                                    onChange={handleChangeInput("wMail")}
                                />
                                <p className="required">Password</p>
                                <TextInput
                                    width={200}
                                    borderColor="#c5c5c5"
                                    borderRadius={2}
                                    type={passwordShown ? "text" : "password"}
                                    onChange={handleChangeInput("password")}
                                />
                                <div className="eye">
                                    <img src={eye} alt="" onClick={togglePasswordVisiblity} width="12" height="12" />
                                </div>
                                <div className="name">
                                    <p className="required">First Name:</p>
                                    <TextInput
                                        width={200}
                                        borderRadius={2}
                                        borderColor="#c5c5c5"
                                        onChange={handleChangeInput("fName")}
                                    />

                                    <p className="required">Last Name:</p>
                                    <TextInput
                                        width={200}
                                        borderRadius={2}
                                        borderColor="#c5c5c5"
                                        onChange={handleChangeInput("lName")}
                                    />
                                </div>
                                <p className="content">
                                    By clicking below, you agree to the deski Cloud
                                    <a
                                        href="https://deski-c8e53.web.app/termsofservice"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="signup_link"
                                    >
                                        Terms of Service
                                    </a>
                                </p>
                                <p className="content content_">
                                    and
                                    <a
                                        href="https://deski-c8e53.web.app/privacypolicy"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="signup_link"
                                    ></a>
                                </p>
                                <button
                                    className="mob_signup_continue"
                                    onClick={() => {
                                        handleSignup("");
                                    }}
                                >
                                    Continue
                                </button>
                            </div>
                            <p className="or">OR</p>

                            <button
                                className="mob_signup_btn"
                                onClick={() => {
                                    handleSignupWithGmail("");
                                }}
                            >
                                <img src={google_text} alt="" height="13" width="150" />
                            </button>

                            <p className="last">NO CREDIT CARD REQUIRED</p>
                        </Pane>
                    </div>
                </div>
            </Mobile>
            <Tablet>
                <div className="su">
                    <img src={path} alt="" className="path" />
                    <div className="tab_logo">
                        <img src={deski_white} alt="" height="80" width="120" />
                    </div>
                    <div className="signup">
                        <Pane className="signup_pane">
                            <h1>Get Started</h1>
                            <p className="title">Start your free account</p>
                            {incorrect && (
                                <p className="invalid">*Already exists an account registered with this email address</p>
                            )}
                            <div className="get_started">
                                <p className="required">Work Email</p>
                                <TextInput
                                    width={300}
                                 
                                    borderRadius={2}
                                    borderColor="#c5c5c5"
                                    onChange={handleChangeInput("wMail")}
                                />
                                <p className="required">Password</p>
                                <TextInput
                                    width={300}
                                    borderColor="#c5c5c5"
                                    borderRadius={2}
                                    type={passwordShown ? "text" : "password"}
                                    onChange={handleChangeInput("password")}
                                />
                                <div className="eye">
                                    <img src={eye} alt="" onClick={togglePasswordVisiblity} width="12" height="12" />
                                </div>
                                <div className="name">
                                    <p className="required">First Name:</p>
                                    <TextInput
                                        width={140}
                                        borderRadius={2}
                                        borderColor="#c5c5c5"
                                        onChange={handleChangeInput("fName")}
                                    />
                                    <div className="inline_text">
                                        <p className="required">Last Name:</p>
                                        <TextInput
                                            width={140}
                                            borderRadius={2}
                                            borderColor="#c5c5c5"
                                            onChange={handleChangeInput("lName")}
                                        />
                                    </div>
                                </div>
                                <p className="content">
                                    By clicking below, you agree to the deski Cloud
                                    <a
                                        href="https://deski-c8e53.web.app/termsofservice"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="signup_link"
                                    >
                                        Terms of Service
                                    </a>
                                </p>
                                <p className="content content_">
                                    and
                                    <a
                                        href="https://deski-c8e53.web.app/privacypolicy"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="signup_link"
                                    ></a>
                                </p>
                                <button
                                    className="signup_continue"
                                    onClick={() => {
                                        handleSignup("");
                                    }}
                                >
                                    Continue
                                </button>
                            </div>
                            <p className="or">OR</p>

                            <button
                                className="signup_btn"
                                onClick={() => {
                                    handleSignupWithGmail("");
                                }}
                            >
                                <img src={google_text} alt="" height="16" width="250" />
                            </button>

                            <p className="last">NO CREDIT CARD REQUIRED</p>
                        </Pane>
                    </div>
                </div>
            </Tablet>
        </div>
    );
}

export default Signup;
