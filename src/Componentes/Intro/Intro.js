import React from "react";
import imagenes from "../img/imagenes";
import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <div>
      <div >
        <img className="logo" src={imagenes.img2} />
      </div>
      <h1 className="tituloIntro">PLATAFORMA AGM CONSULTORIA</h1>
      <div className="containerintro">
        <div className="moduloIntro">
          <img src={imagenes.img4} className="card-text" />
          <Link style={{ textDecoration: "none" }} to="/login" className="psicolab">Psicolab</Link>
        </div>
        <div className="moduloIntro">
          <img src={imagenes.img3} className="card-text" />
          <button className=" clima">Clima laboral</button>
        </div>
      </div>
    </div>
  );
}
