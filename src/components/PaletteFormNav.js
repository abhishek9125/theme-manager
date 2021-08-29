import React, { Component } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { CssBaseline, AppBar, Toolbar, Typography, IconButton, Button } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

class PaletteFormNav extends Component {

  constructor(props) {
    super(props);
    this.state = {
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

  render() {

    const { classes, open, handleSubmit, handleDrawerOpen } = this.props;
    const { newPaletteName } = this.state;

    return (
      <div>
        <CssBaseline />
        <AppBar
          position='fixed'
          color="default"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color='inherit'
              aria-label='Open drawer'
              onClick={handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <Menu />
            </IconButton>
            <Typography variant='h6' color='inherit' noWrap>
              Persistent drawer
            </Typography>
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
              <Link to='/'>
                  <Button variant="contained" color="secondary">
                    Go Back
                  </Button>
              </Link>
            </ValidatorForm>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default PaletteFormNav;
