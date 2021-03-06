import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/MiniPaletteStyles';
import { Delete } from '@material-ui/icons';

class MiniPalette extends Component {

  deletePalette = (e) => {
    e.stopPropagation();
    this.props.handleDelete(this.props.id);
  }

  render() {

    const { classes, colors, paletteName, emoji, handleClick } = this.props;
    const miniColorBoxes = colors.map((color) => (
      <div className={classes.miniColor} style={{ backgroundColor: color.color }} key={color.name} />
    ))

    return (
      <div className={classes.root} onClick={handleClick}>
        <div className={classes.delete}>
          <Delete 
            className={classes.deleteIcon} 
            style={{ transition: "all 0.3s ease-in-out" }}
            onClick={this.deletePalette}
          />
        </div>
        <div className={classes.colors}>
          {miniColorBoxes}
        </div>
        <h5 className={classes.title}>
          {paletteName} 
          <span className={classes.emoji}>
            {emoji}
          </span>
        </h5>
      </div>
    )
  }
}

export default withStyles(styles)(MiniPalette);
