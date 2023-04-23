import "./App.css";

import { useState, useRef, useEffect } from "react";

import { MdOutlineSearch } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

function App() {
  return (
    <>
      <header className="flex">
        <div className="head flex">
          <div className="head-title">
            <h1>Meus contatos</h1>
          </div>
          <div className="head-icons flex">
            {/* <MdOutlineSearch style={{ cursor: "pointer" }} /> */}
            <MdAdd style={{ cursor: "pointer" }} />
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
    </>
  );
}

export default App;
