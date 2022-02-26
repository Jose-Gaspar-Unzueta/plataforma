import React from "react";

export default function Situacion() {
  return (
    <div className="textosituacion">
      {/* en el label, de for iba for="flexSwitchCheckDefault"  en los 2 label.*/}
      <label className="form-check-label" >Inactivo</label>  
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <label className="form-check-label" >Activo</label>
      </div>
    </div>
  );
}
