import axios from "axios";
// Con el axios podremos hacer peticiones a servidores externos, suele usarse para BackEnd. Con esto traeremos la lista de información desde mockAPI

const URL ="https://616b5eb216c3fa0017171680.mockapi.io/editarpruebas"

const LinkPruebas = async () => {
    try {
        const {data} = await axios.get(URL)
        return data  //Esto es como un resolve
    } catch (error) {
        throw error  // esto es como un reject
    }
}

export { LinkPruebas }