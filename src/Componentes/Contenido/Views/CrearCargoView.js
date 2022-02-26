import { useState } from "react";
import FormCargo from "../Perfiles/CargaCargo/FormCargo";
import { crearCargo } from "../Services/LinkCargos";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

export default function CrearCargoView() {
  const [value, setValue] = useState({
    Cargo: "",
    Area: "",
  });

  const navigate = useNavigate();

  const actualizarInput = (e) => {
    // console.log(e);
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const manejarSubmit = async (e) => {
    //ESTO NO IBA COMENTADO (e.preventDefault()), PERO PARA QUE FUNCIONE LA CARGA DEL NUEVO CARGO USANDOLO CON NAVIGATE, DEBIO COMENTARSE.
    e.preventDefault();
    // console.log("submit Ejecutado")
    try {
      await crearCargo(value); 

      await Swal.fire({
        // position: "top-center",
        icon: "success",
        title: "El Cargo fue creado correctamente",
        showConfirmButton: false,
        timer: 1500,
      });
      //Despues de crear cargo, el useNavigate() permite que automaticamente se redirija hacia la lista de cargos, mediante la url que se pondrá, en este caso "/"
      navigate("/perfiles");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <FormCargo
        value={value}
        actualizarInput={actualizarInput}
        manejarSubmit={manejarSubmit}
      />
    </div>
  );
}
