import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { Drawer, Typography, Divider, IconButton, Button } from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";
import DraggableColorList from './DraggableColorList';
import { arrayMove } from "react-sortable-hoc";
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import styles from '../styles/NewPaletteFormStyles';

class NewPaletteForm extends Component {

  static defaultProps = {
    maxColors: 20
  }

  constructor(props){
    super(props);
    this.state = {
      open: true,
      colors: this.props.palettes[0].colors,
    }
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  addNewColor = (newColor) => {
    this.setState({ colors: [...this.state.colors, newColor], newColorName: "" })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (newPalette) => {
    newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g,"-");
    newPalette.colors = this.state.colors;
    this.props.savePalette(newPalette);
    this.props.history.push('/')
  }

  removeColor = (colorName) => {
    this.setState({
      colors: this.state.colors.filter((color) => color.name !== colorName)
    })
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({colors}) => ({
      colors: arrayMove(colors, oldIndex, newIndex)
    }))
  }

  clearColors = () => {
    this.setState({
      colors: []
    })
  }

  addRandomColor = () => {
    const allColors = this.props.palettes.map((palette) => palette.colors).flat();
    let rand = Math.floor(Math.random() * allColors.length);
    const randomColor = allColors[rand];
    this.setState({ colors: [...this.state.colors, randomColor] })
  }

  render() {
    const { classes, maxColors, palettes } = this.props;
    const { open, currentColor, colors, newColorName } = this.state;
    const paletteIsFull = colors.length >= maxColors;
    return (
      <div className={classes.root}>
        <PaletteFormNav 
          open={open} 
          palettes={palettes} 
          handleSubmit={this.handleSubmit} 
          handleDrawerOpen={this.handleDrawerOpen}
        />
        <Drawer
          className={classes.drawer}
          variant='persistent'
          anchor='left'
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeft />
            </IconButton>
          </div>
          <Divider />
            <div className={classes.container}>
              <Typography variant="h4" gutterBottom>
                Design Your Palette
              </Typography>
            <div className={classes.buttons}>
              <Button 
                className={classes.button}
                variant="contained" 
                color="secondary" 
                onClick={this.clearColors} 
              >
                Clear Palette
              </Button>
              <Button 
                className={classes.button}
                variant="contained" 
                color="primary" 
                disabled={paletteIsFull}
                onClick={this.addRandomColor}
              >
                Random Color
              </Button>
            </div>
            <ColorPickerForm 
              paletteIsFull={paletteIsFull}
              addNewColor={this.addNewColor}
              colors={colors}
            />
          </div>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorList 
            colors={colors} 
            removeColor={this.removeColor}
            axis="xy"
            onSortEnd={this.onSortEnd}
          />
        </main>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(NewPaletteForm);