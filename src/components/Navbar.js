import React, { Component } from 'react';
import { MenuItem, Select, Snackbar, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Close } from '@material-ui/icons';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      format: 'hex',
      open: false
    }
  }

  handleFormatChange = (e) => {
    this.setState({ format: e.target.value, open: true });
    this.props.handleChange(e.target.value);
  }

  closeSnackbar = () => {
    this.setState({ open: false })
  }

  render() {
    const { level, changeColorLevel, showingAllColors } = this.props;
    const { format, open } = this.state;
    return (
      <header className="Navbar">
        <div className="logo">
          <Link to="/">Colour Picker</Link>
        </div>
        {showingAllColors && <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider 
              defaultValue={level} 
              min={100} 
              max={900} 
              step={100}
              onAfterChange={changeColorLevel}
              />
          </div>
        </div>
        }
        <div className="select-container">
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value="hex">HEX</MenuItem>
            <MenuItem value="rgb">RGB</MenuItem>
            <MenuItem value="rgba">RGBA</MenuItem>
          </Select>
        </div>
        <Snackbar 
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={open}
          autoHideDuration={2000}
          message={<span id='message-id'>Format Changed!</span>}
          onClose={this.closeSnackbar}
          contentProps={{ "aria-describedby": "message-id" }}
          action={[ 
            <IconButton 
              onClick={this.closeSnackbar} 
              color='inherit' 
              key='close' 
              aria-label='close'
            > 
              <Close />
            </IconButton> ]}
        />
      </header>
    )
  }
}

export default Navbar;