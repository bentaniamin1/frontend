import logo from './logo.svg';
import './App.css';
import Registration from './components/Registration';
import AddPost from './components/AddPost';
import GetPost from './components/GetPost';
import Logut from './components/Logout';
import Login from './components/Login';
import React, { useEffect, useState } from 'react';

function App() {

  //registration
  const [InputRegistrationPseudo, setInputRegistrationPseudo] = useState();
  const [InputRegistrationPassword, setInputRegistrationPassword] = useState();

  //connexion
  const [InputLoginPseudo, setInputLoginPseudo] = useState(undefined);
  const [InputLoginPassword, setInputLoginPassword] = useState(undefined);

  //ajout de Post
  const [InputContent, setInputContent] = useState();
  const [InputTitle, setInputTitle] = useState();
  
  //All Post
  const [InputListPost, setInputListPost] = useState();
  
  //Update Post
  const [UpdateListPost, setUpdateListPost] = useState(undefined);
  
  //All User
  const [InputListUser, setInputListUser] = useState();
  
  //Check Login
  const [checkLogin, setCheckLogin] = useState();
  
  //Check Registration
  const [checkRegistration, setCheckRegistration] = useState();

  //Check Logut
  const [CheckLogout, setCheckLogout] = useState();


  const [NewListRegister ,setNewListRegister] = useState(undefined);


  const [idCurrentPost ,setIdCurrentPost] = useState(undefined);
  const [CheckRegistrationValidate ,setCheckRegistrationValidate] = useState(undefined);


  
  
  console.log(checkLogin);

  console.log(InputContent);
  console.log(InputTitle);
  console.log(checkLogin+'ddddddddddddddddddd');
  console.log(checkRegistration);



  
  
  

  useEffect(() => {
    
    fetch('http://localhost:2345/listPost.php')
      .then(response => response.json())
      .then(data => setInputListPost(data));
      
      fetch('http://localhost:2345/getAllUser.php')
      .then(responseAllUser => responseAllUser.json())
      .then(dataAllUser => setInputListUser(dataAllUser));
      

      
    }, []);
    
    console.log(InputRegistrationPassword);
    
    
    if ((checkRegistration === true) && (checkLogin !== true) ) {
      
      // fetch('http://localhost:2345/getAllUser.php')
      // .then(responseAllUser => responseAllUser.json())
      // .then(dataAllUser => setNewListRegister(dataAllUser));
      return (
        
      <div className="App">
        <Login setInputLoginPseudo={setInputLoginPseudo} setInputLoginPassword={setInputLoginPassword} dataUser={InputListUser} setCheckLogin={setCheckLogin} InputFinalPseudo={InputLoginPseudo} InputFinalPassword={InputLoginPassword} setIdCurrentPost={setIdCurrentPost} />
      </div>
    )
  }
  if ((checkRegistration === undefined) && (checkLogin === undefined) ) {

    return (

      <div className="App">
        <Registration setInputPseudo={setInputRegistrationPseudo} setInputPassword={setInputRegistrationPassword} setCheckRegistration={setCheckRegistration} setCheckLogout={setCheckLogout} NewListRegister={NewListRegister} setCheckRegistrationValidate={setCheckRegistrationValidate} />

      </div>
    )
  }
  console.log(checkLogin);
  if (checkLogin === true ) {

    return (

      <div className="App">
        <Logut setCheckLogout={setCheckLogout} />
        <AddPost setInputTitle={setInputTitle} setInputContent={setInputContent} setUpdateListPost={setUpdateListPost} idCurrentPost={idCurrentPost} />

          
        <GetPost data={InputListPost} UpdateListPost={UpdateListPost} idCurrentPost={idCurrentPost} />

      </div>
    );
  }



}

export default App;
