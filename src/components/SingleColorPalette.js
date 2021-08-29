import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import './Palette.css';

class SingleColorPalette extends Component {

  constructor(props) {
    super(props);
    this.state = {
      format: 'hex'
    }
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
  }

  gatherShades = (palette, colorToFilterBy) => {
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(allColors[key].filter(color => color.id === colorToFilterBy));
    }
    return shades.slice(1);
  }

  changeColorFormat = (value) => {
    this.setState({ format: value })
  }

  render() {
    const { format } = this.state;
    const { paletteName, emoji, id } = this.props.palette;
    const colorBoxes = this._shades.map((color) => <ColorBox key={color.name} name={color.name} background={color[format]} showLink={false}/>)

    return (
      <div className="SingleColorPalette Palette">
        <Navbar handleChange={this.changeColorFormat} showingAllColors={false}/>
        <div className="Palette-colors">
          {colorBoxes}
          <div className="go-back ColorBox">
            <Link to={`/palette/${id}`} className="back-button">GO BACK</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji}/>
      </div>
    )
  }
}

export default SingleColorPalette;