import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  let [item, setItem] = useState(0);
  useEffect(() => {
    console.log("hello");
  }, [item]);

  return (
    <>
      <h2>{item}</h2>;
      <button
        onClick={() => {
          if (item === 0) {
            setItem(1);
          } else {
            setItem(0);
          }
        }}
      >
        change
      </button>
    </>
  );
};

export default UseEffectBasics;
