import React, { Component } from 'react'
import Editor from 'for-editor'

class Add extends Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }

  handleChange(value) {
    this.setState({
      value
    })
    console.log(this.state.value)
  }

  render() {
    const { value } = this.state
    return (
      <Editor value={value} onChange={this.handleChange.bind(this)} />
    )
  }
}
export default Add