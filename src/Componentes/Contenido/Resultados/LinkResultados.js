import axios from "axios";

const URL ="https://619fa4d91ac52a0017ba49a7.mockapi.io/Resultados/Resultados"

const LinkResultados = async () => {
    try {
        const {data} = await axios.get(URL)
        return data
    } catch (error) {
        throw error 
    }

}

const DeleteResultado = async (id) => {
    try {
        await axios.delete(`${URL}/${id}`);
        return "Cargo eliminado";
    } catch (error) {
        throw error;
    }
};

export { LinkResultados, DeleteResultado }