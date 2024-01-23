import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateBazarForm from "./CreateBazarForm";

function AddBazar() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="bazar-form">
          <Button>Add new bazar</Button>
        </Modal.Open>
        <Modal.Window name="bazar-form">
          <CreateBazarForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddBazar;
