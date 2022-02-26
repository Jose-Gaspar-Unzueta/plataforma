import { useState, useEffect } from "react";

import Situacion from "../Perfiles/Tabla/Situacion";
import { LinkPruebas } from "../Services/LinkPruebas";
import ModalTest from "../Perfiles/Tabla/ModalTest";

export default function ListaPruebas() {
  const [pruebas, setPruebas] = useState([]);

  const iconSubir = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="currentColor"
      class="bi bi-arrow-up-circle-fill"
      viewBox="0 0 16 16"
    >
      <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
    </svg>
  );

  const getPruebas = async () => {
    try {
      const pruebasObtenidas = await LinkPruebas();
      setPruebas(pruebasObtenidas); // despues de obtener los datos, actualizamos el estado
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPruebas();
  }, []);

  return (
    <div>
      {/* <h1>Pruebas Utilizadas</h1> */}
      <table className="table ">
        <thead className="thead">
          <tr>
            <th>Test</th>
            <th>Pruebas</th>
            <th>Tipo</th>
            <th>Mover</th>
          </tr>
        </thead>
        <tbody>
          {pruebas.map(({ Prueba, Tipo }, i) => (
            <tr key={i}>
              <td>
                <ModalTest />
              </td>
              <td >{Prueba}</td>
              <td >{Tipo}</td>
              <td className="iconsubir">{iconSubir}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
