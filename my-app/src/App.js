import React, { Component } from 'react';
import Ninjas from './Ninjas'
import NewSong from './newSong'

class App extends Component {
  state = {
    Ninjas : [
    {name: 'Ryu', age: 30, belt: 'Black', id: 1},
    {name: 'Yoshi', age: 25, belt: 'purple', id: 2},
    {name: 'Kram', age: 22, belt: 'Green', id: 3}
    ],
    rating : 2.5,
  }
  newSong = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.Ninjas, ninja]
    this.setState({
      Ninjas: ninjas
    })
    console.log(ninjas)
  }

  deleteSong = (id) => {
      let ninjas = this.state.Ninjas.filter(ninjas => {return ninjas.id !== id})
      this.setState({
        Ninjas: ninjas
      })
  }
  componentDidMount() {
    console.log("Component Mounted!");
  }
  componentDidUpdate(prevProps,prevState) {
    console.log("Component Updated!");
    console.log(prevProps, prevState);
  }
  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Welcome</p>
        <Ninjas deleteSong={this.deleteSong} Ninja={this.state.Ninjas}/>
        <NewSong newSong={this.newSong}/>
      </div>
    );
  }
}

export default App;