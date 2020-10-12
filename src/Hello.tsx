//import * as React from 'react'
import React, {useState} from 'react'
import Counter from "./Counter";
import {v4 as uuid} from 'uuid';

export default function Hello() {
  const [resetAll, setResetAll] = useState(uuid());

  return <div>
    <h1>Use "key" property to force reset component</h1>
    <button onClick={() => setResetAll(uuid())}>Reset component</button>
    <hr/>
    <Counter key={`counter-${resetAll}`} initCount={0}/>
  </div>
};
