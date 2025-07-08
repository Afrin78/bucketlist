import { useState } from "react";
import "./App.css";
import PopUp from "./Components/PopUp";
import Bucket from "./Components/Bucket";
import SearchComponent from "./Components/SearchComponent";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [newItem, setNewItem] = useState("");
  const [bucket1, setBucket1] = useState(["atib", "anis"]);
  const [bucket2, setBucket2] = useState([]);
  const [bucket3, setBucket3] = useState(["akif"]);
  const [popUp, setPopUp] = useState(false);
 <h1>Hello</h1>
  const handleEnter = () => {
    setPopUp(true);
  };

  const handleClick = () => {
    const input = searchInput.trim().toLowerCase();
    const foundIn = [];

    if (bucket1.filter((el) => el.toLowerCase() === input).length > 0) {
      foundIn.push("Bucket 1");
    }
    if (bucket2.filter((el) => el.toLowerCase() === input).length > 0) {
      foundIn.push("Bucket 2");
    }
    if (bucket3.filter((el) => el.toLowerCase() === input).length > 0) {
      foundIn.push("Bucket 3");
    }

    if (foundIn.length === 3) {
      alert(`"${input}" is present in all buckets`);
    } else if (foundIn.length > 0) {
      alert(`"${input}" is present in: ${foundIn.join(", ")}`);
    } else {
      alert(`"${input}" not found in any bucket`);
    }
  };

  const handleSetBucket = () => {

    const trimmedItem = newItem.trim();
    if (!trimmedItem) return;

    // const bucketLengths = [bucket1.length, bucket2.length, bucket3.length];
    // const minLength = Math.min(...bucketLengths);
    // const minIndex = bucketLengths.indexOf(minLength);

    if (/^[0-9]+$/.test(trimmedItem)) {
      setBucket1((prev) => [...prev, trimmedItem]);
    } else if (/^[a-zA-Z]+$/.test(trimmedItem)) {
      setBucket2((prev) => [...prev, trimmedItem]);
    } else {
      setBucket3((prev) => [...prev, trimmedItem]);
    }

    setNewItem("");
    setPopUp(false);
  };

  return (
    <>
      <h1 className="font-bold text-center text-2xl m-4">Bucket List</h1>
      <SearchComponent
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleClick={handleClick}
        handleEnter={handleEnter}
      />

      <div className="flex justify-between m-8 p-4">
        <Bucket bucket={bucket1} title={"BUCKET 1"} />
        <Bucket bucket={bucket2} title={"BUCKET 2"} />
        <Bucket bucket={bucket3} title={"BUCKET 3"} />
      </div>

      {popUp && (
        <PopUp
          newItem={newItem}
          setNewItem={setNewItem}
          handleSetBucket={handleSetBucket}
          setPopUp={setPopUp}
        />
      )}
    </>
  );
}

export default App;



