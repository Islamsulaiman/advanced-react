import React, { useState } from "react";

/*This component will link between the value Iam entring with the value in the useState of any input feild
by setting value and onChange() in every input feild */

const ControlledInputs = () => {
  let [firstName, setFirstName] = useState("");
  let [email, setEmail] = useState("");
  let [person, setPerson] = useState([]);

  const subFunc = (e) => {
    /*preventDefault will prevent the object er are in to do its default action, in forms the default is to re-render after submitting
    and we dont want that right now */
    e.preventDefault();
    //Error handling
    if (firstName && email) {
      // if the user added a value
      let user = { firstName, email }; // if the key and value is the same, then we can ignore typing both, we just type one name
      //add the new object to the
      console.log(person);
      setPerson((person) => {
        return [...person, user]; //use spread operator to add the old values then add the new value stored in user
      });
      setEmail("");
      setFirstName("");
    } else {
      console.log("No user Inputs");
    }
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
      {person.map((onePerson) => {
        let { id, name, email } = onePerson;
        console.log(name, email);
        return (
          <>
            <div className='item' key={id}>
              <h3>{firstName}</h3>
              <p>{email}</p>
            </div>
          </>
        );
      })}
    </>
  );
};

export default ControlledInputs;
