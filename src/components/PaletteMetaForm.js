import React, { Component } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

class PaletteMetaForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      newPaletteName: ""
    }
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => 
      this.props.palettes.every(
        ({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  render() {

    const { open, newPaletteName } = this.state;
    const { handleSubmit, palettes } = this.props;

    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          Open Form
        </Button>
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle id='form-dialog-title'>Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>Hello World</DialogContentText>
            <ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>
              <TextValidator 
                label="Palette Name" 
                name="newPaletteName"
                value={newPaletteName}
                onChange={this.handleChange}
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={["Enter Palette Name", "Palette Name Should be Unique."]}
              />
              <Button 
                type="submit"
                variant="contained" 
                color="primary"
              >
                Save Palette
              </Button>
            </ValidatorForm>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.handleClose}
              color='primary'
            >
              Cancel
            </Button>
            <Button
              onClick={this.handleClose}
              color='primary'
            >
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default PaletteMetaForm;
