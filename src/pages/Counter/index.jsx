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
    if (counter > 0) {

      setCounter(counter - 1);
    }
  };
  return (
    <div className='container py-5 '>
      <div className='border w-50 mx-auto p-5 d-flex flex-column justify-content-center align-items-center'>
        <div>
          <Counter counter={counter} />
        </div>
        <div>
          <Dncrement decrement={decrement} />
          <Increment increment={increment} />
        </div>
      </div>


    </div>
  )
}
export default CounterPage
