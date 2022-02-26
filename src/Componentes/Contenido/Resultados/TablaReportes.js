import ListaReportes from "./ListaReportes";
import { UseModal } from "../Perfiles/CargaMasiva/useModal";
import ModalCargaMasiva from "../Perfiles/CargaMasiva/ModalCargaMasiva";
import ModalReporte from "./ModalReporte";

export default function TablaReportes() {
  const [isOpenModal6, openModal6, closeModal6] = UseModal(false);
  return (
    <div>
        
        
        <button onClick={openModal6} type="button" className="btn btn-primary ver">
        <div className="verreporte">Revisar</div>
        </button>
        <ModalReporte isOpen={isOpenModal6} closeModal={closeModal6}>
        <h5 className="modal-header">Reportes</h5>
        <div className="modal-body-reporte">
          <ListaReportes></ListaReportes>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={closeModal6}>
              Cancelar
            </button>

            {/* <button type="button" class="btn btn-primary">
              Aceptar
            </button> */}
          </div>
        </div>
        </ModalReporte>
    </div>
  );
}
