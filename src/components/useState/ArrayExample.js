import React, { useState } from "react";

function ArrayExample() {
  const [list, setList] = useState([]);
  const addItem = () => {
    setList([
      ...list,
      {
        id: list.length,
        name: `Lalit${Math.floor(Math.random() * 10)}`
      }
    ]);
  };
  return (
    <div>
      <ul>
        {list.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={addItem}>Add</button>
    </div>
  );
}

export default ArrayExample;
