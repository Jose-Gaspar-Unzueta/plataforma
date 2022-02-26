import axios from "axios";
// https://61a686308395690017be931e.mockapi.io/Proceso


const URL = "https://61a686308395690017be931e.mockapi.io/Perfil";

const GetPerfil = async () => {
  try {
    const { data } = await axios.get(URL);
    return data;
  } catch (error) {
    throw error;
  }
};
const CreatePerfil = async (nuevoPerfil) => {
  try {
    const headers = {
      "Content-type": "application/json",
    };
    const { data } = await axios.post(URL, nuevoPerfil, { headers });
    return data;
  } catch (error) {
    throw error;
  }
};
export { GetPerfil, CreatePerfil };
