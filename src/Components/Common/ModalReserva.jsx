const ModalReserva = () => {
  return (
    <div>
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body">...</div>
            <div class="modal-footer d-flex justify-content-between">
              <button
                type="button"
                class="btn btn-success"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button type="button" class="btn btn-success">
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
