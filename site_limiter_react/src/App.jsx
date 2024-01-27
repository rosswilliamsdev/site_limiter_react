import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Buttons from "./Buttons";

function App() {
  const [sites, setSites] = useState("");
  const [numberInput, setNumberInput] = useState(0);

  // const db = localStorage.getItem("blocker-sites-db");
  // if (localStorage.getItem("blocker-sites-db") === null) {
  //   localStorage.setItem("blocker-sites-db");
  // }

  function handleSaveButtonClick() {
    console.log("Number Input Value:", numberInput);
  }

  function handleSave() {
    console.log("Save clicked");
  }

  function handleReset() {
    console.log("Reset clicked");
  }

  return (
    <>
      <h1>
        Site Limiter <img className="logo" src="./images/lock-solid.png" />
      </h1>
      <div className="container">
        <div className="site-div">
          What sites do you want to limit today?
          <input id="sites-input" type="text" />
        </div>
        <div className="visits-div">
          How many visits are allowed?
          <input
            id="number-input"
            type="number"
            min="0"
            value={numberInput}
            onChange={(e) => {
              console.log(e.target.value);
              setNumberInput(e.target.value);
            }}
          />
        </div>
        <Buttons />
      </div>
    </>
  );
}

export default App;
