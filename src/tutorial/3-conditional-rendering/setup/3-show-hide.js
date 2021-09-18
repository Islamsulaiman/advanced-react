import React, { useState, useEffect } from "react";

const ShowHide = () => {
  let [bool, setBool] = useState(false);

  return (
    <>
      <h3>{bool}</h3>
      <button
        className='btn'
        onClick={() => {
          setBool(!bool);
        }}
      >
        Hide/appear Component
      </button>
    </>
  );
};

const comp = () => {
  return (
    <>
      <h3>Hello</h3>
    </>
  );
};

export default ShowHide;
