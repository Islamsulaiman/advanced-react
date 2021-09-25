import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const myValue = e.target.value;
    const myName = e.target.name;
    setPerson({ ...person, [myName]: myValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ firstName: "", email: "", age: "" });
    } else {
      console.log("Error: invalid or missing inputs");
    }
  };

  return (
    <>
      <article className='container'>
        <form action='GET' className='form' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='firstName'>Name: </label>
            <input
              type='text'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='email'>Email: </label>
            <input
              type='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='age'>Age: </label>
            <input
              type='text'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <div>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </article>
      <article>
        {people.map((person) => {
          const { id, firstName, email, age } = person;
          return (
            <div key={id} className='item'>
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
