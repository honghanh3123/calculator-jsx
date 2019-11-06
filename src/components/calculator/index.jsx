import React from 'react';
import './style.css';
import Screen from '../screen'
import Keyboard from '../keyboard'

class Calculator extends React.Component{
  render(){
    return(
      <div className="container">
        <Screen></Screen>
        <Keyboard></Keyboard>
      </div>
    )
  }
}

export default Calculator;