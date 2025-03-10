import { useEffect } from "react"
import { NavLink } from "react-router-dom"

//import del context
import {useGlobalContext} from "../../contexts/GlobalContext"


const ListaPost = () => {
    const {posts, allPosts} = useGlobalContext()

    useEffect (()=>{
      allPosts()
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