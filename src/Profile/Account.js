import React, { useRef,useState } from "react";
import "./Account.css";
import Header from "../Workplace/Header";
import Profile from "./Profile";
import user from "../assets/user.svg";
import building from "../assets/building.svg";
import department from "../assets/department.svg";
import location from "../assets/location.svg";
import toolbox from "../assets/toolbox.svg";
import pen from "../assets/pen.svg";
import bug from "../assets/bug.svg";
import delet from "../assets/delet.svg";
import app from "../assets/app.svg";
import add_blue from "../assets/add_blue.svg";
import { Pane, Dialog, TextInput, CrossIcon, TickIcon } from "evergreen-ui";

const Account = (props) => {


    
    const [selectedTab, setSelectedTab] = React.useState(false);
    const [selectedTab1, setSelectedTab1] = React.useState(false);
    const [selectedTab2, setSelectedTab2] = React.useState(false);
    const [selectedTab3, setSelectedTab3] = React.useState(false);
    const [selectedTab4, setSelectedTab4] = React.useState(false);
    const [selectedTab5, setSelectedTab5] = React.useState(false);
    const [selectedTab6, setSelectedTab6] = React.useState(false);
    const [Ispassword, setIsPassword] = React.useState(false);
    const [Nopassword, setNoPassword] = React.useState(false);

    const inputFile = useRef(null);
    const onButtonClick = () => {
        inputFile.current.click();
    };

    const [profile, setProfile] = useState({
        name: "",
        email: "",
        password: "",
        userid:"",
       
    });



    const [isShown, setIsShown] = React.useState(false);


    const emaildata = localStorage.getItem('data')
 

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    
    var urlencoded = new URLSearchParams();
    urlencoded.append("email", emaildata.trim());
    
 
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };
    
    fetch("http://18.116.203.74:6769/profile", requestOptions)
      .then(response => {
        if (response.ok){
          response.json().then(json => {
   
            setProfile({
               name: json.user_first_name+" "+json.user_last_name,
               email: json.user_email,
               password:json.user_password,
               userid:json.user_id
               
            });
             if(json.user_password.trim() === ""){
                    
                    setNoPassword(true);
                 }
            else {
                    setIsPassword(true);
                  
              }
         
          })
        }
     
        
      })
      
      .catch(error => console.log('error: ', error)
   )


   
   const [updateprofile, setUpdateProfile] = useState({
    firstname: "",
    lastname: "",
    password:"",
  });

  const handleUpdateProfile = (props) => (e) => {
    if (props === "firstname") {
        setUpdateProfile({
            firstname: e.target.value,
            lastname: updateprofile.lastname,
            password: updateprofile.password,
          
        });
    } else if (props === "lastname") {
        setUpdateProfile({
            firstname: updateprofile.firstname,
            lastname: e.target.value,
            password: updateprofile.password,
          
        });
    } else if (props === "password") {
        setUpdateProfile({
            firstname: updateprofile.firstname,
            lastname: updateprofile.lastname,
            password: e.target.value,
          
        });

};
}



