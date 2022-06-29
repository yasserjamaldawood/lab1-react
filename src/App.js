import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Counter from "./counter";
import Increment from "./incrementbtn";
import Dncrement from "./decrementbtn";

function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="App">
      <Counter counter={counter} />
      <Increment increment={increment} />
      <Dncrement decrement={decrement} />
    </div>
  );
}

export default App;

