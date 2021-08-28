import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';

class Palette extends Component {

  constructor(props) {
    super(props);
    this.state = {
      level: 500
    }
  }

  changeColorLevel = (level) => {
    this.setState({ level })
  }

  render() {
    const { level } = this.state;
    const { colors } = this.props.palette;
    const colorBoxes = colors[level].map((color) => ( 
      <ColorBox background={color.hex} name={color.name} />
    ))
    return (
      <div className="Palette">
        <Navbar level={level} changeColorLevel={this.changeColorLevel}/>
        <div className="Palette-colors">
          {colorBoxes}
        </div>
          {/* {Footer} */}
        </div>
    )
  }
}

export default Palette;
