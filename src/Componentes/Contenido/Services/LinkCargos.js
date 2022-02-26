import axios from "axios";
// Con el axios podremos hacer peticiones a servidores externos, suele usarse para BackEnd. Con esto traeremos la lista de información desde mockAPI
//https://616b5eb216c3fa0017171680.mockapi.io/cargos
const URL =`${process.env.REACT_APP_API}cargos`

const LinkCargos = async () => {
    try {
        const {data} = await axios.get(URL)
        return data  //Esto es como un resolve
    } catch (error) {
        throw error  // esto es como un reject
    }
}


const crearCargo = async (nuevoCargo) =>{
    try {
        const headers = {
            "Content-Type" : "application/json"
        }
        const { data } = await axios.post(URL, nuevoCargo, { headers } )
        return data
    } catch (error) {
        throw error
    }
}

const obtenerCargoPorId = async (id) => {
    try {
        const {data} = await axios.get(`${URL}/${id}`)  //2. Devueve la información de un solo producto.
        return data
    } catch (error) {
        throw error
    }
}


// Esto es clase 10 dia 3 resumen


const editarCargoPorId = async (id, objCargo) => {
    try {
        const headers = {
            "Content-Type": "application/json",
        };
        await axios.put(`${URL}/${id}`, objCargo, { headers });
        return; //resolve
    } catch (error) {
        throw error;
    }
};


const eliminarCargo = async (id) => {
    try {
        await axios.delete(`${URL}/${id}`);
        return "Cargo eliminado";
    } catch (error) {
        throw error;
    }
};

// aqui concluye la clase 10 dia 3 resumen


export { LinkCargos, crearCargo, obtenerCargoPorId, editarCargoPorId, eliminarCargo }