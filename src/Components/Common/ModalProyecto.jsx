
const ModalProyecto = () => {
  return     <div>
  <div
    className="modal fade"
    id="modalProyecto"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body text-center">
       <p> Sobre nuestro proyecto</p>
        </div>
        <div className="modal-footer d-flex">
          <button
            type="button"
            className="btn btn-success"
            data-bs-dismiss="modal"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
};

export default ModalProyecto;
