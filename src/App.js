import Counter from "./Counter";
import Hello from "./Hello";
import Check from "./Check";

function App() {
  const allNames = [
    "Jevgenijs",
    "Ur mom",
    "Bacha"
  ]

  const allNumbers = [
    "7",
    "43",
    "101"
  ]
  const allCheck = [
    true,
    true,
    false
  ]

  const namesJSX = allNames.map((name, index) => {
    return <Hello name={name} key={index} />;
  })


  const numbersJSX = allNumbers.map((name, index) => {
    return <Counter name={name} key={index} />;
  })

  const checkJSX = allCheck.map((name, index) => {
    return <Counter name={name} key={index} />;
  })


  return (
    <div className="App">
      <Counter></Counter>
      {namesJSX}
      {numbersJSX}
    </div>
  );
}

export default App;
