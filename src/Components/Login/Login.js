import React from "react";
import useFirebase from "../../hook/useFirebase";
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { getAuth } from "firebase/auth";
import app from "../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";

const auth=getAuth(app)
const Login = () => {
  const [signInWithGoogle]=useSignInWithGoogle(auth)
  const navigate=useNavigate()
  const location=useLocation()
  const from=location?.state?.from?.pathname|| './';
  const handlegooglesingin=()=>{
    signInWithGoogle()
    .then(()=>{
      navigate (from,{replace:true})
    })
  }
  return (
    <div>
      <h1>Please Login</h1>
      <div style={{ margin: "20px" }}>
        <button onClick={handlegooglesingin}>Google Sign in</button>
      </div>
      <form>
        <input type="email" name="" id="" placeholder="Your Email" />
        <br />
        <input
          type="password"
          name=""
          id=""
          placeholder="Please Your Password"
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
