import { useState, useEffect } from "react"
import axios from "axios"
import { NavLink } from "react-router-dom"


const ListaPost = () => {
    const [posts, setPosts] = useState ([]);

    useEffect (()=>{
        axios
        .get(`http://localhost:3000/posts/`)
        .then ((res)=> setPosts (res.data))
    },[])

    return(
        <>
        <h1>Lista Post</h1>
        <div className="container">
        <div className="row">
          {posts.map((element) => {
            return (
              <div key={element.id} className="col-4">
                <NavLink to={`/list/${element.id}`}>
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">{element.title}</h4>
                      <ul>
                        <li>
                            {element.tags.join(" - ")}
                        </li>
                      </ul>
                    </div>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
        </>
        
            
    )
}

export default ListaPost