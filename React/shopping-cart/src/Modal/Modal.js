
import './Modal.css';
import React from 'react';

const Modal = ({ handleClose, show, children }) => {
  let showHideClassName = show ? "modal display-block" : "modal display-none";
  console.log(showHideClassName);
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

export default Modal;