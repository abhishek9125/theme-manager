import React, { Component } from 'react';
import ColorBox from './ColorBox';

class Pallete extends Component {
  render() {

    const colorBoxes = this.props.colors.map((color) => ( <ColorBox background={color.color} name={color.name} /> ))

    return (
      <div className="Palette">
          {/* {Navber} */}
          <div className="Pallete-colors">
            {colorBoxes}
          </div>
          {/* {Footer} */}
      </div>
    )
  }
}

export default Pallete
