import Tabla from "./Tabla/Tabla";
import CargaMasiva from "./CargaMasiva/CargaMasiva";
import CargaCargo from "./CargaCargo/CargaCargo";
import CargaArea from "./CargaArea/CargaArea";

export default function Contenido() {
  const iconBuscar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="currentColor"
      className="bi bi-search"
      viewBox="0 0 16 16"
    >
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
    </svg>
  );

  return (
    <div className="col-9">
      <div className="cargas">
        <div className="cargamasiva col-10">
          <CargaMasiva></CargaMasiva>
        </div>

        <div className="cargamasiva ">
          <CargaArea></CargaArea>
        </div>
      </div>

      <div className="cargamasiva">
        <input placeholder="Buscar" />
        <div className="iconcarga">{iconBuscar}</div>
      </div>
      <div className="cargamasiva agregarcargo">
        <CargaCargo></CargaCargo>
      </div>
      <div className="col-11">
        <Tabla></Tabla>
      </div>
    </div>
  );
}
