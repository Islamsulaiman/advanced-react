import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <Link to='/' style={{ margin: "50px" }}>
        Home
      </Link>
      <Link to='/people' style={{ margin: "50px" }}>
        People
      </Link>
      <Link to='/About' style={{ margin: "50px" }}>
        About
      </Link>
    </>
  );
};

export default Navbar;
