import React, { useState } from "react";
import "./Signup.css";
import path from "../assets/path.svg";
import eye from "../assets/eye.svg";
import deski_white from "../assets/deski_white.svg";
import google_text from "../assets/google_text.svg";
import { Pane, TextInput } from "evergreen-ui";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import firebase from '../services/firebase'

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
    let history = useHistory();

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    const [signupData,setSignUpData] = useState({

        "workEmail":"",
        "password":"",
        "firstName":"",
        "lastName":""

    }) 


    const handleChangeInput = (props) => (e) => {


        if(props==="wMail"){



            // const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
           
            // if(!signupData.workEmail || regex.test(signupData.workEmail) === false){


            //     setSignUpData({
            //         "workEmail":'',
            //         "password":signupData.password,
            //         "firstName":signupData.firstName,
            //         "lastName":signupData.lastName
            //     })
                
            //     alert(signupData.workEmail)


            //     return false;
            // }else{

              

            //   //  alert(signupData.workEmail)
            // }

            setSignUpData({
                "workEmail":e.target.value,
                "password":signupData.password,
                "firstName":signupData.firstName,
                "lastName":signupData.lastName
            })
           

        }else if(props==="fName"){

            setSignUpData({
                "workEmail":signupData.workEmail,
                "password":signupData.password,
                "firstName":e.target.value,
                "lastName":signupData.lastName
            })

        }else if(props==="lName"){

            setSignUpData({
                "workEmail":signupData.workEmail,
                "password":signupData.password,
                "firstName":signupData.firstName,
                "lastName":e.target.value
            })


        }else if(props==="password"){

            setSignUpData({
                "workEmail":signupData.workEmail,
                "password":e.target.value,
                "firstName":signupData.firstName,
                "lastName":signupData.lastName
            })
        }

        

    }

   
    const emailValidaton = (props) => {

        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!props || regex.test(props) === false){
             
            return false;
        }
        return true;
    }


    const handleSignup = (props) =>{

        
         
        if(emailValidaton(signupData.workEmail)){


            if(signupData.firstName===""){

                alert('Empty first name')
            }else if(signupData.lastName===""){

                alert('Empty last name')
            }else if(signupData.password===""){

                alert('Empty password')
            
            }else{


                var details = {
                    'firebaseUid':"",
                   'email': signupData.workEmail,
                   'type':'1',
                   'displayName':signupData.firstName,
                   'lastName':signupData.lastName,
                   'password':signupData.password
       
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
               }).then((response)=>{
                     
       
                     console.log(response)
               })

            }
            


          



        }else{

             alert('not a valid email')

        }

       

    }


    const handleSignupWithGmail = (props) =>{

     //  alert('signup clicked ')

     const googleProvider = new firebase.auth.GoogleAuthProvider()
     auth.signInWithPopup(googleProvider).then((res) => {
        console.log(res.user)

        var displayName = res.user.displayName
        var email = res.user.email
        var firebaseUid = res.user.uid
        console.log(displayName+" --- "+email+" --- "+firebaseUid)



        var details = {
            'firebaseUid':firebaseUid,
            'email': email,
            'type':'0',
            'displayName':displayName
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
        }).then((response)=>{
              

              console.log(response)
        })

       

        



      }).catch((error) => {
        console.log(error.message)
      })


    }

    
    React.useState(()=>{

               // alert('signup')

    })



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
                            <div className="get_started">
                                <p className="required">Work Email</p>
                                <TextInput width={300} borderRadius={2} type="email" onChange={handleChangeInput("wMail")} borderColor="#c5c5c5" />
                                <p className="required">Password</p>
                                <TextInput
                                    width={300}
                                    borderColor="#c5c5c5"
                                    borderRadius={2}
                                    onChange={handleChangeInput("password")}
                                    type={passwordShown ? "text" : "password"}
                                />
                                <div className="eye">
                                    <img src={eye} alt="" onClick={togglePasswordVisiblity} width="12" height="12" />
                                </div>
                                <div className="name">
                                    <p className="required">First Name:</p>
                                    <TextInput width={140} borderRadius={2} onChange={handleChangeInput("fName")} borderColor="#c5c5c5" />
                                    <div className="inline_text">
                                        <p className="required">First Name:</p>
                                        <TextInput width={140} borderRadius={2} onChange={handleChangeInput("lName")} borderColor="#c5c5c5" />
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
                                       // history.push("/create_site");
                                       handleSignup("")
                                    }}
                                >
                                    Continue
                                </button>
                            </div>
                            <p className="or">OR</p>

                            <button
                                className="signup_btn"
                                onClick={() => {
                                   // history.push("/create_site");
                                   handleSignupWithGmail("")
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
                            <div className="get_started">
                                <p className="required">Work Email</p>
                                <TextInput width={200} borderRadius={2} borderColor="#c5c5c5" />
                                <p className="required">Password</p>
                                <TextInput
                                    width={200}
                                    borderColor="#c5c5c5"
                                    borderRadius={2}
                                    type={passwordShown ? "text" : "password"}
                                />
                                <div className="eye">
                                    <img src={eye} alt="" onClick={togglePasswordVisiblity} width="12" height="12" />
                                </div>
                                <div className="name">
                                    <p className="required">First Name:</p>
                                    <TextInput width={200} borderRadius={2} borderColor="#c5c5c5" />

                                    <p className="required">First Name:</p>
                                    <TextInput width={200} borderRadius={2} borderColor="#c5c5c5" />
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
                                        history.push("/create_site");
                                    }}
                                >
                                    Continue
                                </button>
                            </div>
                            <p className="or">OR</p>

                            <button
                                className="mob_signup_btn"
                                onClick={() => {
                                    history.push("/create_site");
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
                            <div className="get_started">
                                <p className="required">Work Email</p>
                                <TextInput width={300} borderRadius={2} borderColor="#c5c5c5" />
                                <p className="required">Password</p>
                                <TextInput
                                    width={300}
                                    borderColor="#c5c5c5"
                                    borderRadius={2}
                                    type={passwordShown ? "text" : "password"}
                                />
                                <div className="eye">
                                    <img src={eye} alt="" onClick={togglePasswordVisiblity} width="12" height="12" />
                                </div>
                                <div className="name">
                                    <p className="required">First Name:</p>
                                    <TextInput width={140} borderRadius={2} borderColor="#c5c5c5" />
                                    <div className="inline_text">
                                        <p className="required">First Name:</p>
                                        <TextInput width={140} borderRadius={2} borderColor="#c5c5c5" />
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
                                        history.push("/create_site");
                                         
                                    }}
                                >
                                    Continue
                                </button>
                            </div>
                            <p className="or">OR</p>

                            <button
                                className="signup_btn"
                                onClick={() => {
                                  //  history.push("/create_site");
                                    handleSignupWithGmail("")
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
