import React, { Component } from 'react';

class Button extends Component {
  render() {
    //console.log(this);
    return (
        <button onClick={this.props.onClick}>{this.props.caption}</button>
    );
  }
}

export default Button;