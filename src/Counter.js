import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const[multiply, setMultiply] = useState(2);


  function multipy(){
    setCount(count * multiply);
  }
  function handleChange(event){
    setMultiply(event.target.value);
  }
  return (
    <div>
 
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <input type="number" value={multiply} onChange={handleChange} />
      <button onClick={() => multipy()}>reizinat</button>
      <h1>{count}</h1>
    </div>
  );
}

export default Counter;