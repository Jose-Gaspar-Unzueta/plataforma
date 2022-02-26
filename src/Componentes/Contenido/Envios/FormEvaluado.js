// import "../../";
import { BsBellFill } from "react-icons/bs";

export default function FormProceso({
  value,
  actualizarInput,
  actualizarCheck,
  submit,
}) {
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
          <label className="form-label">Modo</label>
          <select
            className="form-select"
            name="Modo"
            value={value.Modo}
            onChange={(e) => {
              actualizarInput(e);
            }}
          >
            <option>Selecciona</option>
            <option> Modo 1</option>
            <option> Modo 2</option>
            <option> Modo 3</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label"> DNI</label>
          <input
            type="text"
            className="form-control"
            name="DNI"
            pattern="[0-9]{8}"
            title="Debe poner 8 números"
            value={value.DNI}
            onChange={(e) => {
              actualizarInput(e);
            }}
          />
        </div>
        <div className="row g-2">
          <div className="col-md-6">
            <label className="form-label"> Edad</label>
            <input
              type="number"
              className="form-control"
              name="Edad"
              pattern="[0-9]{2}"
              value={value.Edad}
              onChange={(e) => {
                actualizarInput(e);
              }}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Género</label>
            <select
              className="form-select"
              name="Genero"
              value={value.Genero}
              onChange={(e) => {
                actualizarInput(e);
              }}
            >
              <option>Selecciona</option>
              <option> Femenino</option>
              <option> Masculino</option>
              <option> No Binario</option>
            </select>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            class="form-control"
            name="Nombre"
            value={value.Nombre}
            onChange={(e) => {
              actualizarInput(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Apellidos</label>
          <input
            type="text"
            class="form-control"
            name="Apellido"
            value={value.Apellido}
            onChange={(e) => {
              actualizarInput(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo</label>
          <input
            type="email"
            class="form-control"
            name="Correo"
            value={value.Correo}
            onChange={(e) => {
              actualizarInput(e);
            }}
          />
        </div>

        <div className="mb-3 form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            name="Notificar"
            value={value.Notificar}
            onChange={(e) => {
              actualizarCheck(e);
            }}
          />
          <label class="form-check-label" for="flexSwitchCheckDefault">
            Notificar <BsBellFill />
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
