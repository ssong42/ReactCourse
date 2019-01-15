import React, { Component } from 'react';

class Ninha extends Component {
  render() {
    const { ninhas } = this.props;
    const ninjalist = ninhas.map(ninhas => {
      return (
        <div className="ninja" key={ninhas.id}>
          <div>Name: {ninhas.name}</div>
          <div>Age: {ninhas.age}</div>
          <div>Belt: {ninhas.belt}</div>
        </div>
      )
    })
    return (
      <div className = "ninja-list">
        { ninjalist }
      </div>
    );
  }
}

export default Ninha;