import React from 'react'
import { Input } from 'antd'
export default class HeaderTodo extends React.Component {
  // constructor () {
  //   super()
  //   this.state = {
  //     value: 'ss'
  //   }
  // }
  handleKeyup (e) {
    let value = e.target.value
    if (!value) return false
    let item = {
      value,
      isDone: false
    }
    e.target.value = ''
    // console.log(e)
    this.props.addTodo(item)
    // console.log(e.target.value)
    // if (e.keyCode === 13) {
    //   // let value = e.target.value
    //   // console.log(e.target.value)
    //   let value = e.target.value
    //   // console.log(this.refs.saasInput)
    //   // if (!value) return false
    //   // if (!this.state.value) return false
    //   let item = {
    //     value,
    //     isDone: false
    //   }
    //   e.target.value = ''
    //   // console.log(e.target.value)
    //   this.props.addTodo(item)
    // } 
  }
  render () {
    // let value = this.state.value
    // console.log(value)
    return (
      <div className="header-todo">
        <Input ref="saasInput"  placeholder="请输入任务规划" type="text" onPressEnter={this.handleKeyup.bind(this)} />
      </div>
    )
  }
}