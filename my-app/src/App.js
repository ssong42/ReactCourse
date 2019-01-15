import React, { Component } from 'react';
import Ninha from './ninha'
class App extends Component {
  state = {
    ninhas : [
    {name: 'Ryu', age: 30, belt: 'Black', id: 1},
    {name: 'Yoshi', age: 25, belt: 'purple', id: 2},
    {name: 'Kram', age: 22, belt: 'Green', id: 3}
    ]
  }
  
  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Welcome</p>
        <Ninha ninhas={this.state.ninhas}/>
      </div>
    );
  }
}

export default App;
