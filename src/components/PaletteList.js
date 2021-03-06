import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/PaletteListStyles';

class PaletteList extends Component {

  goToPalette = (id) => {
    this.props.history.push(`/palette/${id}`)
  }

  getPaletteBox = (palettes) => {
    return palettes.map((palette) => {
      return (
        <MiniPalette 
          key={palette.id} 
          id={palette.id}
          handleDelete={this.props.deletePalette}
          handleClick={() => {this.goToPalette(palette.id)}}
          {...palette} 
        />
      )
    })
  }

  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
            <Link to='/palette/new'>Create Palette</Link>
          </nav>
          <div className={classes.palettes}>
            {this.getPaletteBox(palettes)}
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(PaletteList);