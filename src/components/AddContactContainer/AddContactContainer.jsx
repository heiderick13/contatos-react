import "./AddContactContainer.css";

import { useRef } from "react";

import { MdAdd } from "react-icons/md";
import { MdClose } from "react-icons/md";

function AddContactContainer({ toggleModal, handleAddContact }) {
  const newContactName = useRef();
  const newContactNumber = useRef();

  const closeModal = () => {
    toggleModal();
  };

  const addNewContact = (e) => {
    handleAddContact(
      e,
      newContactName.current.value,
      newContactNumber.current.value
    );

    newContactName.current.value = "";
    newContactNumber.current.value = "";
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
        <form className="flex" onSubmit={addNewContact}>
          <input ref={newContactName} type="text" placeholder="Name" />
          <input ref={newContactNumber} type="tel" placeholder="Phone-number" />
          <button className="btn" type="submit">
            <MdAdd style={{ cursor: "pointer" }} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddContactContainer;
