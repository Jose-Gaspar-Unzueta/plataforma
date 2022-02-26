import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { GetProcesos, DeleteProceso } from "../Services/ProcesoService";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

import {
  BsFillEyeFill,
  BsFillEyeSlashFill,
  BsFillTrashFill,
  BsFillPenFill,
  BsFillCalendar2CheckFill,
  BsFillCalendar2XFill,
} from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

export default function ProcesoView() {
  const [procesos, setProcesos] = useState([]);
  const obtainProcesos = async () => {
    try {
      const procesosObtenidos = await GetProcesos();
      setProcesos(procesosObtenidos);
    } catch (error) {
      console.log(error);
    }
  };

  const verificarEliminar = async (id) => {
    const respuesta = await Swal.fire({
      icon: "warning",
      title: "¿Desea eliminar este proceso?",
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: "Sí",
      denyButtonText: "No",
    });
    if (respuesta.isConfirmed) {
      try {
        await DeleteProceso(id);
        await Swal.fire({
          icon: "success",
          title: "Proceso eliminado",
        });
        obtainProcesos();
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    obtainProcesos();
  }, []);

  return (
    <div>
      <Table striped responsive="xl" hover className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Fecha Inicio</th>
            <th>Fecha Fin</th>
            <th>Remitente</th>
            <th colSpan="2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {procesos.map(
            ({ id, Nombre, Descripcion, FechaInicio, FechaFin, Oculto }, i) => (
              <tr key={i}>
                <td>{id}</td>
                <td>
                  <FaUserCircle className="icon-tabla" />
                  <Link to={`/EvaluadosView/${id}`}>{Nombre}</Link>
                </td>
                <td>{Descripcion}</td>
                <td>
                  <BsFillCalendar2CheckFill className="icon-orange" />
                  {new Intl.DateTimeFormat("es-ES", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  }).format(FechaInicio)}
                </td>
                <td>
                  <BsFillCalendar2XFill className="icon-orange" />
                  {new Intl.DateTimeFormat("es-ES", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  }).format(FechaFin)}
                </td>
                <td>
                  {Oculto ? (
                    <BsFillEyeSlashFill className="icon-orange" />
                  ) : (
                    <BsFillEyeFill className="icon-orange" />
                  )}
                </td>
                <td>
                  <Link
                    className="boton btn-update"
                    to={`/EditProcesoForm/${id}`}
                  >
                    <BsFillPenFill />
                  </Link>
                </td>
                <td>
                  <button
                    className="boton btn-delete"
                    onClick={() => {
                      verificarEliminar(id);
                    }}
                  >
                    <BsFillTrashFill />
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </div>
  );
}
