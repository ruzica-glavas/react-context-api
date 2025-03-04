import { createContext, useState, useContext } from "react";
import axios from "axios";

const GlobalContext = createContext();

const GlobalProvider = ({children}) =>{
    //Lista Post
    const [posts, setPosts] = useState ([]);

    //Singolo Post
    const [post, setPost] = useState ({})


    //chiamata api per tutti i post
    const allPosts = () => {
        axios
        .get (`http://localhost:3000/posts/`)
        .then ((res)=> setPosts (res.data))
        .catch (err => console.error(err));
    }

    //chiamata api per il singolo post
    const singlePost =(id) =>{
        axios
        .get (`http://localhost:3000/posts/${id}`)
        .then ((res) => setPost(res.data))
        .catch (err => console.error(err));

    }

    //destracturing di value

    const value ={
        posts,
        post, 
        allPosts,
        singlePost
    }

    return(
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => useContext (GlobalContext)

export {GlobalProvider, useGlobalContext}