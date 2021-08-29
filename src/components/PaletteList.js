import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class PaletteList extends Component {

  getPaletteBox = (palettes) => {
    return palettes.map((palette) => {
      return (
        <p>
          <Link to={`/palette/${palette.id}`}>
            {palette.paletteName}
          </Link>          
        </p>
      )
    })
  }

  render() {
    const { palettes } = this.props;
    const paletteBox = palettes.map((palette) => <h1>{palette.paletteName}</h1>)
    return (
      <div className="PaletteList">
        <h1>React Colors</h1>
        {this.getPaletteBox(palettes)}
      </div>
    )
  }
}

export default PaletteList;