import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn }) => {
  return (
    <nav style={{ padding: "10px", background: "#ddd" }}>
      <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
      {isLoggedIn ? (
        <span></span>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
