import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data); //using React.useState() we're importing useState function without importing it at the top

  const delOneItem = (personName) => {
    let remain = people.filter((person) => {
      return person.name !== personName;
    });

    setPeople(remain);
  };

  return (
    <>
      {people.map((person) => {
        let { id, name } = person;

        return (
          <div key={id} className='item'>
            <h3>{name}</h3>
            <button type='button' onClick={() => delOneItem(name)}>
              Delete Item
            </button>
          </div>
        );
      })}

      <button type='button' className='btn' onClick={() => setPeople([])}>
        {/* we implement the function directly by changing people value to empty list using setPeople()*/}
        Delete All Items
      </button>
    </>
  );
};

export default UseStateArray;
