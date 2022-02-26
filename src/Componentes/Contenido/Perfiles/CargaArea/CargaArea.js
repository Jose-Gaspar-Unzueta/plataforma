import ModalCargaMasiva from "../CargaMasiva/ModalCargaMasiva";
import { UseModal } from "../CargaMasiva/useModal";

const CargaArea = () => {
  const [isOpenModal3, openModal3, closeModal3] = UseModal(false);

  const iconCarga = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      className="bi bi-plus-circle"
      viewBox="0 0 16 16"
    >
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
    </svg>
  );

  return (
    <div>
      <div className="cargamasiva ">
        <p className="texto">Área</p>
        <button onClick={openModal3} className="botoncargamasiva">
          <div className="iconcarga2">{iconCarga}</div>
        </button>
      </div>

      <ModalCargaMasiva isOpen={isOpenModal3} closeModal={closeModal3}>
        <h5 className="modal-header">Carga Área</h5>
        <div className="modal-body">
          <div>
            {/* Aqui hay un # que se debe añadir para backend */}
            <label  className="textocuerpo1">
              Agregar Área
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Ingrese un área"
            />
          </div>
          <div>
            <div>
              {/* Aqui hay otro # que se debe añadir para backend */}
              <label  className="textocuerpo1">
                Área
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Ponga el Área del Cargo"
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={closeModal3}
            >
              Cancelar
            </button>
            <button type="button" className="btn btn-primary">
              Aceptar
            </button>
          </div>
        </div>
      </ModalCargaMasiva>
    </div>
  );
};

export default CargaArea;