const UpdateProfiledata = (props) => {
          

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        
        var urlencoded = new URLSearchParams();

        urlencoded.append("userId", profile.userid);
        urlencoded.append("firstName", updateprofile.firstname);
        urlencoded.append("lastName", updateprofile.lastname);
        urlencoded.append("password",updateprofile.password);
        
     
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: urlencoded,
          redirect: 'follow'
        };
        
        fetch("http://18.116.203.74:6769/updateProfile", requestOptions)
          .then(response => {
            if (response.ok){
              response.json().then(json => {
                console.log(updateprofile.firstname)
                console.log(updateprofile.lastname)

             
              })
            }
         
            
          })
          
          .catch(error => console.log('error: ', error)
       )

    }
   


    return (
        <div>
            <Header />
            <Profile />
            <div className="account">
                <h2>Account overview</h2>
                <img onClick={onButtonClick} src={user} alt="" className="user_img" />
                <input type="file" id="file" ref={inputFile} style={{ display: "none" }} />
                <div className="account_con">
                    <span className="span1">
                        {profile.name}
                        <img className="edit" src={pen} alt="" onClick={()=>setSelectedTab5(true)}/>
                        {selectedTab5 ? (
                        <div className="roles_">
                            <TextInput width={95} className="roles_firstname" autoFocusonChange={handleUpdateProfile("firstname")}/>
                            <TextInput width={95} autoFocus onChange={handleUpdateProfile("lastname")}/>
                            <br></br>
                            <div>
                                <button  onClick={() => {
                                    UpdateProfiledata("");
                                }}>
                                    <TickIcon className="icon" size={12} />
                                </button>
                                <button onClick={() => setSelectedTab5(false)}>
                                    <CrossIcon className="icon" size={12} />
                                </button>
                            </div>
                        </div>
                    ) : null}
                    </span>
                    <p>{profile.email}</p>
                    {Ispassword &&
                    <p>{profile.password.replace(/[^\s]/g, "*")}
                    <img className="password_edit" src={pen} alt="" onClick={()=>setSelectedTab6(true)}/>
                        {selectedTab6 ? (
                        <div className="roles_">
                            <TextInput width={200} autoFocus onChange={handleUpdateProfile("password")}/>
                            <br></br>
                            <div>
                                <button  onClick={() => setIsPassword(true)}>
                                    <TickIcon className="icon" size={12} />
                                </button>
                                <button onClick={() => setSelectedTab6(false)}>
                                    <CrossIcon className="icon" size={12} />
                                </button>
                            </div>
                        </div>
                    ) : null}</p>
                    }
                    {Nopassword &&<span className="span2" onClick={() => setSelectedTab4(true)}>
                        Add password
                        <img className="add" src={add_blue} alt="" />
                    </span>}
                    {selectedTab4 ? (
                        <div className="roles_">
                            <TextInput width={200} autoFocus onChange={handleUpdateProfile("password")}/>
                            <br></br>
                            <div>
                                <button  onClick={() => {
                                   
                                   
                                }}>
                                    <TickIcon className="icon" size={12} />
                                </button>
                                <button onClick={() => setSelectedTab4(false)}>
                                    <CrossIcon className="icon" size={12} />
                                </button>
                            </div>
                        </div>
                    ) : null}
                    <div className="account_con2">
                        <button
                            onClick={() => {
                                setSelectedTab(true);
                                setSelectedTab1(false);
                                setSelectedTab2(false);
                                setSelectedTab3(false);
                            }}
                            className="others"
                        >
                            <img src={toolbox} alt="" className="toolbox" />
                            Project Manager
                        </button>
                        {selectedTab ? (
                            <div className="roles">
                                <TextInput width={200} autoFocus />
                                <br></br>
                                <div>
                                    <button>
                                        <TickIcon className="icon" size={12} />
                                    </button>
                                    <button onClick={() => setSelectedTab(false)}>
                                        <CrossIcon className="icon" size={12} />
                                    </button>
                                </div>
                            </div>
                        ) : null}
                        <button
                            onClick={() => {
                                setSelectedTab1(true);
                                setSelectedTab(false);
                                setSelectedTab2(false);
                                setSelectedTab3(false);
                            }}
                            className="others"
                        >
                            <img src={department} alt="" className="toolbox" />
                            Your department
                        </button>
                        {selectedTab1 ? (
                            <div className="roles">
                                <TextInput width={200} autoFocus />
                                <br></br>
                                <div>
                                    <button>
                                        <TickIcon className="icon" size={12} />
                                    </button>
                                    <button onClick={() => setSelectedTab1(false)}>
                                        <CrossIcon className="icon" size={12} />
                                    </button>
                                </div>
                            </div>
                        ) : null}
                        <button
                            onClick={() => {
                                setSelectedTab2(true);
                                setSelectedTab1(false);
                                setSelectedTab(false);
                                setSelectedTab3(false);
                            }}
                            className="others"
                        >
                            <img src={building} alt="" className="toolbox" />
                            Your organization
                        </button>
                        {selectedTab2 ? (
                            <div className="roles">
                                <TextInput width={200} autoFocus />
                                <br></br>
                                <div>
                                    <button>
                                        <TickIcon className="icon" size={12} />
                                    </button>
                                    <button onClick={() => setSelectedTab2(false)}>
                                        <CrossIcon className="icon" size={12} />
                                    </button>
                                </div>
                            </div>
                        ) : null}
                        <button
                            onClick={() => {
                                setSelectedTab3(true);
                                setSelectedTab1(false);
                                setSelectedTab2(false);
                                setSelectedTab(false);
                            }}
                            className="others"
                        >
                            <img src={location} alt="" className="toolbox" />
                            Your location
                        </button>
                        {selectedTab3 ? (
                            <div className="roles">
                                <TextInput width={200} autoFocus />
                                <br></br>
                                <div>
                                    <button>
                                        <TickIcon className="icon" size={12} />
                                    </button>
                                    <button onClick={() => setSelectedTab3(false)}>
                                        <CrossIcon className="icon" size={12} />
                                    </button>
                                </div>
                            </div>
                        ) : null}
                        <div className="account_con3">
                            <span className="span3">Places you work</span>
                        </div>
                        <div className="card_div">
                            <Pane className="card1">
                                <img src={bug} alt="" height="34" width="34" />
                                <h4>Hexcode</h4>
                                <p className="span4">www.hexcode.co</p>
                                <p className="des">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                                </p>
                            </Pane>
                            <Pane className="card2">
                                <img src={app} alt="" height="34" width="34" />
                                <h4>Ramotion</h4>
                                <p className="span4">www.ramotion.com</p>
                                <p className="des">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit
                                </p>
                            </Pane>
                        </div>
                        <div className="dlt_acnt" onClick={() => setIsShown(true)}>
                            <img src={delet} alt="" height="12" width="12" />
                            <p>Delete your deski account</p>
                        </div>
                        <Dialog
                            topOffset={235}
                            width={400}
                            minHeightContent={160}
                            onCloseComplete={() => setIsShown(false)}
                            preventBodyScrolling
                            hasHeader={false}
                            isShown={isShown}
                            hasFooter={false}
                        >
                            <div className="dlt_workspace">
                                <h4>Are you sure you want to remove this user ?</h4>
                                <p>The user will be removed in your workplace/space</p>

                                <div>
                                    <button className="cancel_btn cncl" onClick={() => setIsShown(false)}>
                                        Cancel
                                    </button>
                                    <button className="dlt_btn" onClick={() => setIsShown(false)}>
                                        Delete workspace
                                    </button>
                                </div>
                            </div>
                        </Dialog>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;
