import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to='/manufacturers' className="nav-link" id="manufacturers-link" aria-current="page">Manufacturers</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/manufacturers/create' className="nav-link" id="create-manufacturer-link" aria-current="page">Create a Manufacturer</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/models' className="nav-link" id="models-link" aria-current="page">Models</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/models/create' className="nav-link" id="create-model-link" aria-current="page">Create a Model</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/automobiles' className="nav-link" id="automobiles-link" aria-current="page">Automobiles</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/automobiles/create" className="nav-link" id="create-automobile-link" aria-current="page">Create an Automobile</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/salespeople" className="nav-link" id="salespeople-link" aria-current="page">Salespeople</NavLink>
              </li>
            </ul>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
