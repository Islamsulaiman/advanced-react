import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";
const Person = () => {
  const { kofta } = useParams();
  return (
    <div>
      <h2>Kofta = {kofta}</h2>
    </div>
  );
};

export default Person;
