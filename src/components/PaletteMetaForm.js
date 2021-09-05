import React, { Component } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

class PaletteMetaForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: true,
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
    const { handleSubmit, hideForm } = this.props;

    return (
        <Dialog
          open={open}
          onClose={hideForm}
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle id='form-dialog-title'>Choose a Palette Name</DialogTitle>
          <ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>

          <DialogContent>
            <DialogContentText>Please enter a name for your new beautiful palette. Make sure it's unique!</DialogContentText>
              <TextValidator 
                label="Palette Name" 
                name="newPaletteName"
                value={newPaletteName}
                onChange={this.handleChange}
                fullWidth
                margin="normal"
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={["Enter Palette Name", "Palette Name Should be Unique."]}
              />
 
          </DialogContent>
          <DialogActions>
            <Button
              onClick={hideForm}
              color='primary'
            >
              Cancel
            </Button>
            <Button 
                type="submit"
                variant="contained" 
                color="primary"
              >
                Save Palette
            </Button>
          </DialogActions>
          </ValidatorForm>
        </Dialog>
    )
  }
}

export default PaletteMetaForm;
