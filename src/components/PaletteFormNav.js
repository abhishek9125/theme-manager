import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { CssBaseline, AppBar, Toolbar, Typography, IconButton, Button } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import PaletteMetaForm from './PaletteMetaForm';

const drawerWidth = 400;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  navBtns: {
    marginRight: "1rem"
  },
  button: {
    margin: "0 0.5rem"
  },
  link: {
    textDecoration: "none"
  }
})

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
              <Menu />
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
          formShowing && <PaletteMetaForm handleSubmit={handleSubmit} palettes={palettes}/>
        }
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);