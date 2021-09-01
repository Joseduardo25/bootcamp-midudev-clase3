import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { useState } from 'react';
import { render } from '@testing-library/react';

const App = () => {
  const [contadorValue, updateContador] = useState(0)

  setInterval(() => {
    updateContador(contadorValue + 1)
  }, 1000)

  console.log(render)
  return(
    <div>
      <p>El valor del contador es:</p>
      <h1>{contadorValue}</h1>
      <h2>Magia de React</h2>
    </div>
  )
}


  ReactDOM.render(
      <App />,document.getElementById('root')
  );





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
