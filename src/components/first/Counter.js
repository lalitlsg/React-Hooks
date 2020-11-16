import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  //   bad practice, will not work
  //   const incFive = () => {
  //     for (let i = 0; i < 5; i++) {
  //       setCount(count + 1);
  //     }
  //   };

  //Whenever we want to change the state based on previous state, always use fun in setState which has access
  //to previos state
  const incFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount(prevCount => prevCount + 1);
    }
  };

  return (
    <div>
      {count}
      <br />
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Count +1
      </button>
      <button onClick={incFive}>Increment +5</button>
    </div>
  );
}

export default Counter;
