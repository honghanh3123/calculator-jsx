import React from 'react';
import './style.css';

class Cell extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="cell">
          {this.props.value}
      </div>
    )
  }
}

export default Cell;