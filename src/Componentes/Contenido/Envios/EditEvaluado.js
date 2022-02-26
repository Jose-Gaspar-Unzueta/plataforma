import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetEvaluadoById, UpdateEvaluado } from "../Services/EvaluadosService";
import FormEvaluado from "./FormEvaluado";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

export default function EditEvaluado() {
  const { idProc } = useParams();
  const { id } = useParams();
  const navigate = useNavigate();

  const [value, setValue] = useState({
    // ProcesoId: idProc,
    Modo: "",
    DNI: "",
    Edad: "",
    Genero: "",
    Nombre: "",
    Apellido: "",
    Correo: "",
    Notificar: false,
  });

  const getEvaluado = async () => {
    try {
      const Proceso = await GetEvaluadoById(idProc, id);
      console.log(Proceso);
      setValue(Proceso);
    } catch (error) {
      throw error;
    }
  };

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
    e.preventDefault();
    try {
      await UpdateEvaluado(idProc, id, value);

      await Swal.fire({
        icon: "success",
        title: "Éxito",
        text: "Evaluado Editado Exitosamente",
      });
      navigate(`/EvaluadosView/${idProc}`);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getEvaluado();
  }, []);

  return (
    <div>
      <FormEvaluado
        value={value}
        actualizarInput={actualizarInput}
        actualizarCheck={actualizarCheck}
        submit={submit}
      />
    </div>
  );
}
