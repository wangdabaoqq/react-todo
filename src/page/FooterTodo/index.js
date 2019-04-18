import React from 'react'
import { Checkbox, Button } from 'antd'
import './index.css'
export default class FooterTodo extends React.Component {
  onCheckAllChange = (e) => {
    // this.setState({
    //   checked: e.target.checked
    // })
    let isDone = e.target.checked
    console.log(e.target.checked)
    this.props.checkChange(isDone)
  }
  cleanAll () {
    this.props.cleanAll()
  }
  render () {
    // let isDone = this.props.isALlCheck
    // this.setState = {
    //   checked: false
    // }
    // console.log(this)
    // console.log(isDone)
    return (
      <div className="footer-todo">
        <Checkbox
          onChange={this.onCheckAllChange}
          checked={this.props.isALlCheck}
        >
        全选
      </Checkbox>
      <span>当前已完成:{this.props.allNums}</span> 
      <span>全部:{this.props.todoCount}</span>
      <Button className="btnSty" type="danger" onClick={this.cleanAll.bind(this)}>清除所有已完成</Button>
    </div>
    )
  }
}