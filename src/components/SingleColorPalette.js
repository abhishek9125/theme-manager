import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/PaletteStyles';

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
    const { classes } = this.props;
    const colorBoxes = this._shades.map((color) => <ColorBox key={color.name} name={color.name} background={color[format]} showingFullPalette={false}/>)

    return (
      <div className={classes.Palette}>
        <Navbar handleChange={this.changeColorFormat} showingAllColors={false}/>
        <div className={classes.colors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${id}`}>GO BACK</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji}/>
      </div>
    )
  }
}

export default withStyles(styles)(SingleColorPalette);