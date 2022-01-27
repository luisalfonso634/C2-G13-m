const ModalReserva = () => {
  return (
    <div>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">...</div>
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
