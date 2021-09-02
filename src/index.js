import React from 'react'
import { useState } from 'react'
import  ReactDOM  from 'react-dom'
import './index.css';

const WarningNotUsed = () => {
  return <h1>Todavia no se ha usado el contador</h1>
}

const ListOfClicks = ({clicks}) => {
  return <h3>{clicks.join(', ')}</h3>
}


const App = () => {
  /*
  const [left, setLeft] = useState(10)
  const [right, setRight] = useState(10)
*/

  const INITIAL_COUNTER_STATE = {
    left: 2,
    right: 4,
    mensaje: 'mensaje de estado'
  }

  const [counters, setCounters] = useState(INITIAL_COUNTER_STATE)
  
  const [clicks, setClicks] = useState([])

  const handleClickLeft = () => {
    const newCounterState = {
      ...counters,
      left: counters.left +1,
      right: counters.right,
    }
    setCounters(newCounterState)

    setClicks((prevClicks) => [...prevClicks, 'L'])

  }

  const handleClickRight = () => {
    setCounters({
      ...counters,
      left: counters.left,
      right: counters.right +1,
    })

    setClicks((prevClicks) => [...prevClicks, 'R'] )
  }

  const handleReset = () => {
    setCounters(INITIAL_COUNTER_STATE)

    setClicks([])
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
      <button onClick={handleReset}>
        reset
      </button>
      <br/>
      <h3>Clicks totales: {clicks.length}</h3>
      {counters.mensaje}
      <br/>
      {clicks.length === 0 ? <WarningNotUsed /> : <ListOfClicks clicks={clicks} />}
    </div>
    
  )
}


ReactDOM.render(
  <App />,document.getElementById("root")
);

