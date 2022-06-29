import React from 'react';
import Counter from '../../component/counter/counter';
import Increment from '../../component/counter/incrementbtn';
import Dncrement from '../../component/counter/decrementbtn';
import { useState } from 'react';
export const CounterPage = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div>

      <Counter counter={counter} />
      <Increment increment={increment} />
      <Dncrement decrement={decrement} />
    </div>
  )
}
export default CounterPage
