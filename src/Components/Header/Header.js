import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import app from "../../firebase.init";
import useFirebase from "../../hook/useFirebase";
import "./Header.css";

const auth = getAuth(app);
const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="header">
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/order">Order</Link>
        <Link to="/register">Resister</Link>

        {
          user&&<>
            <Link to="/vip">VIP</Link>
          </>
        }
        <span>{user?.displayName && user.displayName}</span>
        {user?.uid ? (
          <button onClick={() => signOut(auth)}>Sing Out</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
