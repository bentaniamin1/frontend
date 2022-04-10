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



  
  
  
  
  // if (InputRegistrationPassword !== undefined) {
    
    
  //   const bodyInsertUser = new URLSearchParams(
    //     {
  //       user: '',
  //       password: '',
        
  //     }
  //     )
  
  //     if ((InputRegistrationPseudo !== undefined) && (InputRegistrationPassword !== undefined)) {
  //       const body = new URLSearchParams(
  //         {
  //           user: InputRegistrationPseudo,
  //           password: 'azerty',
    
  //         }
  //       )
  
  //       const headers = new Headers({
    //         'Content-type': 'application/x-www-form-urlencoded',
  //         'Authorization': `Basic ${btoa(`${InputRegistrationPseudo}:${InputLoginPassword}`)}`
  //         // 'Authorization': 'Bearer ddddddd',
  
  //       })
  //       fetch('http://localhost:2345', {
  //         method: 'POST',
  //         body: body,
  //         headers: headers,
  //         mode: 'cors',
  //         credentials: 'include'
  //       })
  //         .then(resP => resP.json())
  //         .then(dataP => console.log(dataP))
  //     }
  
  
  
  
  //   //Ajouter un Utilisateur
  
  //   const headersInsertUser = new Headers({
    //     'Content-type': 'application/x-www-form-urlencoded',
    //     'Authorization': `Basic ${btoa(`${InputRegistrationPseudo}:${InputRegistrationPassword}`)}`
  //     // 'Authorization': 'Bearer ddddddd',

  //   })
  //   fetch('http://localhost:2345/insertUser.php', {
    //     method: 'POST',
    //     body: bodyInsertUser,
  //     headers: headersInsertUser,
  //     mode: 'cors',
  //     credentials: 'include'
  //   })
  //     .then(resInsertUser => resInsertUser.json())
  //     .then(dataInsertUser => console.log(dataInsertUser))
  // }
  
  
  // //Ajouter un Post
  // if (InputContent !== undefined) {
    
    //   const bodyInsertContent = new URLSearchParams(
  //     {
    //       content: InputContent,
    //       title: InputTitle,
    //       id: 1,
    
    //     }
    //   )
    
  //   //?content=${InputContent}?title=${InputTitle}?idUser=1
  
  //   const headersInsertPost = new Headers({
    //     'Content-type': 'application/x-www-form-urlencoded',
    //     'Authorization': `Basic ddddddddddddd:dddddddddddddddddddddd`
    
    //   })
    //   fetch(`http://localhost:2345/insertPost.php`, {
      //     method: 'POST',
      //     headers: headersInsertPost,
      //     body: bodyInsertContent,
      //     mode: 'cors',
  //     credentials: 'include',
  //     data: {
    //       name: "ddddddddddddddd",
    //       job: "dddddddddddddddddddddddddddddd"
    //     }
    //   })
  //     .then(resInsertPost => resInsertPost.json())
  //     .then(dataInsertPost => console.log(dataInsertPost))
  
  // }
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
