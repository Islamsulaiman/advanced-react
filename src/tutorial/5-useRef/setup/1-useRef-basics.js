import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const nameRef = useRef("starter");
  const handleSubmit = (e) => {
    e.preventDefault();
    nameRef.current.style.width = "400px";
    console.log(nameRef.current.type);
  };

  useEffect(() => {
    console.log(nameRef.current.value);
  });
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='fistName'>Name: </label>
        <input
          type='text'
          style={{ width: "100px" }}
          name='firstName'
          ref={nameRef}
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default UseRefBasics;
