import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { withStyles } from "@material-ui/core/styles";
import styles from '../styles/ColorPickerFormStyles';

class ColorPickerForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentColor: "teal",
      newColorName: "",
    }
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('isColorNameUnique', (value) => 
      this.props.colors.every(
        ({name}) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule('isColorUnique', (value) => 
      this.props.colors.every(
        ({color}) => color !== this.state.currentColor
      )
    );
  }

  updateCurrentColor = (newColor) => {
    this.setState({ currentColor: newColor.hex })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = () => {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName
    }
    this.props.addNewColor(newColor);
    this.setState({ newColorName: "" })
  }


  render() {
    const { paletteIsFull, classes } = this.props;
    const { currentColor, newColorName } = this.state;
    return (
      <div>
        <ChromePicker 
          color={currentColor}
          onChangeComplete={this.updateCurrentColor}
          className={classes.picker}
        />
        <ValidatorForm onSubmit={this.handleSubmit} ref='form'>
          <TextValidator 
            className={classes.colorNameInput}
            placeholder="Color Name"
            variant="filled"
            value={newColorName}
            name="newColorName"
            margin="normal"
            onChange={this.handleChange}
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={["This Field is Required.", "Color Name must be Unique.", "Color is Already Taken"]}
          />
          <Button 
            className={classes.addColor}
            variant="contained" 
            color="primary" 
            type="submit"
            disabled={paletteIsFull}
            style={{ backgroundColor: paletteIsFull ? "grey" : currentColor }}
          >
            {paletteIsFull ? "Palette Full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </div>
    )
  }
}

export default withStyles(styles)(ColorPickerForm);