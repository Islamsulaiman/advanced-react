import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  let [item, setItem] = useState(window.innerWidth);

  let updateUi = () => setItem(window.innerWidth);

  /*this will run every render */
  useEffect(() => {
    window.addEventListener("resize", updateUi);
    /*this is the cleanup function that will remove the event when it's finished */
    return () => {
      window.removeEventListener("resize", updateUi);
    };
  });

  return (
    <>
      <h2>Window size</h2>
      <h3>{item}</h3>
    </>
  );
};

export default UseEffectBasics;
