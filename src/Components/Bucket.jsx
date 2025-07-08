import React from "react";
import { IMG_URL } from "../config";

function Bucket({ bucket, title, showItem = true}) {
  return (
    <div className="w-1/3 p-2 border border-black rounded">
      <div className="flex flex-col items-center">
        {/* <img src={IMG_URL} alt="Bucket 1" /> */}
        <h2 className="font-bold text-center mb-2 text-xl
        ">{title}</h2>
      </div>

      {showItem &&
      bucket.map((item, index) => {
        return (
          <div key={index} className="m-4 p-2 border border-black">
            <span>{item}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Bucket;
