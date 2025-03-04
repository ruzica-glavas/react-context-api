import { useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom";


//import context
import {useGlobalContext} from "../../contexts/GlobalContext";

const SinglePost = () =>{
    
    const {id} = useParams()

    const {post, singlePost} = useGlobalContext ()

    useEffect (()=>{
        singlePost (id)
    }, [id]);

    const navigate = useNavigate()

    return(
        <>
        <h1>Descrizione prodotto</h1>
        Titolo: {post.content}
        <div>
        <button className="btn btn-primary" onClick={() => navigate (-1)}>
            Torna indietro
        </button>

        <button className="btn btn-primary" onClick={() => Number (id)<5 ? (navigate (`/list/${Number(id)+1}`)): null}> {/* Avrei potuto usare anche parseInt() */}
            Vai avanti
        </button>
        
        </div>
        
       
       
        
        </>
    )
}

export default SinglePost