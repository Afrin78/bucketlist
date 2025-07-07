import { useState } from "react";
import "./App.css";
import PopUp from "./Components/PopUp";
import Bucket from "./Components/Bucket";
import SearchSection from "./Components/SearchSection";

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
      
      <SearchSection searchInput={searchInput} setSearchInput={setSearchInput} handleClick={handleClick} handleEnter={ handleEnter} />
      <div className="flex justify-between m-8 p-4">
        <Bucket bucket={bucket1} title={"Bucket 1"}/>
        <Bucket bucket={bucket2} title={"Bucket 2"} />
        <Bucket bucket={bucket3} title={"Bucket 3"} />
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
