import React from "react";

import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Show from "./components/Show";
function App() {
  return (
    <>
      <div className="LoginAndRegister">
        <Login />
        <Register />
      </div>
      <Show />
    </>
  );
}

export default App;
