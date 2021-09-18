import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

//this component turn between and , or based on the value of text and using short circuit

const ShortCircuit = () => {
  let [text, setText] = useState(false);

  return (
    <>
      {text && <h3>And operator</h3>}
      {text || <h3>Or operator </h3>}
      <button className='btn' onClick={() => setText(!text)}>
        Change the state
      </button>
    </>
  );
};

export default ShortCircuit;
