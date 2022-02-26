import ModalCargaMasiva from "../CargaMasiva/ModalCargaMasiva";
import { UseModal } from "../../Perfiles/CargaMasiva/useModal";
import CrearCargoView from "../../Views/CrearCargoView";

const CargaCargo = () => {
  const [isOpenModal2, openModal2, closeModal2] = UseModal(false);

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

  //crees un contexto que sirva para ver si creas o editas
  //cuando des click a crear o editar cambies el estado del contexto

  return (
    <div>
      <div className="cargamasiva">
        <p className="texto">Carga Cargo</p>
        <button onClick={openModal2} className="botoncargamasiva">
          <div className="iconcarga2">{iconCarga}</div>
        </button>
      </div>
      <ModalCargaMasiva isOpen={isOpenModal2} closeModal={closeModal2}>
        <h5 className="modal-header">Carga Cargo</h5>
        <div className="modal-body">
          <div>
            <CrearCargoView></CrearCargoView>
          </div>
          {/**contextoOperacion === "crear" ? (Modal de crear) : (EditarCargoView propid)*/}
          <div>
            <button
              type="button"
              className="btn btn-secondary boton-carga"
              data-bs-dismiss="modal"
              onClick={closeModal2}
            >
              Cancelar
            </button>
          </div>
        </div>
      </ModalCargaMasiva>
    </div>
  );
};

export default CargaCargo;
