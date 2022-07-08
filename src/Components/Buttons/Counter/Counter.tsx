import React, { useState } from 'react';
import './Counter.css'

// interface IClicker{
//   number: string,
//   setNum: Dispatch<SetStateAction<number>>
// }

const Counter = () => {
  const [number, setNum] = useState(0);
  return (
    <div className='container'>
      <div>
        <span>{number}</span>
      </div>
      <div>
        <button className='clicker' onClick={() => setNum(number - 1)}>-</button>
        <button className='clicker' onClick={() => setNum(0)}>Set to Null</button>
        <button className='clicker' onClick={() => setNum(number + 1)}>+</button>
      </div>
    </div>
  )
}

export default Counter