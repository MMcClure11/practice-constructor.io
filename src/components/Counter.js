import React, { useState } from 'react';

const Counter = () => {

  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>I am a counter that you can manually click.</h1>
      <h2>Count: { count }</h2>
      <button>+</button>
    </div>
  )
}

export default Counter