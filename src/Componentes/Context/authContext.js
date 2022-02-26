import { useState, useEffect, createContext } from "react";
import { auth, firebase } from "../config/Firebase";

export const AuthContext = createContext();

//con este proveedorGoogle va a servir para ejecutar las funciones de ingresar, salir, ver el estado del login.
const proveedorGoogle = new firebase.auth.GoogleAuthProvider();

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);

  const signIn = async () => {
    //este rptaGoogle nos indica que para loguearse, nos sale una ventana flotante, un popUp. signInWithPopup(proveedorGoogle)
    const rptaGoogle = await auth.signInWithPopup(proveedorGoogle);
    console.log(rptaGoogle);
  };

  //Deslogueo
  const signOut = () => auth.signOut();


  useEffect(() => {
    //en caso el usuario ingrese o salga de la app, se va a disparar esta funcion para ver que hay
    //si no esta logueado o si sale, retornará null
    //si se logue retornará un objeto
    return auth.onAuthStateChanged((user) => {
        //user es null(no logueado), o es un objeto(logueado)
        console.log(user)
        setUser(user);
    });
}, []);


  return (
    <AuthContext.Provider
      //value es lo que va a brindar desde su estado global
      value={{ user, signIn, signOut }}
    >
      {/* provider va a funcionar como una caja generica transparente, componente generico que va a contener otros componentes, sin saber cuales serán */}
      {props.children}
    </AuthContext.Provider>
  );
};
