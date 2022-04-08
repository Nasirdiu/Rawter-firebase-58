import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hook/useFirebase";
import "./Header.css";
const Header = () => {
  const {user,handleSingOut}=useFirebase();
  return (
    <div className="header">
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/order">Order</Link>
        <Link to="/register">Resister</Link>
        <span>{user?.displayName &&user.displayName}</span>
        {
          user?.uid ?
          <button onClick={handleSingOut}>Sing Out</button>
          :
          <Link to="/login">Login</Link>
          }
      </nav>
    </div>
  );
};

export default Header;
