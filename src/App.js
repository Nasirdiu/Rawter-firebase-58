import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Products from "./Components/Products/Products";
import Orders from "./Components/Orders/Orders";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          Home
        </Route>
        <Route path="/home" element={<Home></Home>}>
          Home
        </Route>
        <Route path="/login" element={<Login></Login>}>
          Login
        </Route>
        <Route path="/register" element={<Register></Register>}>
          Register
        </Route>
        <Route path="/product" element={
          <RequireAuth>
            <Products></Products>
          </RequireAuth>
        }></Route>
        <Route
          path="/order"
          element={
            <RequireAuth>
              <Orders></Orders>
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
