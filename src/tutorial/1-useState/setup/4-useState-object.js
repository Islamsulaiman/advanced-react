import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "islam",
    age: 29,
    massage: "Hello",
  });
  const changeMassage = () => {
    setPerson({ ...person, massage: "hii" }); // pass object with two argument  1) spread operator of copy of the base object 2) the property we want to change.
  };

  return (
    <>
      <h3 className='item'>{person.age}</h3>
      <h3 className='item'>{person.name}</h3>
      <h3 className='item'>{person.massage}</h3>

      <button type='button' onClick={changeMassage}>
        change Massage
      </button>
    </>
  );
};

export default UseStateObject;
