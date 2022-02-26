import { useContext } from "react";
import { AuthContext } from "./authContext";
import { Navigate } from "react-router";

export default function PrivateRoute(props) {
    //props.children es lo que nos va a editar todos los componentes hijos, sin importar que sean, igual lo renderiza.
    const {user} = useContext(AuthContext)
    console.log("mostrando estado user")
    //el navigate se usa para redireccionar.
    return user !== null ? props.children : <Navigate to="/login"/>
}
