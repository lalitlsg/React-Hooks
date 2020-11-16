import React, { useState } from "react";

function ObjectExample() {
  const [name, setName] = useState({ firstname: "", lastname: "" });
  return (
    <div>
      <form>
        {JSON.stringify(name)}
        <br />
        <input
          type="text"
          value={name.firstname}
          onChange={e => setName({ ...name, firstname: e.target.value })}
        />
        <input
          type="text"
          value={name.lastname}
          onChange={e => setName({ ...name, lastname: e.target.value })}
        />
      </form>
    </div>
  );
}

export default ObjectExample;
