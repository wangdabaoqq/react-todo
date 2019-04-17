import React from 'react'
export default class HeaderTodo extends React.Component {
  handleKeyup (e) {
    if (e.keyCode === 13) {
      let value = e.target.value
      if (!value) return false
      let item = {
        value,
        isDone: false
      }
      value = ''
      this.props.addTodo(item)
    } 
  }
  render () {
    return (
      <div className="header-todo">
        <input placeholder="请输入任务规划" type="text" onKeyUp={this.handleKeyup.bind(this)} />
      </div>
    )
  }
}