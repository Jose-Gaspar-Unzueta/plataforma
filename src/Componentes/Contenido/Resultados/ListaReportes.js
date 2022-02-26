import { useState, useEffect } from "react";
import { LinkReportes, DeleteReporte } from "./LinkReportes";
import { DeleteProceso } from "../Services/ProcesoService";
import Swal from "sweetalert2";
import {
  BsFillTrashFill,
} from "react-icons/bs";



export default function ListaReportes() {
  const [reportes, setReportes] = useState([]);

  const getReportes = async () => {
    try {
      const reportesObtenidos = await LinkReportes();
      setReportes(reportesObtenidos); // despues de obtener los datos, actualizamos el estado
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
      //si es que el usuario ha confirmado
      try {
        await DeleteReporte(id);
        await Swal.fire({
          icon: "success",
          title: "Proceso eliminado",
        });
        getReportes();
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {getReportes()}, []);
  
    return (
      <div>
        {/*<h1>Reportes</h1>*/}
        <table className="table ">
          <thead className="thead">
            <tr>
              <th>#</th>
              <th>Analista de Contabilidad</th>
              <th>Fecha de Solicitud</th>
              <th>Reportes</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {reportes.map(({ id, AnalistadeContabilidad, FechadeSolicitud }, i) => (
              <tr key={i} >
                
                <td className="bodytablalistaresultados"><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                <td className="bodytablalistaresultados">{AnalistadeContabilidad}</td>
                <td className="bodytablalistaresultados">{FechadeSolicitud}</td>
                <td>Completa 
                    <svg xmlns="http://www.w3.org/2000/svg" color="#F28705" width="20" height="20" fill="currentColor" class="bi bi-kanban-fill" viewBox="0 0 16 16">
                      <path d="M2.5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-11zm5 2h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-5 1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm9-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
                    </svg>
                     / Resumida 
                    <svg xmlns="http://www.w3.org/2000/svg" color="#F28705" width="20" height="20" fill="currentColor" class="bi bi-kanban-fill" viewBox="0 0 16 16">
                    <path d="M2.5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-11zm5 2h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-5 1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm9-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
                    </svg>
                </td>
                <td>
                <button
                  className="boton btn-delete"
                  onClick={() => {
                    verificarEliminar(id); /*id*/
                  }}
                >
                  <BsFillTrashFill />
                </button>
              </td>
                {/*<td ><EditarPruebas></EditarPruebas></td>*/}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  