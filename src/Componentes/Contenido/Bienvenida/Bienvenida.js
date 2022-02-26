import imagenes from "../../img/imagenes";

export default function Bienvenida() {
  return (
    <div className="col-8 bienvenida">
      <div className="row ">
        <div className="col-1"></div>
        <div className="col-4">
          Hola NOMBRE, bienvenido a nuestro portal de Evaluación Psicolaboral.
          Nuestro objetivo es ayudarle en la optención del mejor talento para su
          empresa manera sencilla, interactiva, rápida y segura. Para ello,
          ponemos a su disposición una serie de pruebas adecuadas para todo tipo
          de puesto a evaluar.
        </div>
        <div className="col-1"></div>
        <img className="imagen col-3" src={imagenes.img1} />
        <div className="col-1"></div>
      </div>
    </div>
  );
}
