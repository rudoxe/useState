import React, { useState } from "react";
import Hello from "./Hello";


function Counter() {
  const [count, setCount] = useState(0);
  const[multiply, setMultiply] = useState(2);

  function multipy(){
    setCount(count * parseInt(multiply));
  }

  function multipyss(){
    setCount(count - parseInt(multiply));
  }

  function multipys(){
    setCount(count + parseInt(multiply));
  }

  function handleChange(event){
    setMultiply(event.target.value);
  }
  return (
    <div>
      <input type="number" value={multiply} onChange={handleChange} />
      <button onClick={() => multipyss()}>-{multiply}</button>
      <button onClick={() => multipys()}>+{multiply}</button>
      <button onClick={() => multipy()}>*{multiply}</button>
      <h1>{count}</h1>
    </div>
  );
}

export default Counter;

// jauztaisa komponente hello, taja ir input, kur ieraksti cilveka vardu un apaksa paradas teksts: "Hello, vards!"