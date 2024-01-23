import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateBazarForm from "./CreateBazarForm";

function AddBazar() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateBazarForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddBazar;
