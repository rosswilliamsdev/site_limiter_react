import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

// const db = localStorage.getItem("blocker-sites-db");
// if (localStorage.getItem("blocker-sites-db") === null) {
//   localStorage.setItem("blocker-sites-db");
// }

function App() {
  const [siteInput, setSiteInput] = useState("");
  const [numberInput, setNumberInput] = useState(0);
  const [sitesList, setSitesList] = useState([]);

  function handleAddSite() {
    console.log("click");
    if (!sitesList.includes(siteInput)) {
      setSitesList([...sitesList, siteInput]);
      setSiteInput("");
    }
  }
  function handleReset() {
    console.log("Reset clicked");
    setSitesList([]);
    setSiteInput("");
    setNumberInput(0);
  }

  function handleSave() {
    console.log("I'm saved!");
  }

  useEffect(() => {
    console.log("Effect triggered:", sitesList);
  }, [sitesList]);

  return (
    <>
      <h1>
        Site Limiter <img className="logo" src="src/assets/lock-solid.png" />
      </h1>
      <div className="container">
        <div className="site-div">
          <p>
            Create a list of sites and choose how many visits are allowed for
            each
          </p>
          <div className="input-and-button">
            <input
              id="sites-input"
              type="text"
              value={siteInput}
              onChange={(e) => {
                setSiteInput(e.target.value);
              }}
            />
            <button className="add-btn btn" onClick={handleAddSite}>
              Add
            </button>
          </div>
        </div>
        <div className="list-container">
          <h3>Your list:</h3>
          <ul className="list">
            {/* need to change the key to an id number? */}
            {sitesList.map((site) => {
              return (
                <li className="list-item" key={site}>
                  <input className="number-input" type="number" min="0" />
                  <strong>{site}</strong>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="buttons">
          <button id="save-btn" className="btn save-btn" onClick={handleSave}>
            Save
          </button>
          <button
            id="reset-btn"
            className="btn reset-btn"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
