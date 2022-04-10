import React from 'react'

export default function logout({setCheckLogout}) {

    const refreshPage = (e) => {
        window.location.reload(false);
    }

  return (
    <div>
        <button type="button" class="btn btn-warning" onClick={refreshPage}>Déconnexion</button>
    </div>
  )
}
