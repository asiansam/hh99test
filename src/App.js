import "./App.css";
import React, { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    { id: 1, desc: "리액트를 배워봅시다" },
    { id: 2, desc: "노드를 배워봅시다." },
  ]);
  const [desc, setDesc] = useState("");
  const add = () => {
    const newUser = {
      id: users.length + 1,
      desc: desc,
    };
    setUsers([...users, newUser]);
  };
  return (
    <div>
      <div className="inputBox">
        <input value={desc} onChange={(e) => setDesc(e.target.value)} />
        <button onClick={add}>추가하기</button>
      </div>
      <div className="title">Todo List</div>
      <div className="descBox">
        {users.map((user) => {
          return <CustomBox user={user} key={user.id}></CustomBox>;
        })}
      </div>
    </div>
  );
}
function CustomBox(props) {
  return <div className="boxDesign">{props.user.desc}</div>;
}

export default App;
