import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './addForm'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: "Buy some Milk"},
      {id: 2, content: "Play some Mario Kart"},
    ]    
  }
  
  deleteTodo = (id) => {
    const FilteredTodos = this.state.todos.filter(todo => {return todo.id !== id})
    this.setState({
      todos: FilteredTodos
    })
  }

  addTodo = (content) => {
    const id = Math.random();
    const NewTodo = {
      id: id,
      content,
    };
    const newList = [...this.state.todos, NewTodo];
    this.setState({
      todos: newList,
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
