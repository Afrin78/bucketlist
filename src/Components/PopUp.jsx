import React from "react";

function PopUp({ newItem, setNewItem, handleSetBucket, setPopUp }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Add New Item</h2>
        <input
          type="text"
          placeholder="Enter item name"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="w-full border border-black px-2 py-1 mb-4"
        />
        <div className="flex justify-between">
          <button
            onClick={handleSetBucket}
            className="border border-black bg-gray-300 p-2"
          >
            Submit
          </button>
          <button
            onClick={() => setPopUp(false)}
            className="border border-black bg-gray-300 p-2"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
