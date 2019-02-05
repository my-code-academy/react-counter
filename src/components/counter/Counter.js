import React, { Component } from 'react';
import './counter.css';
import Button from '../Button/Button';

class Counter extends Component {
  counterVal = 0;
  state = {
    count: 0,
  }
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  }; 
  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  }; 
  render() {
    return (
      <div className='counter'>
        <p>Counter: {this.state.count} </p><br/>
        <Button caption='add' onClick={this.incrementCount}></Button>  
        <Button caption='minus' onClick={this.decrementCount}></Button>
      </div>
    );
  }
}

export default Counter;