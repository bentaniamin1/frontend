import React, {useEffect, useState} from 'react'

export default function GePost({data, UpdateListPost}) {

    const [sendData, setSendData] = useState([]);
    
    useEffect(() => {
    
        console.log(UpdateListPost)
        if(UpdateListPost !==undefined) {
            setSendData(UpdateListPost);
            console.log(sendData);
        }else if( (data !== undefined) && (UpdateListPost !==undefined) ) {
            setSendData(data);
            console.log(sendData);
        }
 
        
        
        
    })

    
    sendData.map(data => console.log(data.content))


    const deletePost = (idPost) => {

    }

    
    return (
        <>
        <h1 className='titreGetPost'>Les Posts 📌</h1>
        <div className='row getPostNew align-self-center'>

            {sendData.map(data1 => (
                <div className=' blockCardPost row  align-self-center  '> 
                <div class="card  col-sm-6 offset-md-3">
                <div class="card-body ">
                    <h5 class="card-title">{data1.title}</h5>
                    <p class="card-text">{data1.content}</p>
                    <p>Auteur: <strong>{data1.pseudo}</strong></p>
                </div>
            </div>
            </div>
            ))}
            </div>
            </>
    )
}


// {data.filter(e => e.complete === false).map(item => (
//     {item}
// ))}