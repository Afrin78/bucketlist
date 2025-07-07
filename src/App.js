import { useState } from "react";
import "./App.css";
import { IMG_URL } from "./config";
import PopUp from "./Components/PopUp";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [newItem, setNewItem] = useState("");
  const [bucket1, setBucket1] = useState([]);
  const [bucket2, setBucket2] = useState([]);
  const [bucket3, setBucket3] = useState([]);
  const [popUp, setPopUp] = useState(false);

  const handleEnter = () => {
    setPopUp(true);
  };

  const handleClick = () => {
    const input = searchInput.trim();
    const foundIn = [];

    if (bucket1.includes(input)) foundIn.push("Bucket 1");
    if (bucket2.includes(input)) foundIn.push("Bucket 2");
    if (bucket3.includes(input)) foundIn.push("Bucket 3");

    if (foundIn.length === 3) {
      alert(`"${input}" is present in all buckets`);
    } else if (foundIn.length > 0) {
      alert(`"${input}" is present in: ${foundIn.join(", ")}`);
    } else {
      alert(`"${input}" not found in any bucket`);
    }
  };

  return (
    <>
      <h1 className="font-bold text-center text-2xl m-4">Bucket List</h1>
      <div className="flex justify-center gap-2 m-4">
        <input
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          className="border-solid border-2 border-black w-3/6"
        />
        <button
          className="border-solid border-2 border-black w-1/6 bg-gray-300"
          onClick={handleClick}
        >
          Search
        </button>
        <button
          className="border-solid border-2 border-black w-1/6 bg-gray-300"
          onClick={handleEnter}
        >
          Enter
        </button>
      </div>

      <div className="flex justify-between m-8 p-4">
        <div className="w-1/3 p-2 border border-black rounded">
          <div className="flex flex-col items-center">
            <img src={IMG_URL} alt="Bucket 1" />
            <h2 className="font-bold text-center mb-2">Bucket 1</h2>
          </div>
          {bucket1.map((item, index) => {
            return (
              <div key={index} className="m-4 p-2 border border-black">
                <span>{item}</span>
              </div>
            );
          })}
        </div>

        <div className="w-1/3 p-2 border border-black rounded">
          <div className="flex flex-col items-center">
            <img src={IMG_URL} alt="Bucket 2" />
            <h2 className="font-bold text-center mb-2">Bucket 2</h2>
          </div>
          {bucket2.map((item, index) => {
            return (
              <div key={index} className="m-4 p-2 border border-black">
                <span>{item}</span>
              </div>
            );
          })}
        </div>

        <div className="w-1/3 p-2 border border-black rounded">
          <div className="flex flex-col items-center">
            <img src={IMG_URL} alt="Bucket 3" />
            <h2 className="font-bold text-center mb-2">Bucket 3</h2>
          </div>
          {bucket3.map((item, index) => {
            return (
              <div key={index} className="m-4 p-2 border border-black">
                <span>{item}</span>
              </div>
            );
          })}
        </div>
      </div>

      {popUp && (
        <PopUp newItem={newItem} setNewItem={setNewItem} 
        bucket1={bucket1} bucket2={bucket2} bucket3={bucket3}
        setBucket1={setBucket1} setBucket2={setBucket2} 
        setBucket3={setBucket3} setPopUp={setPopUp}/>
      )}
    </>
  );
}

export default App;
