import React from 'react'
import { useState } from 'react'
import  ReactDOM  from 'react-dom'
import './index.css';


const App = () => {
  const [left, setLeft] = useState(10)
  const [right, setRight] = useState(10)

  return (
    <div>
      {left}
      <button onClick={() => setLeft(left + 1)}>
        left
      </button>
      <button onClick={() => setRight(right + 1)}>
        right
      </button>
      {right}
    </div>
  )
}


ReactDOM.render(
  <App />,document.getElementById("root")
);

