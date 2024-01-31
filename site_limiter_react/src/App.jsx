import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

// const db = localStorage.getItem("blocker-sites-db");
// if (localStorage.getItem("blocker-sites-db") === null) {
//   localStorage.setItem("blocker-sites-db");
// }

function App() {
  const [siteInput, setSiteInput] = useState("");
  const [sitesList, setSitesList] = useState([]);
  const [nextID, setNextID] = useState(0);
  const [saveList, setSaveList] = useState([]);

  function handleAddSite() {
    const trimmedSiteInput = siteInput.trim();

    if (
      !sitesList.some((site) => site.name === trimmedSiteInput) &&
      trimmedSiteInput !== ""
    ) {
      setSitesList([
        ...sitesList,
        { id: nextID, name: trimmedSiteInput, visits: 0 },
      ]);
      setNextID((prevID) => prevID + 1);
      setSiteInput("");
    }
  }

  function handleVisitsChange(id, newVisits) {
    setSitesList((prevSitesList) =>
      prevSitesList.map((site) =>
        site.id === id ? { ...site, visits: newVisits } : site
      )
    );
  }

  function handleReset() {
    console.log("Reset clicked");
    setSitesList([]);
    setSiteInput("");
  }

  function handleSave() {
    setSaveList(...sitesList);
    console.log("Save list: ", saveList);
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
              placeholder="Enter a site to limit"
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
          <h3>Your Limit List:</h3>
          <ul className="list">
            {sitesList.map((site) => {
              return (
                <li className="list-item" key={site.id}>
                  <input
                    className="number-input"
                    type="number"
                    min="0"
                    value={site.visits}
                    onChange={(e) =>
                      handleVisitsChange(site.id, e.target.value)
                    }
                  />
                  <strong>{site.name}</strong>
                  <img
                    className="remove-site"
                    src="src/assets/square-xmark-solid.png"
                    onClick={() => {
                      setSitesList(
                        sitesList.filter((item) => item.id !== site.id)
                      );
                    }}
                  />
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
