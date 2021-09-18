import React, { useState, useEffect } from "react";

const ShowHide = () => {
  let [bool, setBool] = useState(false);

  return (
    <>
      <button
        className='btn'
        onClick={() => {
          setBool(!bool);
        }}
      >
        Hide/appear Component
      </button>
      <br style={{ color: "black" }} />
      {bool && <Comp />}
    </>
  );
};

const Comp = () => {
  const [size, setSize] = useState(window.innerWidth);

  const sizeWindow = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", sizeWindow);
    return () => {
      window.removeEventListener("resize", sizeWindow);
    };
  }, []);
  return (
    <>
      <h3>{size}</h3>
    </>
  );
};

export default ShowHide;
