import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
import { reducer } from "./reducer.js";
// reducer function

let defaultObject = {
  people: [],
  isAlert: false,
  msg: "",
};

const Index = () => {
  let [name, setName] = useState("");
  let [state, dispatch] = useReducer(reducer, defaultObject);

  let handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      dispatch({ type: "NO NAME" });
    } else {
      //handle
      let newItem = {
        id: new Date().getTime().toString(),
        name,
      };
      dispatch({ type: "NAME", payload: newItem });
      setName("");
    }
  };

  let clearList = () => {
    dispatch({ type: "CLEAR" });
  };
  const closeModel = () => {
    dispatch({ type: "close_model" });
  };

  return (
    <>
      {state.isAlert && <Modal {...state} closeModel={closeModel} />}
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button>Add</button>
      </form>
      {state.people.map((i) => {
        let { id, name } = i;
        return (
          <article key={id}>
            <p>{name}</p>
          </article>
        );
      })}
      <button onClick={clearList}>Clear List</button>
    </>
  );
};

export default Index;
