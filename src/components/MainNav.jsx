import {NavLink} from 'react-router-dom'

const MainNav = () => {
    return (

        <>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
          <i className="fa-solid fa-house"></i>
          </NavLink>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              {/*<li className="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page">
                  Home
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink to="/info" className="nav-link" aria-current="page">
                  Chi siamo
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/list" className="nav-link" aria-current="page">
                  Lista Posts
                </NavLink>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>

        </>
        


    )
}

export default MainNav