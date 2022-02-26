export default function FormCargo({ value, actualizarInput, manejarSubmit }) {
  // console.log(value);
  return (
    <div>
      <form
        onSubmit={(e) => {
          manejarSubmit(e);
        }}
      >
        <div className="mb-3">
          <label className="form-label">Nombre del Cargo</label>
          <input
            type="text"
            className="form-control"
            name="Cargo"
            value={value.Cargo}
            onChange={(e) => {
              actualizarInput(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Area</label>
          <input
            type="text"
            className="form-control"
            name="Area"
            value={value.Area}
            onChange={(e) => {
              actualizarInput(e);
            }}
          />
        </div>
        <div className="modal-footer">
          <button className="btn btn-primary" type="submit">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}
