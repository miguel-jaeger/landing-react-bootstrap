import React from 'react';

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Soluciones Web S.A.</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Servicios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Contenido principal centrado */}
      <main
        className="d-flex flex-column justify-content-center align-items-center text-center"
        style={{ minHeight: "80vh" }} // 80% de la altura de la pantalla, dejando espacio para navbar y footer
      >
        <div className="container">
          {/* Hero */}
          <div className="bg-light p-5 rounded-3 shadow-sm mb-5">
            <h1 className="display-4">¡Impulsa tu negocio al siguiente nivel!</h1>
            <p className="lead">
              Somos tu socio tecnológico para crear soluciones digitales innovadoras y escalables.
            </p>
            <a className="btn btn-primary btn-lg" href="#" role="button">
              Conoce Más
            </a>
          </div>

          {/* Servicios */}
          <h2 className="my-4">Nuestros Servicios</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Desarrollo Web a Medida</h5>
                  <p className="card-text">
                    Creamos sitios y aplicaciones web robustas, seguras y optimizadas para cualquier dispositivo.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Soluciones Móviles</h5>
                  <p className="card-text">
                    Diseñamos y desarrollamos aplicaciones móviles intuitivas para iOS y Android.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Consultoría Tecnológica</h5>
                  <p className="card-text">
                    Te ayudamos a elegir la mejor tecnología y estrategia para tus proyectos digitales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white text-center p-3">
        <div className="container-fluid">
          <p className="mb-0">
            &copy; 2024 Soluciones Web S.A. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
