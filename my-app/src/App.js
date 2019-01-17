import React, { Component } from 'react';
import Ninjas from './Ninjas'
// import NewSong from './newSong'
import YelpStars from './YelpStars'
import 'font-awesome/css/font-awesome.min.css';
import './YelpStars.css'
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
    //spread operator
    let ninjas = [...this.state.Ninjas, ninja]
    this.setState({
      Ninjas: ninjas
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Welcome</p>
        <Ninjas Ninja={this.state.Ninjas}/>
        {/* <NewSong newSong={this.newSong}/> */}
        <YelpStars rating={this.state.rating}/>
      </div>
    );
  }
}

export default App;