import { useState, useEffect } from "react";
import Situacion from "../Perfiles/Tabla/Situacion";
import { LinkResultados, DeleteResultado } from "./LinkResultados";
import TablaReportes from "./TablaReportes";
import { DeleteProceso } from "../Services/ProcesoService";
import EditProcesoForm from "../Envios/EditProcesoForm";
import Swal from "sweetalert2";

import {
  BsFillEyeFill,
  BsFillEyeSlashFill,
  BsFillTrashFill,
  BsFillPenFill,
} from "react-icons/bs";

export default function ListaResultados() {
const [resultado, setResultado] = useState([])

    const getResultados = async () => {
        try {
            const ResultadosObtenidos = await LinkResultados()
            setResultado(ResultadosObtenidos)
        } catch (error) {
            console.log(error)
        }
    }

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
            await DeleteResultado(id);
            await Swal.fire({
              icon: "success",
              title: "Proceso eliminado",
            });
            getResultados();
          } catch (error) {
            console.log(error);
          }
        }
      };

    useEffect(() => {
        getResultados()
    }, [])

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre del Cargo</th>
                        <th>Area</th>
                        <th>Fecha de Solicitud</th>
                        <th>Días</th>
                        <th>Situación</th>
                        <th>Reportes</th>
                        <th>Ver Reportes</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {resultado.map(({id, NombredelCargo, Area, FechadeSolicitud, Dias, Reportes}, i) =>(
                        <tr key={i}>
                            <td className="bodytablalistaresultados"><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                            <td className="bodytablalistaresultados">{NombredelCargo}</td>
                            <td className="bodytablalistaresultados">{Area}</td>
                            <td className="bodytablalistaresultados">{FechadeSolicitud}</td>
                            <td className="bodytablalistaresultados">{Dias}</td>
                            <td className="bodytablalistaresultados"><Situacion></Situacion></td>
                            <td className="bodytablalistaresultados">{Reportes}</td>
                            <td className="bodytablalistaresultados"><TablaReportes></TablaReportes></td>
                            <td className="bodytablalistaresultados"><button className="boton btn-delete"
                            onClick={() => {
                            verificarEliminar(id);
                            }}>
                            <BsFillTrashFill />
                            </button>
                            </td>
                            {/*<td className="bodytablalistaresultados">{Eliminar}</td>*/}
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}