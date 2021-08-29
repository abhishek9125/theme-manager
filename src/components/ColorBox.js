import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import './ColorBox.css';

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
    const { name, background, id, paletteId, showLink } = this.props;
    const { copied } = this.state;

    const isDarkColor = chroma(background).luminance() <= 0.08;
    const isLightColor = chroma(background).luminance() >= 0.7;

    return (
      <CopyToClipboard text={background} onCopy={this.getCopyOverlay}>
        <div className="ColorBox" style={{ background }}>
          <div className={`copy-overlay ${copied && "show"}`} style={{ background }} />
          <div className={`copy-overlay-message ${copied && "show"}`}>
            <h1>Copied!</h1>
            <p className={`${isLightColor && "dark-text"}`}>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={isDarkColor && "light-text"}>{name}</span>
            </div>
            <button className={`copy-button ${isLightColor && "dark-text"}`}>Copy</button>
          </div>
          { showLink &&
            <Link to={`/palette/${paletteId}/${id}`} omClick={e => e.stopPropagation()}>
              <span className={`see-more ${isLightColor && "dark-text"}`}>More</span>
            </Link>
          }
        </div>
      </CopyToClipboard>
    )
  }
}

export default ColorBox;