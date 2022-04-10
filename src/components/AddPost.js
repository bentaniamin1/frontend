import React, { useEffect, useState } from 'react'

export default function Registration({ setInputTitle, setInputContent, setUpdateListPost, idCurrentPost }) {

    const [formInputTitle, setFormInputTitle] = useState(undefined);
    const [formInputContent, setFormInputContent] = useState(undefined);

    const handleChangeTitle = (e) => {
        setFormInputTitle(e.target.value);
    }

    const handleChangeContent = (e) => {
        setFormInputContent(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setInputTitle(formInputTitle);
        setInputContent(formInputContent)


        if((formInputTitle !== undefined) && (formInputContent !== undefined)) {

            
            const bodyInsertContent = new URLSearchParams(
                {
                    content: formInputContent,
                    title: formInputTitle,
                    id: idCurrentPost,
                    
                }
                )
                
                //?content=${InputContent}?title=${InputTitle}?idUser=1
                
                const headersInsertPost = new Headers({
                    'Content-type': 'application/x-www-form-urlencoded',
                    'Authorization': `Basic ddddddddddddd:dddddddddddddddddddddd`
                    
                })
                fetch(`http://localhost:2345/insertPost.php`, {
                    method: 'POST',
                    headers: headersInsertPost,
                    body: bodyInsertContent,
                    mode: 'cors',
                    credentials: 'include',
                    data: {
                        name: "ddddddddddddddd",
                        job: "dddddddddddddddddddddddddddddd"
                    }
          })
            .then(resInsertPost => resInsertPost.json())
            .then(dataInsertPost => console.log(dataInsertPost))
        }
        fetch('http://localhost:2345/listPost.php')
        .then(response => response.json())
        .then(dataNewPost => setUpdateListPost(dataNewPost));
            
        }
        
        return (
            <div className='row justify-content-center'>


            <form onSubmit={handleSubmit} className="formPost col-sm-4 align-self-center" >
                <div class="mb-3">
                    <label for="titre1" class="form-label">Titre</label>
                    <input type="text" class="form-control" id="titre1" aria-describedby="pseudolHelp" value={formInputTitle} onChange={handleChangeTitle} ></input>
                </div>
                <div class="mb-3">
                    <label for="content1" class="form-label">Contenue</label>
                    <input type="text" class="form-control" id="content1" value={formInputContent} onChange={handleChangeContent} ></input>
                </div>
                <button type="submit" class="btn btn-primary">Ajouter un post !</button>
            </form>
            </div>
    )
}