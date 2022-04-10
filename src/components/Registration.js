import React, { useEffect, useState } from 'react'

export default function Registration({setInputPseudo, setInputPassword, setCheckRegistration, setCheckLogout}) {

    const [formInputPseudo, setFormInputPseudo] = useState(undefined);
    const [formInputPassword, setFormInputPassword] = useState(undefined);

    const handleChangePseudo= (e) =>{
        setFormInputPseudo(e.target.value);
    }

    const handleChangePassword= (e) =>{
        setFormInputPassword(e.target.value);
        console.log(formInputPassword)
    }

    const handleChangeStatus= (e) =>{
        console.log('d');
        setCheckRegistration(true);
    }
    
    const handleSubmit= (e) =>{
        e.preventDefault();
        setInputPseudo(formInputPseudo);
        setInputPassword(formInputPassword);
        setCheckLogout(false);
        
        //Ajouter un Utilisateur
        if ((formInputPseudo !== undefined) && (formInputPassword !== undefined)) {
        setCheckRegistration(true);
        const bodyInsertUser = new URLSearchParams(
          {
            user: "",
            password: '',
    
          }
        )

    const headersInsertUser = new Headers({
      'Content-type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${btoa(`${formInputPseudo}:${formInputPassword}`)}`
      // 'Authorization': 'Bearer ddddddd',

    })
    fetch('http://localhost:2345/insertUser.php', {
      method: 'POST',
      body: bodyInsertUser,
      headers: headersInsertUser,
      mode: 'cors',
      credentials: 'include'
})
      .then(resInsertUser => resInsertUser.json())
      .then(dataInsertUser => console.log(dataInsertUser))
      window.location.reload(false);
}


}

    return (
        <>
        <div class="container loginRegistration">

            <div class='backg'>
                <h1>myBlog</h1>
                <h2>Inscrivez-vous !</h2>
            </div>
            <form onSubmit={handleSubmit} class="col-sm-3 align-self-center">
                <div class="mb-3">
                    <label for="pseudo1" class="form-label">Pseudo</label>
                    <input type="text" class="form-control" id="pseudo1" aria-describedby="pseudolHelp" value={formInputPseudo} onChange={handleChangePseudo} ></input>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Mot-de-passe</label>
                    <input type="password" class="form-control" id="Password1" value={formInputPassword} onChange={handleChangePassword} ></input>
                </div>
                <button type="submit" class="btn btn-primary">S'inscrire !</button>
                <button class="btn btn-warning" onClick={handleChangeStatus}>Se connecter !</button>
            </form>
        </div>

        </>
    )
}
