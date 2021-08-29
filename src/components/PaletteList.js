import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { Link } from 'react-router-dom';

class PaletteList extends Component {
  getPaletteBox = (palettes) => {
    return palettes.map((palette) => {
      return (
        <Link to={`/palette/${palette.id}`} style={{ textDecoration: 'none' }}>
          <MiniPalette {...palette}/>
        </Link>          
      )
    })
  }

  render() {
    const { palettes } = this.props;
    return (
      <div className="PaletteList">
        <MiniPalette />
        <h1>React Colors</h1>
        {this.getPaletteBox(palettes)}
      </div>
    )
  }
}

export default PaletteList;