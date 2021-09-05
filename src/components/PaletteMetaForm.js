import React, { Component } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Picker } from 'emoji-mart';
import "emoji-mart/css/emoji-mart.css"

class PaletteMetaForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stage: 'paletteName',
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

  showEmojiPicker = () => {
    this.setState({ stage: "emoji" });
  }

  savePalette = (emoji) => {
    const newPalette = { paletteName: this.state.newPaletteName, emoji: emoji.native };
    this.props.handleSubmit(newPalette);
  }

  render() {

    const { open, newPaletteName,stage } = this.state;
    const { handleSubmit, hideForm } = this.props;

    return (
      <div>
        <Dialog open={stage === 'emoji'} onClose={hideForm}>
          <DialogTitle id='form-dialog-title'>Choose a Emoji</DialogTitle>
          <Picker 
            onSelect={this.savePalette}
            title="Pick a Palette Emoji"
          />
        </Dialog>
        <Dialog
          open={stage === 'paletteName'}
          onClose={hideForm}
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle id='form-dialog-title'>Choose a Palette Name</DialogTitle>
          <ValidatorForm onSubmit={this.showEmojiPicker}>

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
      </div>
    )
  }
}

export default PaletteMetaForm;
