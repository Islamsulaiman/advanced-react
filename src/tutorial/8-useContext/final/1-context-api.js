// import React, { useState, useContext } from "react";
// import { data } from "../../../data";
// // more components
// // fix - context api, redux (for more complex cases)

// const PersonContext = React.createContext();
// // two components - Provider, Consumer

// const ContextAPI = () => {
//   const [people, setPeople] = useState(data);

//   const removePerson = (id) => {
//     setPeople((people) => {
//       return people.filter((person) => person.id !== id);
//     });
//   };

//   let obj = {
//     removePerson,
//     people,
//   };

//   // { removePerson, people }

//   return (
//     <PersonContext.Provider value={obj}>
//       <h3>Context API / useContext</h3>
//       <List />
//     </PersonContext.Provider>
//   );
// };

// const List = () => {
//   const mainData = useContext(PersonContext);
//   return (
//     <>
//       {mainData.people.map((person) => {
//         return <SinglePerson key={person.id} {...person} />;
//       })}
//     </>
//   );
// };

// const SinglePerson = ({ id, name }) => {
//   const { removePerson, people } = useContext(PersonContext);

//   let i = people.map((t) => {
//     return t.name;
//   });
//   console.log(i[0]);
//   return (
//     <div className='item'>
//       <h4>{name}</h4>
//       <button onClick={() => removePerson(id)}>remove</button>
//     </div>
//   );
// };

// export default ContextAPI;

import React, { useState, useContext } from "react";
import { data } from "../../../data";
// more components
// fix - context api, redux (for more complex cases)

const PersonContext = React.createContext();
// two components - Provider, Consumer

const ContextAPI = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  // let obj = {
  //   removePerson,
  //   people,
  // };
  let obj = [removePerson, people];

  // { removePerson, people }

  return (
    <PersonContext.Provider value={obj}>
      <h3>Context API / useContext</h3>
      <List />
    </PersonContext.Provider>
  );
};

const List = () => {
  const mainData = useContext(PersonContext);
  console.log(mainData);
  return (
    <>
      <p>g</p>
    </>
  );
};

export default ContextAPI;
