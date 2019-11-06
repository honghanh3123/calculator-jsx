import React from 'react'
import './style.css'
import Cell from '../button'

class Keyboard extends React.Component{
  constructor(props){
    super(props);
    this.digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  }
  render(){
    return(
      <div className="keyboard">
        <div className="row">
          <Cell value="CE"></Cell>
          <Cell value="C"></Cell>
          <Cell value="DEL"></Cell>
          <Cell value="/"></Cell>
        </div>
    <div className="row">
      <Cell value="7"></Cell>
      <Cell value="8"></Cell>
      <Cell value="9"></Cell>
      <Cell value="x"></Cell>
    </div>
    <div className="row">
      <Cell value="4"></Cell>
      <Cell value="5"></Cell>
      <Cell value="6"></Cell>
      <Cell value="-"></Cell>
    </div>
    <div className="row">
      <Cell value="1"></Cell>
      <Cell value="2"></Cell>
      <Cell value="3"></Cell>
      <Cell value="+"></Cell>
    </div>
        <div className="row">
          <Cell value="+/-"></Cell>
          <Cell value="0"></Cell>
          <Cell value="."></Cell>
          <Cell value="="></Cell>
        </div>
      </div>
    )
  }
}

export default Keyboard;