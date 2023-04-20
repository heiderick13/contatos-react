import "./App.css";

import { useState, useRef, useEffect } from "react";

import { MdOutlineSearch } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

function App() {
  return (
    <>
      <header>
        <div className="head flex">
          <div className="head-title">
            <h1>Meus contatos</h1>
          </div>
          <div className="head-icons flex">
            <MdOutlineSearch />
            <MdAdd />
            <MdDeleteOutline />
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
