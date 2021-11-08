import React from "react";
import "./Modal.css";

const Modal = props => {
    const { className,modalType, modalRef, children } = props;

    return(
      <div className={`${className} modalBackground`}>
        <div ref={modalRef} className={`${className} ${modalType}`}>
          {children}
        </div>
      </div>
    )
}

export default Modal;