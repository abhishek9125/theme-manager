import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';

class Palette extends Component {

  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: 'hex'
    }
  }

  changeColorLevel = (level) => {
    this.setState({ level })
  }

  changeColorFormat = (value) => {
    this.setState({ format: value })
  }

  render() {
    const { level, format } = this.state;
    const { colors, paletteName, emoji, id } = this.props.palette;
    const colorBoxes = colors[level].map((color) => ( 
      <ColorBox background={color[format]} name={color.name} key={color.id} id={color.id} paletteId={id}/>
    ))
    return (
      <div className="Palette">
        <Navbar level={level} changeColorLevel={this.changeColorLevel} handleChange={this.changeColorFormat}/>
        <div className="Palette-colors">
          {colorBoxes}
        </div>
        <footer className="Palette-footer">
          {paletteName}
          <span className="emoji">{emoji}</span>
        </footer>
        </div>
    )
  }
}

export default Palette;
