
import NuevoProceso from "../Envios/NuevoProcesoModal";
import ProcesoView from "./ProcesoView";

export default function EnviosView() {
  return (
    <div>
      <div className="my-3">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h3 className="tittle">Procesos</h3>
            </div>
            <div className="col-2 d-flex align-items-center justify-content-around">
              <NuevoProceso />
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div>
        <ProcesoView />
      </div>
    </div>
  );
}
