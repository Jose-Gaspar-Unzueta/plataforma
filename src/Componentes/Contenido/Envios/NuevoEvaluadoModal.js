import Modal from "./cerrarModal";
import FormEvaluado from "./FormEvaluado";
import { UseModal } from "../Perfiles/CargaMasiva/useModal";
import { BiPlus } from "react-icons/bi";
import { FaUserEdit } from "react-icons/fa";
import { useState } from "react";
import { CreateEvaluado } from "../Services/EvaluadosService";

const NuevoEvaluado = (idProc) => {
  const [isOpenModal, openModal, closeModal] = UseModal(false);

  const [value, setValue] = useState({
    ProcesoId: idProc,
    Modo: "",
    DNI: "",
    Edad: "",
    Genero: "",
    Nombre: "",
    Apellido: "",
    Correo: "",
    Notificar: false,
  });
  const actualizarInput = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  const actualizarCheck = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.checked,
    });
  };

  const submit = async (e) => {
    console.log(e);
    e.preventDefault();

    try {
      await CreateEvaluado(idProc.idProc, value);
      // closeModal();
      window.location.replace("");
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      <div>
        <button className="btn-orange rounded-circle" onClick={openModal}>
          <BiPlus />
        </button>
      </div>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <h6 className="modal-header">
          <FaUserEdit className="user" />
          Agregar ------
        </h6>
        <FormEvaluado
          value={value}
          actualizarInput={actualizarInput}
          actualizarCheck={actualizarCheck}
          submit={submit}
        />
        <div className="modal-footer"></div>
      </Modal>
    </div>
  );
};

export default NuevoEvaluado;
