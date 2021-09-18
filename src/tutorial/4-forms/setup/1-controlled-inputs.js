import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const subFunc = (e) => {
    /*preventDefault will prevent the object er are in to do its default action, in forms the default is to re-render after submitting
    and we dont want that right now */
    e.preventDefault();
    console.log("Hello");
  };

  return (
    <>
      <form action='GET' className='form' onSubmit={subFunc}>
        <div>
          <label htmlFor='firstName'>Name: </label>
          <input type='text' id='' name='firstName' />
        </div>
        <div>
          <label htmlFor='email'>Email: </label>
          <input type='text' id='' name='email' />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default ControlledInputs;
