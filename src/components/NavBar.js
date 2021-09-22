import React from "react";

function NavBar() {
  const MiPrimerNavBar = (
    <div class="container-fluid divBg">
      <div class="row">
        <div class="col-lg-12 col-md-12">
          <nav class="navbar navbar-expand-md navbar-light bg-white fixed-top">
            <a class="navbar-brand" href="#">
              Veterinaria Independencia
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="index.html">
                    Inicio<span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">
                    Quiénes Somos
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">
                    Clínica Veterinaria
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">
                    Otros Servicios
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
  return (
    <>
      {MiPrimerNavBar}
    </>
  );
}

export default NavBar;








