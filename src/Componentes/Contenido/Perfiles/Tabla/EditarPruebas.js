import ModalCargaMasiva from "../CargaMasiva/ModalCargaMasivaEditar";
import { UseModal } from "../../Perfiles/CargaMasiva/useModal";
import ListaPruebasEditar from "../../../Contenido/Views/ListaPruebasEditar";

export default function EditarPruebas() {
  const [isOpenModal4, openModal4, closeModal4] = UseModal(false);
  return (
    <div>
      <button
        onClick={openModal4}
        type="button"
        className="btn btn-primary editarboton"
      >
        <div className="editartexto">Elegir</div>
      </button>
      <ModalCargaMasiva isOpen={isOpenModal4} closeModal={closeModal4}>
        <h5 className="modal-header">Editar Pruebas</h5>
        <div className="modal-body">
          <ListaPruebasEditar></ListaPruebasEditar>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary cancel-edit"
              data-bs-dismiss="modal"
              onClick={closeModal4}
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
}
