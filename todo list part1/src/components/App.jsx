import React, { useState } from "react";

function App() {
  const [list, addlist] = useState([]);
  const [item, setitem] = useState("");

  function additem(event) {
    setitem(event.target.value);
  }

  function add() {
    addlist((prevItems) => {
      return [...prevItems, item];
    });
    setitem("");
    console.log(list);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <input type="text" onChange={additem} value={item} />

        <button onClick={add}>
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul>
          {list.map((ii) => (
            <li>{ii}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
