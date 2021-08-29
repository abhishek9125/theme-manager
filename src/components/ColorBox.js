import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/ColorBoxStyles';

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    }
  }

  getCopyOverlay = () => {
    this.setState({ copied: true}, () => {
      setTimeout(() => this.setState({ copied: false }), 1000)
    });
  }

  render() {
    const { name, background, id, paletteId, showingFullPalette, classes } = this.props;
    const { copied } = this.state;

    return (
      <CopyToClipboard text={background} onCopy={this.getCopyOverlay}>
        <div className={classes.ColorBox} style={{ background }}>
          <div className={`${classes.copyOverlay} ${copied && classes.showOverlay}`} style={{ background }} />
          <div className={`${classes.copyMessage} ${copied && classes.showMessage}`}>
            <h1>Copied!</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div>
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          { showingFullPalette &&
            <Link to={`/palette/${paletteId}/${id}`} omClick={e => e.stopPropagation()}>
              <span className={classes.seeMore}>More</span>
            </Link>
          }
        </div>
      </CopyToClipboard>
    )
  }
}

export default withStyles(styles)(ColorBox);