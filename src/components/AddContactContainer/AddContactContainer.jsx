import "./AddContactContainer.css";

import { MdAdd } from "react-icons/md";
import { MdClose } from "react-icons/md";

function AddContactContainer({ toggleModal }) {
  const closeModal = () => {
    toggleModal();
  };

  return (
    <div className="backdrop-container">
      <div className="add-contact">
        <div className="add-contact__header flex">
          <h2 className="add-contact__title">New contact </h2>
          <MdClose
            onClick={closeModal}
            style={{ cursor: "pointer", fontSize: "1.8rem" }}
          />
        </div>
        <form className="flex">
          <input name="name" type="text" placeholder="Name" />
          <input type="tel" name="phone" placeholder="Phone-number" />
          <button className="btn" type="submit">
            <MdAdd style={{ cursor: "pointer" }} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddContactContainer;
