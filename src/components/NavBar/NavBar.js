import React from 'react'
import './NavBar.css'

export const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light backNav">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Cursos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Galería</a>
        </li>
      </ul>
      <span className="logo fontColorNav">
       CLASES DE MÚSICA
      </span>
    </div>
  </div>
</nav>
    </div>
  )
}
