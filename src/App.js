import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import BarraLateral from "./Componentes/Barralateral/BarraLateral";
import Contenido from "./Componentes/Contenido/Perfiles/Contenido";
import Bienvenida from "./Componentes/Contenido/Bienvenida/Bienvenida";
import ListaPruebas from "./Componentes/Contenido/Views/ListaPruebas";
import { Routes, Route } from "react-router-dom";
import Resultados from "./Componentes/Contenido/Resultados/Resultados";
import EditarCargoView from "./Componentes/Contenido/Perfiles/CargaCargo/EditarCargoView";
import Intro from "./Componentes/Intro/Intro";
import { AuthContextProvider } from "./Componentes/Context/authContext";
import LoginView from "./Componentes/Context/LoginView";
import Navegacion from "./Componentes/Context/Navegacion";
import PrivateRoute from "./Componentes/Context/PrivateRoute";
import EnviosView from "./Componentes/Contenido/Views/EnviosView";
import EditProcesoForm from "./Componentes/Contenido/Envios/EditProcesoForm";
import EvaluadosView from "./Componentes/Contenido/Views/EvaluadosView";
import EditEvaluado from "./Componentes/Contenido/Envios/EditEvaluado";

function App() {
  return (
    <>
      <div className="contenedor-plataforma">
        <AuthContextProvider>
          {/* <Head /> */}

          <Navegacion />
          <div className="contenedordeinicio">
            <Routes>
              <Route path="/" element={<Intro />} />

              <Route path="/login" element={<LoginView />} />

              <Route
                path="/bienvenida"
                element={
                  <PrivateRoute>
                    <div className="concenedor2">
                      <BarraLateral />
                      <div className="col-1"></div>
                      <Bienvenida />
                    </div>
                  </PrivateRoute>
                }
              />

              <Route
                path="/perfiles"
                element={
                  <PrivateRoute>
                    <div className="concenedor2">
                      <BarraLateral className="col-2" />
                      <div className="col-1"></div>
                      <Contenido className="col-9" />
                    </div>
                  </PrivateRoute>
                }
              />

              <Route
                path="/listapruebas"
                element={
                  <PrivateRoute>
                    <div className="concenedor2">
                      <BarraLateral className="col-2" />
                      <div className="col-1"></div>
                      <ListaPruebas className="col-9" />
                    </div>
                  </PrivateRoute>
                }
              />

              <Route
                path="/resultados"
                element={
                  <PrivateRoute>
                    <div className="concenedor2">
                      <BarraLateral />
                      <div className="col-1"></div>
                      <Resultados />
                    </div>
                  </PrivateRoute>
                }
              />

              <Route
                path="/envios"
                element={
                  <PrivateRoute>
                    <div className="concenedor2">
                      <BarraLateral />
                      <div className="col-1"></div>
                      <EnviosView />
                    </div>
                  </PrivateRoute>
                }
              />

              {/* Añadido adicional */}
              <Route path="/envios" element={<EnviosView />}></Route>
              <Route
                path="/EditProcesoForm/:id"
                element={
                  <PrivateRoute>
                    <div className="concenedor2">
                      <BarraLateral />
                      <div className="col-1"></div>
                      <EditProcesoForm />
                    </div>
                  </PrivateRoute>
                }
              />
              <Route
                path="/EvaluadosView/:idProc/EditEvaluado/:id"
                element={
                  <PrivateRoute>
                    <div className="concenedor2">
                      <BarraLateral />
                      <div className="col-1"></div>
                      <EditEvaluado />
                    </div>
                  </PrivateRoute>
                }
              />
              <Route
                path="/EvaluadosView/:idProc"
                element={
                  <PrivateRoute>
                    <div className="concenedor2">
                      <BarraLateral />
                      <div className="col-1"></div>
                      <EvaluadosView />
                    </div>
                  </PrivateRoute>
                }
              />

              {/* fin de añadido */}

              <Route path="/editarcargo/:id" element={<EditarCargoView />} />
            </Routes>
          </div>
        </AuthContextProvider>
      </div>
    </>
  );
}

export default App;
