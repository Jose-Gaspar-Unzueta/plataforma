import ModalCargaMasiva from "../CargaMasiva/ModalCargaMasivaEditar";
import { UseModal } from "../../Perfiles/CargaMasiva/useModal";

export default function ModalTest() {
  const [isOpenModal5, openModal5, closeModal5] = UseModal(false);
  const iconDoc = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="currentColor"
      class="bi bi-file-earmark-text"
      viewBox="0 0 16 16"
    >
      <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
      <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
    </svg>
  );



  return (
    <div>
      <div type="button" onClick={openModal5} className="icondoc">
        {iconDoc}
      </div>

      {/* <button
        onClick={openModal5}
        type="button"
        className="btn btn-primary editarboton"
      >
        <div className="editartexto">Elegir</div>
      </button> */}
      <ModalCargaMasiva isOpen={isOpenModal5} closeModal={closeModal5}>
        <h5 className="modal-header">Resumen de Prueba</h5>
        <div className="modal-body">
          <h5>Descripción</h5>
          <p>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </p>

          <h5>Factores</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry of the printing and typesetting industry
          </p>
          <h5>Aplicación</h5>
          <p>Ideal para puestos regulares, de confianza y gerenciales.</p>
          <h5>Tiempo</h5>
          <p>40 min.</p>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={closeModal5}
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
