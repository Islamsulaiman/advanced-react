import React, { useState } from "react";

/*This component will link between the value Iam entring with the value in the useState of any input feild
by setting value and onChange() in every input feild */

const ControlledInputs = () => {
  let [firstName, setFirstName] = useState("");
  let [email, setEmail] = useState("");

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
          <input
            type='text'
            id=''
            name='firstName'
            placeholder='First name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='email'>Email: </label>
          <input
            type='text'
            id=''
            name='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default ControlledInputs;
