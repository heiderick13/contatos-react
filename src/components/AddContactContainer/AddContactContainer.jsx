import "./AddContactContainer.css";

import { MdAdd } from "react-icons/md";

function AddContactContainer() {
  return (
    <div className="backdrop-container">
      <div className="add-contact">
        <h2 className="add-contact__title">New contact</h2>
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
