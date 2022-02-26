import ModalCargaMasiva from "./ModalCargaMasiva";
import { UseModal } from "./useModal";

const CargaMasiva = () => {
  const [isOpenModal1, openModal1, closeModal1] = UseModal(false);

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

  const iconExcel = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="currentColor"
      className="bi bi-file-excel-fill"
      viewBox="0 0 16 16"
    >
      <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5.884 4.68 8 7.219l2.116-2.54a.5.5 0 1 1 .768.641L8.651 8l2.233 2.68a.5.5 0 0 1-.768.64L8 8.781l-2.116 2.54a.5.5 0 0 1-.768-.641L7.349 8 5.116 5.32a.5.5 0 1 1 .768-.64z" />
    </svg>
  );

  return (
    <div>
      <div className="cargamasiva">
        <p className="texto">Carga Masiva</p>
        <button onClick={openModal1} className="botoncargamasiva">
          <div className="iconcarga2">{iconCarga}</div>
        </button>
      </div>
      <ModalCargaMasiva isOpen={isOpenModal1} closeModal={closeModal1}>
        <h5 className="modal-header">Carga Masiva</h5>
        <div className="modal-body">
          <div>
            {/* este textocuerpo1 no tiene css */}
            <p className="textocuerpo1">
              Cargue o arrastre el archivo de carga masiva según el formato
              indicado en la siguiente pestaña
            </p>
          </div>
          <div className="toast-body">
            <input className="form-control" type="file" id="formFile" />
          </div>
          <div>
            <p className="textocuerpo2">
              Descargue el formato de carga masiva Aquí
              <span className="iconExcel">{iconExcel}</span>
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={closeModal1}
            >
              Cancelar
            </button>
            <button type="submit" className="btn btn-primary">
              Aceptar
            </button>
          </div>
        </div>
      </ModalCargaMasiva>
    </div>
  );
};

export default CargaMasiva;
