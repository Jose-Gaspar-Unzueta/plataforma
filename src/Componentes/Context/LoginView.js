import { useContext } from "react";
import { AuthContext } from "./authContext";

export default function LoginView() {
    const {signIn} = useContext(AuthContext)      
    

    return (
        <button className="btn btn-danger btn-lg botoninicio" onClick={signIn} >
            Ingresa con Google
        </button>
    )
}
