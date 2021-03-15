import React, { useState } from 'react'

const Multiply = () => {
  const [product, setProduct] = useState(0)

  const multiply = (num) => {
    return (num2) => num * num2
  }
  
  const onClickHandler = () => {
    setProduct( multiply(5)(6) )
  }

  return (
    <div>
      <h2>Jordan's Skilled Multiply Test</h2>
      <p>How can you make the function multiply(5)(6) return 30?</p>
      <button onClick={ onClickHandler }>Multiply</button>
      <h1>Product: { product }</h1>
    </div>
  )
}

export default Multiply
