import Modal from "./cerrarModal";
import FormProceso from "./FormProceso";
import { UseModal } from "../Perfiles/CargaMasiva/useModal";
import { BiPlus } from "react-icons/bi";
import { useState } from "react";
import { CreateProceso } from "../Services/ProcesoService";

const NuevoProceso = () => {
  const [isOpenModal, openModal, closeModal] = UseModal(false);
  const [value, setValue] = useState({
    Nombre: "",
    Descripcion: "",
    FechaInicio: "",
    FechaFin: "",
    Perfil: "",
    Oculto: false,
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
  const setFechas = (fechas) => {
    const [inicio, fin] = fechas;
    setValue({
      ...value,
      FechaInicio: inicio.getTime(),
      FechaFin: fin.getTime(),
    });
  };
  const submit = async (e) => {
    e.preventDefault();
    try {
      console.log(value);
      await CreateProceso(value);
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
        <h5 className="modal-header">Nuevo Proceso</h5>
        <FormProceso
          value={value}
          actualizarInput={actualizarInput}
          actualizarCheck={actualizarCheck}
          setFechas={setFechas}
          submit={submit}
        />
        <div className="modal-footer"></div>
      </Modal>
    </div>
  );
};

export default NuevoProceso;
