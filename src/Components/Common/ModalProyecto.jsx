
const ModalProyecto = () => {
  return     <div>
  <div
    class="modal fade"
    id="modalProyecto"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body text-center">
       <p> Sobre nuestro proyecto</p>
        </div>
        <div class="modal-footer d-flex">
          <button
            type="button"
            class="btn btn-success"
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
