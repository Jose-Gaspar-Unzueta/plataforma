import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import FormCargo from "./FormCargo"
import { obtenerCargoPorId, editarCargoPorId } from "../../Services/LinkCargos";
import Swal from "sweetalert2";
import { useParams } from "react-router";

export default function EditarCargoView() {
    const [value, setValue] = useState({
        Cargo: "",
        Area: "",
      });

    const { id } = useParams() //1. con esto obtenemos el id de la url (mockAPI)
      const navigate = useNavigate()  //añadido clase 10 dia 3.

    const getCargo = async () =>{
        try {
            const cargoObtenido = await obtenerCargoPorId(id) //obtenemos el producto por su ID
            setValue(cargoObtenido) // la respuesta de mockAPI la pongo en el estado
            
        } catch (error) {
            console.log(error)
        }
    }
        
    // añadido en clase 10 dia 3
    const manejarSubmit = async (e) => {
        e.preventDefault()
        try {
            await editarCargoPorId(id, value)
            await Swal.fire({
                icon: "success",
                title: "Éxito",
                text: "Cargo editado exitosamente",
            })
            navigate("/perfiles");
        } catch (error) {
            console.log(error)
        }
    }

    const actualizarInput = (e) => {
        console.log(e.target.name, e.target.value)
        setValue({
            ...value, //tomando todo el value, spreadoperator
            [e.target.name]: e.target.value
        })
    }
    
    // Aqui acaba la semana 10 dia 3


    useEffect(()=>{
        getCargo() //3. Ejecutamos con un useEffect, con ello llamamos a la función que me trae un cargo por su ID

    },[])
    return (
        <div>
            {/* actualizarInput y manejarSubmit es del clase 10 dia 3 */}
           <FormCargo value={value} actualizarInput={actualizarInput} manejarSubmit={manejarSubmit}/> 
        </div>
    )
}
