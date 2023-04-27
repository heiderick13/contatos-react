import "./App.css";

import { useState, useRef, useEffect } from "react";

import { MdOutlineSearch } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

import ContactCard from "./components/ContactCard/ContactCard";
import AddContactContainer from "./components/AddContactContainer/AddContactContainer";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

  const generateId = () => {
    return Date.now();
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleAddContact = (e, name, phoneNumber) => {
    e.preventDefault();

    if (name === "" || phoneNumber === "") return;

    const newContact = {
      id: generateId(),
      name,
      phoneNumber,
    };

    setContacts((prev) => {
      return [...prev, newContact];
    });
  };

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("localContacts"));
    if (savedContacts) setContacts(savedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem("localContacts", JSON.stringify(contacts));
  }, [contacts]);

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
            placeholder="Pesquise por nome"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </header>
      <div className="contacts-container flex">
        {contacts
          .filter((contact) => {
            return search.toLowerCase() === ""
              ? contact
              : contact.name.toLowerCase().includes(search);
          })
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .map((contact) => (
            <ContactCard
              key={contact.id}
              name={contact.name}
              phoneNumber={contact.phoneNumber}
            />
          ))}
      </div>
      {isModalOpen && (
        <AddContactContainer
          toggleModal={toggleModal}
          handleAddContact={handleAddContact}
        />
      )}
    </>
  );
}

export default App;
