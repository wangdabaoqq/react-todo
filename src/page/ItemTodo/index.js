import React from 'react'
import { Checkbox, Icon } from 'antd'
import './index.css'
export default class ItemTodo extends React.Component {
  checkChange (index, val) {

    // console.log(this.props.isDone)
    let isDone = val.target.checked
    this.props.changeState(isDone, index)
  }
  handleClick (index, e) {
    e.preventDefault()
    this.props.deleteTodo(index)
  }
  render () {
    let todo = this.props.todos
    if (todo.length === 0) {
      return (
        <div style={{border: '1px solid #ccc', marginTop: '10px', padding: '5px 0'}}>当前没有需要完成的任务</div>
      )
    } else {
      return (
        <div className = "itemtodo">
        {
          todo.map((element, index) => {
            return(
              <Checkbox checked={element.isDone} className="checkSty common" onChange={this.checkChange.bind(this, index)} key={index}>
                <span className={element.isDone ? 'addSty' : ''}>{element.value}</span>
                <span onClick={this.handleClick.bind(this, index)} className="iconPos">
                  <Icon className="icons" type="minus-square" />
                </span>
              </Checkbox>
            )
          })
        }
        </div>
      )
    }
  }
}