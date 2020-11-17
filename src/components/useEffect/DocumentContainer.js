import React, { useState, useEffect } from "react";

function DocumentContainer() {
  let [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count ${count}`;
  });
  return (
    <div>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Count : {count}
      </button>
    </div>
  );
}

export default DocumentContainer;
