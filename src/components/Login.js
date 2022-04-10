import React, { useState, useEffect} from 'react'

export default function Login({setInputLoginPseudo, setInputLoginPassword, dataUser, InputFinalPseudo, InputFinalPassword, setCheckLogin, NewListRegister, setIdCurrentPost}) {

    const [sendDataUser, setSendDataUser] = useState([]);


    const [loginInputPseudo, setLoginInputPseudo] = useState('');
    const [loginInputPassword, setLoginInputPassword] = useState('');

    const [checkPassword, setCheckPassword] = useState(undefined);
    const [checkTruePassword, setCheckTruePassword] = useState(undefined);

    const [checkPseudo, setCheckPseudo] = useState(undefined);
    const [checkTruePseudo, setCheckTruePseudo] = useState(undefined);


    const [NewListRegisterLogin, setNewListRegisterLogin] = useState([NewListRegister]);

    const [indexToken, setIndexToken] = useState();

    const [idCurrent, setIdCurrent] = useState();


    

    const handleChangePseudo= (e) =>{
        setLoginInputPseudo(e.target.value);
    }
    const handleChangePassword= (e) =>{
        setLoginInputPassword(e.target.value);
    }
    
    const handleSubmit= (e) =>{
        e.preventDefault();
        console.log(loginInputPseudo);
        console.log(loginInputPassword);
        setInputLoginPseudo(loginInputPseudo);
        setInputLoginPassword(loginInputPassword);
        let user = getUSer();
        getCheckLogin()
    }

    const getUSer = () => {

            setSendDataUser(dataUser);
            console.log(dataUser);
            console.log(sendDataUser.map((sendDataUser) => sendDataUser?.password=== loginInputPassword).indexOf);
            setCheckPassword(sendDataUser.map((sendDataUser) => 
            sendDataUser?.password === loginInputPassword));
            setIndexToken(sendDataUser.map((sendDataUser) => 
            sendDataUser?.password === loginInputPassword).indexOf(true));
            console.log(checkPassword)
            console.log(indexToken)
            setCheckTruePassword(checkPassword.filter(checkPassword => checkPassword === true)[0]);
            
            setCheckPseudo(sendDataUser.map((sendDataUser) => 
            sendDataUser?.pseudo === loginInputPseudo));
            setCheckTruePseudo(checkPseudo.filter(checkPseudo => checkPseudo === true)[0]);
            console.log(checkTruePseudo)
            console.log(checkTruePassword)

            setIdCurrent(sendDataUser?.[indexToken].idUser);
            setIdCurrentPost(idCurrent);
            console.log(checkTruePassword)
    }

    const getCheckLogin = () => {
        if((checkTruePseudo === true) &&  (checkTruePassword === true)) {
            setCheckLogin(true);
        }
    }

    return (
        <>
        <div class="container loginRegistration">

            <div>
                <h1>myBlog</h1>
                <h2>Connecte toi !</h2>
            </div>
            <form onSubmit={handleSubmit} className="col-sm-3 align-self-center ">
                <div class="mb-3 ">
                    <label for="exampleInputEmail1" class="form-label">Pseudo</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="pseudolHelp" value={loginInputPseudo} onChange={handleChangePseudo} ></input>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Mot-de-passe</label>
                    <input type="password" class="form-control" id="Password1" value={loginInputPassword} onChange={handleChangePassword} ></input>
                </div>
                <button type="submit" class="btn btn-primary">Se connecter</button>
            </form>
        </div>

        </>
    )
}