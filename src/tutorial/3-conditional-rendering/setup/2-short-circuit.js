import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

// this component turn between and , or based on the value of text and using short circuit
//
const ShortCircuit = () => {
  let [text, setText] = useState(false);

  return (
    <>
      <h3>Using ternary operator</h3>
      {/* this button flip the value of text */}
      <button className='btn' onClick={() => setText(!text)}>
        Change the state
      </button>
      <br />
      {text ? (
        <p>
          The value is <bold>true</bold>
        </p>
      ) : (
        <div>
          <h5>The value is false</h5>
          <bold>Blease check text value</bold>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
