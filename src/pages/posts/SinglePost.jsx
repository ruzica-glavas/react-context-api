import { useState, useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const SinglePost = () =>{
    
    const {id} = useParams()

    const [post, setPost] = useState ({})

    useEffect (()=>{
        axios
        .get (`http://localhost:3000/posts/${id}`)
        .then ((res) => setPost(res.data))
        .catch (err => console.error(err));
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

        <button className="btn btn-primary" onClick={() => navigate (`/list/${Number(id)+1}`)}> {/* Avrei potuto usare anche parseInt() */}
            Vai avanti
        </button>
        
        </div>
        
       
       
        
        </>
    )
}

export default SinglePost