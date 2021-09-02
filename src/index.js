import React from 'react'
import { useState } from 'react'
import  ReactDOM  from 'react-dom'
import './index.css';


const App = () => {
  /*
  const [left, setLeft] = useState(10)
  const [right, setRight] = useState(10)
*/

  const [counters, setCounters] = useState({
    left: 0,
    right: 0,
    click: 0,
    mensaje: 'mensaje de estado'
  })
  
  const handleClickLeft = () => {
    const newCounterState = {
      ...counters,
      left: counters.left +1,
      right: counters.right,
      click: counters.click +1 
    }
    setCounters(newCounterState)
  }

  const handleClickRight = () => {
    setCounters({
      left: counters.left,
      right: counters.right +1,
      click: counters.click +1
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
      <br/>
      <h3>Clicks totales: {counters.click}</h3>
      {counters.mensaje}
    </div>
  )
}


ReactDOM.render(
  <App />,document.getElementById("root")
);

