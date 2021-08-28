import React, { Component } from 'react'

class ColorBox extends Component {
  render() {
    return (
      <div className="ColorBox" style={{ background: this.props.background }}>
          <span>{this.props.name}</span>
      </div>
    )
  }
}

export default ColorBox;