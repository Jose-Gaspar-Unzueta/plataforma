import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const Modal = ({ children, isOpen, closeModal }) => {
  const stopModal = (e) => e.stopPropagation();
  return (
    <div className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={stopModal}>
        <button class="modal-close iconCerrar" onClick={closeModal}>
          <AiFillCloseCircle className="cerrar" />
        </button>
        {children}
      </div>
    </div>
  );
};
export default Modal;
