import React, { Component } from 'react';
// import logo from './logo.svg';
import HeaderTodo from './page/HeaderTodo'
import ItemTodo from './page/ItemTodo'
import FooterTodo from './page/FooterTodo'
import { Card } from 'antd'
import './App.css';
import 'antd/dist/antd.css';
class App extends Component {
  constructor (props) {
    super()
    this.state = {
      todos: [],
      isALlCheck: false
    }
  }
  addTodo (item) {
    this.state.todos.push(item)
    // setState写法写错了。。。 写成 this.setState = {}
    this.setState({
      todos: this.state.todos
    })
  }
  checkChange (e) {
    this.setState({
      isALlCheck: e
    })
    this.state.todos.forEach(ele => {
      if (e) {
        ele.isDone = e
      } else {
        ele.isDone = e
      }
    })
  }
  cleanAll () {
    let todos = this.state.todos.filter(todo => !todo.isDone)
    this.setState({
      todos,
      isAllChecked: false
    })
  }
  deleteTodo (index) {
    this.state.todos.splice(index, 1)
    this.setState({
      todos: this.state.todos
    })
    // let indexId = this.state.todos.indexOf(index)
    // console.log(indexId, this.state.todos)
  }
  changeState (isDone, indexs) {
    this.state.todos.forEach((element, index) => {
      if (indexs === index) {
        element.isDone = isDone
      }
    })
    let isALlCheck = this.state.todos.every(ele => ele.isDone)
    // console.log(this.state.todos)
    this.setState({
      todos: this.state.todos,
      isALlCheck
    })
    // console.log(this.state.todos)
    // console.log(this.state)
  //  console.log(this.state.todos)
  }
  render () {
    let allNums = (this.state.todos && this.state.todos.filter(ele => ele.isDone).length) || 0    
    let stateNums = {
      allNums,
      todoCount: this.state.todos.length || 0
    }
    return (
      <div className="App">
        <Card>
        <HeaderTodo addTodo={this.addTodo.bind(this)} />
        <ItemTodo deleteTodo={this.deleteTodo.bind(this)} isALlCheck={this.state.isALlCheck} changeState={this.changeState.bind(this)} todos={this.state.todos} />
        <FooterTodo {...stateNums} isALlCheck={this.state.isALlCheck} cleanAll={this.cleanAll.bind(this)} checkChange={this.checkChange.bind(this)}/>
        </Card>
      </div>
    );
  }
}

export default App;
