export const reducer = (state, action) => {
  //handle reducer
  if (action.type === "NO NAME") {
    return { ...state, isAlert: true, msg: "No name added" };
  } else if (action.type === "NAME") {
    let newPerson = [...state.people, action.payload];
    return {
      people: newPerson,
      isAlert: true,
      msg: "New Name is Added",
    };
  } else if (action.type === "CLEAR") {
    //handle
    return {
      people: [],
      isAlert: true,
      msg: "clear Items",
    };
  } else if (action.type === "close_model") {
    return {
      ...state,
      isAlert: false,
      msg: null,
    };
  }
};
