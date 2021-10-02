import React, { useEffect } from "react";

const Modal = ({ msg, closeModel }) => {
  useEffect(() => {
    let time = setTimeout(() => {
      closeModel();
    }, 3000);
    return () => clearTimeout(time);
  }, []);

  return <p>{msg}</p>;
};

export default Modal;
