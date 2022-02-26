import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { DeleteEvaluado, GetEvaluados } from "../Services/EvaluadosService";
import { GetProcesoById } from "../Services/ProcesoService";
import NuevoEvaluado from "../Envios/NuevoEvaluadoModal";
import Swal from "sweetalert2";

import {
  BsBellFill,
  BsBellSlashFill,
  BsFillTrashFill,
  BsFillPenFill,
  BsJournalPlus,
} from "react-icons/bs";
import { FaCheckDouble, FaBookReader } from "react-icons/fa";

export default function EvaluadosView() {
  const [evaluados, setEvaluados] = useState([]);
  const [proceso, setProceso] = useState([]);
  const { idProc } = useParams();

  const obtainEvaluados = async () => {
    try {
      const evaluadosObtenidos = await GetEvaluados(idProc);
      setEvaluados(evaluadosObtenidos);
    } catch (error) {
      console.log(error);
    }
  };
  const GetProceso = async () => {
    try {
      const _proceso = await GetProcesoById(idProc);
      console.log(_proceso);
      setProceso(_proceso);
    } catch (error) {
      throw error;
    }
  };
  const verificarEliminar = async (id) => {
    const respuesta = await Swal.fire({
      icon: "warning",
      title: "¿Desea eliminar a este evaluado de la lista?",
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: "Sí",
      denyButtonText: "No",
    });
    if (respuesta.isConfirmed) {
      try {
        await DeleteEvaluado(idProc, id);
        await Swal.fire({
          icon: "success",
          title: "Eliminadoo",
        });
        obtainEvaluados();
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    obtainEvaluados();
    GetProceso();
  }, []);

  return (
    <div>
      <div className="my-3">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h3 className="tittle">{proceso.Nombre}</h3>
            </div>
            <div className="col-2 d-flex align-items-center justify-content-around">
              <NuevoEvaluado idProc={idProc} />
            </div>
          </div>
        </div>
      </div>

      <div>
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              class="nav-link "
              data-bs-toggle="tab"
              data-bs-target="#nav-pruebas"
              type="button"
              role="tab"
              aria-selected="false"
            >
              <BsJournalPlus /> Pruebas
            </button>
            <button
              class="nav-link active"
              data-bs-toggle="tab"
              data-bs-target="#nav-preparacion"
              type="button"
              role="tab"
              aria-selected="true"
            >
              <FaCheckDouble className="icon-orange" /> Preparacion
            </button>
            <button
              class="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#nav-resultados"
              type="button"
              role="tab"
              aria-selected="false"
            >
              <FaBookReader /> Resultados
            </button>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade"
            id="nav-pruebas"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div>
              <h1>Pruebas</h1>
            </div>
          </div>
          <div
            class="tab-pane fade show active"
            id="nav-preparacion"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <div>
              <Table table striped responsive="xl" hover className="table">
                <thead>
                  <tr>
                    <th>DNI</th>
                    <th>Nombre y Apellido</th>
                    {/* <th>Apellido</th> */}
                    <th>Correo</th>
                    <th>Notificar</th>
                    <th>Edad</th>
                    <th>Modo</th>
                    <th colSpan="2">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {evaluados.map(
                    (
                      {
                        id,
                        DNI,
                        Nombre,
                        Apellido,
                        Correo,
                        Notificar,
                        Edad,
                        Modo,
                      },
                      i
                    ) => (
                      <tr key={i}>
                        <td>{DNI}</td>
                        <td>
                          {Nombre} {Apellido}
                        </td>
                        <td>{Correo}</td>
                        <td>
                          {Notificar ? (
                            <BsBellFill className="icon-orange" />
                          ) : (
                            <BsBellSlashFill className="icon-orange" />
                          )}
                        </td>
                        <td>{Edad}</td>
                        <td>{Modo}</td>
                        <td>
                          <Link
                            className="boton btn-update"
                            to={`/EvaluadosView/${idProc}/EditEvaluado/${id}`}
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
          </div>
          <div
            class="tab-pane fade"
            id="nav-resultados"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            <h1>Resultados</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
