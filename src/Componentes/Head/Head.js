import React from "react";


export default function Head() {
   
  return (

    <nav className="navbar navbar-expand-lg navbar-dark col-12">
      <div className="container-fluid">
        {/* BOTON OFFCANVAS */}
        <button
          className="navbar-toggler me-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <span className="navbar-toggler-icon" />
        </button>


        {/* END BOTON OFFCANVAS */}
        <a className="navbar-brand me-auto" href="./index.html">
            <img className="logo" src="/img/logo.png" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">


          {/* USUARIO Y CONTRASEÑA*/}
          <form className="d-flex ms-auto">
            <div className="input-group my-3 my-lg-0">
              <div className="col-auto">
                {/* <label htmlFor="staticEmail2" className="visually-hidden">
                  Email
                </label> */}
                <input
                  type="text"
                  className="form-control"
                  id="staticEmail2"
                  placeholder="Usuario"
                />
              </div>
              <div className="col-auto">
                {/* <label htmlFor="inputPassword2" className="visually-hidden">
                  Password
                </label> */}
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword2"
                  placeholder="Password"
                />
              </div>
            </div>
          </form>


          {/* MENSAJE */}
          <ul className="navbar-nav mb-2 mb-lg-0">
            <a href="/">
              <i className=" icon-navbar bi bi-envelope-fill text-white" />
            </a>
          </ul>


          {/* SESION */}
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="icon-navbar bi bi-person-fill text-white" />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a className="dropdown-item" href="/" alt="Mi Perfil">
                    Mi Perfil
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/" alt="">
                    Tema
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/" alt="">
                    Cerrar sesión
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
