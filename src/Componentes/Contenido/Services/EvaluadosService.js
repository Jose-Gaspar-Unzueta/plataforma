import axios from "axios";

const URL = "https://61a686308395690017be931e.mockapi.io/Proceso";

const GetEvaluados = async (id) => {
  try {
    const { data } = await axios.get(`${URL}/${id}/Evaluado`);
    return data;
  } catch (error) {
    throw error;
  }
};
const CreateEvaluado = async (idProc, nuevoEvaluado) => {
  try {
    const headers = {
      "Content-type": "application/json",
    };
    const URL2 = `${URL}/${idProc}/Evaluado`;
    console.log(URL2);
    const { data } = await axios.post(URL2, nuevoEvaluado, { headers });
    return data;
  } catch (error) {
    throw error;
  }
};

const GetEvaluadoById = async (idProc, id) => {
  try {
    const { data } = await axios.get(`${URL}/${idProc}/Evaluado/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};
const UpdateEvaluado = async (idProc, id, evaluado) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    await axios.put(`${URL}/${idProc}/Evaluado/${id}`, evaluado, { headers });
    return; //resolve
  } catch (error) {
    throw error;
  }
};

const DeleteEvaluado = async (idProc, id) => {
  try {
    await axios.delete(`${URL}/${idProc}/Evaluado/${id}`);
    return "Evaluado eliminado de la lista";
  } catch (error) {
    throw error;
  }
};

export {
  GetEvaluados,
  CreateEvaluado,
  GetEvaluadoById,
  UpdateEvaluado,
  DeleteEvaluado,
};
