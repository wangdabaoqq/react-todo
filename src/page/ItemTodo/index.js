import React from 'react'
export default class ItemTodo extends React.Component {
  render () {
    let todo = this.props.todos
    console.log(todo)
    return (
      <div className = "itemtodo">
        sss{this.props.todos}
      </div>
    )
  }
}