import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';
import PaletteFooter from './PaletteFooter';
import { withStyles } from '@material-ui/styles';

const styles = {
  Palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  colors: {
    height: "90%"
  }
}

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
    const { classes } = this.props;
    const colorBoxes = colors[level].map((color) => ( 
      <ColorBox background={color[format]} name={color.name} key={color.id} id={color.id} paletteId={id} showingFullPalette={true}/>
    ))
    return (
      <div className={classes.Palette}>
        <Navbar level={level} changeColorLevel={this.changeColorLevel} handleChange={this.changeColorFormat} showingAllColors={true}/>
        <div className={classes.colors}>
          {colorBoxes}
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji}/>
        </div>
    )
  }
}

export default withStyles(styles)(Palette);
