import {useState, useEffect} from 'react';
const ModalReserva = (props) => {

  return (
    <div>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">{props.values.idmodal}  ...</div>
              <span>{props.values.idmodal}</span>
            <div className="modal-footer d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button type="button" className="btn btn-success">
                Reservar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalReserva;
