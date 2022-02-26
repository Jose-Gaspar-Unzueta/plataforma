import { useState, useEffect } from "react";
import EditarPruebas from "../Perfiles/Tabla/EditarPruebas";
import Situacion from "../Perfiles/Tabla/Situacion";
import { eliminarCargo, LinkCargos } from "../Services/LinkCargos";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

export default function ListaCargos() {
  const [cargos, setCargos] = useState([]);

  const getCargos = async () => {
    try {
      const pruebasObtenidas = await LinkCargos();
      setCargos(pruebasObtenidas); // despues de obtener los datos, actualizamos el estado
    } catch (error) {
      console.log(error);
    }
  };

  const verificarEliminar = async (id) => {
    const respuesta = await Swal.fire({
      icon: "warning",
      title: "Desea eliminar el cargo?",
      text: "Esta acción es irreversible",
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: "Sí, Eliminar",
      denyButtonText: "No, Cancelar",
    });
    if (respuesta.isConfirmed) {
      //si es que el usuario ha confirmado
      try {
        await eliminarCargo(id);
        await Swal.fire({
          icon: "success",
          title: "Cargo eliminado!",
        });
        getCargos();
      } catch (error) {
        console.log(error);
      }
    }
  };
 
  useEffect(() => {
    getCargos();
  }, []);

  return (
    <div>
      <div align="center">
        <ReactHTMLTableToExcel
          id="botonExportarExcel"
          className="btn btn-success"
          table="tablacargos"
          filename="Lista_de_Cargos"
          sheet="Página1"
          buttonText="Exportar a Excel"
        />
      </div>
      {/* <h1>Pruebas Utilizadas</h1> */}
      <div className="table-responsive">
        <table className="table " id="tablacargos">
          <thead className="thead ">
            <tr>
              <th>#</th>
              <th>Nombre del Cargos</th>
              <th>Área</th>
              <th>Situación</th>
              <th>Pruebas</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cargos.map(({ Cargo, Area, id }, i) => (
              <tr key={i}>
                <td className="boditablalistapruebas">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </td>
                <td className="boditablalistapruebas">{Cargo}</td>
                <td className="boditablalistapruebas">{Area}</td>
                <td className="boditablalistapruebas">
                  {" "}
                  <Situacion></Situacion>{" "}
                </td>
                <td className="boditablalistapruebas">
                  <EditarPruebas></EditarPruebas>
                </td>
                <td className="boditablalistapruebas">
                  {" "}
                  <Link className="btn btn-info" to={`/editarcargo/${id}`}>
                    <p className="editartexto">Editar</p>
                  </Link>{" "}
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      verificarEliminar(id);
                    }}
                  >
                    <p className="editartexto">Eliminar</p>
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
      </div>
  );
}
