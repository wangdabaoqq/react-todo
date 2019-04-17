import React, { Component } from 'react';
// import logo from './logo.svg';
import HeaderTodo from './page/HeaderTodo'
import ItemTodo from './page/ItemTodo'
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      todos: []
    }
  }
  addTodo (item) {
    this.state.todos.push(item)
    this.setState = {
      todos: this.state.todos
    }
  }
  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
      <HeaderTodo addTodo={this.addTodo.bind(this)} />
      <ItemTodo todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
