import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FormProceso from "./FormProceso";
import { useNavigate } from "react-router";
import { GetProcesoById, UpdateProceso } from "../Services/ProcesoService";
import Swal from "sweetalert2";

export default function EditProcesoForm() {
  const [value, setValue] = useState({
    Nombre: "",
    Descripcion: "",
    FechaInicio: "",
    FechaFin: "",
    Perfil: "",
    Oculto: false,
  });
  const { id } = useParams();
  const navigate = useNavigate();

  const getProceso = async () => {
    try {
      const Proceso = await GetProcesoById(id);
      setValue(Proceso);
    } catch (error) {
      throw error;
    }
  };
  const actualizarCheck = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.checked,
    });
  };
  const actualizarInput = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
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
      await UpdateProceso(id, value);

      await Swal.fire({
        icon: "success",
        title: "Éxito",
        text: "Proceso Editado Exitosamente",
      });
      navigate("/envios");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProceso();
  }, []);

  return (
    <div>
      <h3>Editar Proceso</h3>
      <FormProceso
        value={value}
        actualizarInput={actualizarInput}
        actualizarCheck={actualizarCheck}
        setFechas={setFechas}
        submit={submit}
      />
    </div>
  );
}
