import { useState, useEffect } from "react";
import { LinkPruebas } from "../Services/LinkPruebasEditar";

export default function ListaPruebasEditar() {
  const [pruebas, setPruebas] = useState([]);

  const getPruebas = async () => {
    try {
      const pruebasObtenidas = await LinkPruebas();
      setPruebas(pruebasObtenidas); // despues de obtener los datos, actualizamos el estado
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {getPruebas()}, []);

  return (
    <div>
      <table className="table ">
        <thead className="thead ">
          <tr>
            <th>Pruebas</th>
            <th>Tiempo</th>
            <th>Tipo</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {pruebas.map(({ Prueba, Tiempo, Tipo }, i) => (
            <tr key={i}>
              
              <td className="boditablalistapruebas"><input className="form-check-input espacioprueba" type="checkbox" value="" id="flexCheckDefault"/> {Prueba}</td>
              <td className="boditablalistapruebas">{Tiempo}</td>
              <td className="boditablalistapruebas">{Tipo}</td>
              <td className="boditablalistapruebas">Eliminar</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
