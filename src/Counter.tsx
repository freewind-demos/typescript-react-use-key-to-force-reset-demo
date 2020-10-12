import React from 'react';
import {useState} from "react";

type Props = {
  initCount: number
}

export default function Counter({initCount}: Props) {
  const [count, setCount] = useState(initCount);
  return <div>
    <input type='text' value={count} onChange={(event) => setCount(parseInt(event.target.value))}/>
    <button onClick={() => setCount(n => n + 1)}>+1</button>
  </div>
};
