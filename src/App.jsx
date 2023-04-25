import "./App.css";

import { useState, useRef, useEffect } from "react";

import { MdOutlineSearch } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

import ContactCard from "./components/ContactCard/ContactCard";
import AddContactContainer from "./components/AddContactContainer/AddContactContainer";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <header className="flex">
        <div className="head flex">
          <div className="head-title">
            <h1>Meus contatos</h1>
          </div>
          <div className="head-icons flex">
            {/* <MdOutlineSearch style={{ cursor: "pointer" }} /> */}
            <MdAdd onClick={toggleModal} style={{ cursor: "pointer" }} />
            {/* <MdDeleteOutline style={{ cursor: "pointer" }} /> */}
          </div>
        </div>
        <form>
          <input
            type="text"
            placeholder="Pesquise por nome ou dados de contato"
          />
        </form>
      </header>
      <div className="contacts-container flex">
        <ContactCard />
      </div>
      {isModalOpen && <AddContactContainer toggleModal={toggleModal} />}
    </>
  );
}

export default App;
