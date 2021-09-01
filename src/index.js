import React from 'react'
import { useState } from 'react'
import  ReactDOM  from 'react-dom'
import './index.css';


const App = () => {
  /*
  const [left, setLeft] = useState(10)
  const [right, setRight] = useState(10)
*/

  const [counters, setCounters] = useState({left: 0, right: 0})
  
  const handleClickLeft = () => {
    setCounters({
      left: counters.left +1,
      right: counters.right 
    })
  }

  const handleClickRight = () => {
    setCounters({
      left: counters.left,
      right: counters.right +1
    })
  }
  return (
    <div>
      {counters.left}
      <button onClick={handleClickLeft}>
        left
      </button>
      <button onClick={handleClickRight}>
        right
      </button>
      {counters.right}
    </div>
  )
}


ReactDOM.render(
  <App />,document.getElementById("root")
);

