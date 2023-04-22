import React from "react";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
function App() {
  const [userlist, setUserlist] = React.useState([]);
  function setList(list) {
    //list是从子组件Register中拿到的注册数据
    setUserlist([list, ...userlist]);
    console.log(userlist);
  }
  return (
    <>
      <Login list={userlist} />
      <hr className="kyzr_hr" />
      <Register setList={setList} />
    </>
  );
}

export default App;
