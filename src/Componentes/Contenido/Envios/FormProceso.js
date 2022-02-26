import { DateRangePicker } from "rsuite";
import "../../../../node_modules/rsuite/dist/rsuite.min.css";
import { useState, useEffect } from "react";
import { GetPerfil } from "../Services/PerfilService";

export default function FormProceso({
  value,
  actualizarInput,
  actualizarCheck,
  setFechas,
  submit,
}) {
  const [perfil, setPerfil] = useState([]);
  const obtainPerfiles = async () => {
    try {
      const perfilesObtenidos = await GetPerfil();
      setPerfil(perfilesObtenidos);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    obtainPerfiles();
  }, []);
  console.log(value);
  return (
    <div>
      <form
        className="modal-body"
        onSubmit={(e) => {
          submit(e);
        }}
      >
        <div className="mb-3">
          <label className="form-label">Perfil</label>
          <select
            className="form-select"
            name="Perfil"
            value={value.Perfil}
            onChange={(e) => {
              actualizarInput(e);
            }}
          >
            <option>Selecciona</option>
            {perfil.map(({ Nombre }, i) => (
              <option> {Nombre}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label"> Nombre</label>
          <input
            type="text"
            className="form-control"
            name="Nombre"
            value={value.Nombre}
            onChange={(e) => {
              actualizarInput(e);
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <input
            class="form-control"
            rows="3"
            name="Descripcion"
            value={value.Descripcion}
            onChange={(e) => {
              actualizarInput(e);
            }}
          />
        </div>

        {/* calendario */}
        <div className="mb-3">
          <DateRangePicker
            appearance="default"
            className="calendar"
            name="Fechas"
            value={value.Fechas}
            onChange={setFechas}
          />
        </div>

        <div className="mb-3 form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            name="Oculto"
            value={value.Oculto}
            onChange={(e) => {
              actualizarCheck(e);
            }}
          />
          <label class="form-check-label" for="flexSwitchCheckDefault">
            Oculto
          </label>
        </div>
        <div class="text-center">
          <button class="btn btn-primary" type="submit">
            Aceptar
          </button>
        </div>
      </form>
    </div>
  );
}
