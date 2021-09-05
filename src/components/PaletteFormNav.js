import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { CssBaseline, AppBar, Toolbar, Typography, IconButton, Button } from "@material-ui/core";
import { AddToPhotos } from "@material-ui/icons";
import PaletteMetaForm from './PaletteMetaForm';
import styles from '../styles/PaletteFormNavStyles'

class PaletteFormNav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formShowing: false
    }
  }

  showForm = () => {
    this.setState({ formShowing: true })
  }

  hideForm = () => {
    this.setState({ formShowing: false })
  }

  render() {

    const { classes, open, handleDrawerOpen, handleSubmit, palettes } = this.props;
    const { formShowing } = this.state;

    return (
      <div className={classes.root}>
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
              <AddToPhotos />
            </IconButton>
            <Typography variant='h6' color='inherit' noWrap>
              Create A Palette
            </Typography>
          </Toolbar>
          <div className={classes.navBtns}>
            <Link to='/' className={classes.link}>
              <Button variant="contained" color="secondary" className={classes.button}>
                Go Back
              </Button>
            </Link>
            <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={this.showForm}
              >
                Open Form
            </Button>
          </div>
        </AppBar>
        {
          formShowing && <PaletteMetaForm hideForm={this.hideForm} handleSubmit={handleSubmit} palettes={palettes}/>
        }
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);