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

  const [clicks, setClicks] = useState([])

  const handleClickLeft = () => {
    setClicks((prevClicks) => [...prevClicks, 'L'])
  }

  const handleClickRight = () => {
    setClicks((prevClicks) => [...prevClicks, 'R'])
  }

  const handleReset = () => {
    setClicks([])
  }

  const left = clicks.filter(click => click === 'L')
  const right = clicks.filter(click => click === 'R')

  return (
    <div>
      {left.length}
      <button onClick={handleClickLeft}>
        left
      </button>
      <button onClick={handleClickRight}>
        right
      </button>
      {right.length}
     
      <br/>
      <button onClick={handleReset}>
        reset
      </button>
      <br/>
      <h3>Clicks totales: {clicks.length}</h3>
      <br/>
      {clicks.length === 0 ? <WarningNotUsed /> : <ListOfClicks clicks={clicks} />}
    </div>
    
  )
}


ReactDOM.render(
  <App />,document.getElementById("root")
);

