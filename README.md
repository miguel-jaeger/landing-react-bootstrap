# landing-react-bootstrap
Pasos a seguir:
Paso 1: Configuración del Proyecto
1. Abre tu terminal y crea un nuevo proyecto de React llamado soluciones-web
npm create vite@latest soluciones-web -- --template react
2. Accede a la carpeta del proyecto e instala las dependencias.
cd soluciones-web
npm install
3. Instala Bootstrap como dependencia.
npm install bootstrap
4. Abre el archivo src/main.jsx e importa el CSS de Bootstrap para que se aplique globalmente.
// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

Paso 2: Construcción de la Interfaz (App.jsx)
Abre el archivo src/App.jsx. Borra todo el código por defecto y reemplázalo con la estructura completa de la landing page.
// src/App.jsx
import React from 'react';

function App() {
  return (
    <>
      {/* 1. Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Soluciones Web S.A.</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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

      {/* 2. Hero Section */}
      <div className="container-fluid bg-light p-5 text-center">
        <h1 className="display-4">¡Impulsa tu negocio al siguiente nivel!</h1>
        <p className="lead">Somos tu socio tecnológico para crear soluciones digitales innovadoras y escalables.</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">Conoce Más</a>
      </div>

      {/* 3. Sección de Características (Servicios) */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Nuestros Servicios</h2>
        <div className="row">
          {/* Característica 1 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Desarrollo Web a Medida</h5>
                <p className="card-text">Creamos sitios y aplicaciones web robustas, seguras y optimizadas para cualquier dispositivo.</p>
              </div>
            </div>
          </div>
          {/* Característica 2 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Soluciones Móviles</h5>
                <p className="card-text">Diseñamos y desarrollamos aplicaciones móviles intuitivas para iOS y Android.</p>
              </div>
            </div>
          </div>
          {/* Característica 3 */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Consultoría Tecnológica</h5>
                <p className="card-text">Te ayudamos a elegir la mejor tecnología y estrategia para tus proyectos digitales.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Footer */}
      <footer className="bg-dark text-white text-center p-3 mt-auto">
        <div className="container">
          <p className="mb-0">&copy; 2024 Soluciones Web S.A. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
}

export default App;

Paso 3: Ejecutar y Verificar
npm run dev