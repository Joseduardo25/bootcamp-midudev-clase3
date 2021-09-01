import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';
import { useState } from 'react';



const Counter = ({numero}) => {
  return(
    <h1>{numero}</h1>
  )
}

const App = () => {
  const [contador, setContador] = useState(0)

  const aumentar = () => {
    setContador(contador + 1)
  }

  const restar = () => {
    setContador(contador - 1)
  }

  const reset = () => {
    setContador(0)
  }

  const isEven = contador % 2 === 0
  const mensaje = isEven ? 'es par' : 'es impar'
  
  
  return(
    <div>
      <p>El valor del contador es:</p>
      <Counter numero={contador} />
      <small>{mensaje}</small>
      <br/>
      <button onClick={restar}>
        reducir
      </button>
      <button onClick={aumentar}>
        aumentar
      </button>
      <button onClick={reset}>
        reset
      </button>
    </div>
  )
}




  




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
