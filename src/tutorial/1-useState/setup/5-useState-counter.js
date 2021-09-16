import React, { useState } from "react";

const UseStateCounter = () => {
  let [value, setValue] = useState(0); //initial value
  const dell = () => {
    return setValue(0);
  };

  return (
    <>
      <h1>Regular counter</h1>
      <h2>{value}</h2>
      <button className='btn' onClick={() => setValue(value - 1)}>
        -
      </button>
      <button className='btn' onClick={() => dell()}>
        0
      </button>
      <button className='btn' onClick={() => setValue(value + 1)}>
        +
      </button>
    </>
  );
};

export default UseStateCounter;
