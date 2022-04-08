import React from "react";
import useFirebase from "../../hook/useFirebase";

const Login = () => {
  const { singInWithGoogle } = useFirebase();
  return (
    <div>
      <h1>Please Login</h1>
      <div style={{ margin: "20px" }}>
        <button onClick={singInWithGoogle}>Google Sign in</button>
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
