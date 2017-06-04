import React, { Component } from 'react';
import { Animated } from 'react-web-animation';
import {DEFAULT_ANIMATION} from '../../lib/index'
export default class AnimateCss extends Component {
  constructor() {
    super();

    this.animations = Object.keys(DEFAULT_ANIMATION);

    this.state = {
      selected: 'bounce',
      playState: 'running',
      selections: this.animations
    };

    this.onBoxClick = this.onBoxClick.bind(this);
    this.onChangeAnimation = this.onChangeAnimation.bind(this);
  }

  getStyles() {
    return {
      body: {
        background: '#b4d8d9',
        margin: '0px',
        color: 'white',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      },

      controls: {
        marginTop: '50px',
        textAlign: 'center'
      },

      box: {
        background: '#363ca1',
        borderRadius: '4px',
        boxShadow: '0 1px 2px 1px rgba(0, 0, 0, 0.25)',
        width: '25vw',
        height: '25vw',
        minWidth: '160px',
        minHeight: '160px',
        willChange: 'transform',
        cursor: 'pointer'
      },
      sourceLink: {
        textDecoration: 'none',
        padding: '6px',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        backgroundColor: 'white',
        color: 'black',
        position: 'absolute',
        top: 0,
        right: 0
      }
    };
  }

  onBoxClick() {
    // TODO this feels cumbersome. Need a better way to control the player
    this.setState({ playState: 'running' });
  }

  onChangeAnimation(e) {
    this.setState({ selected: e.target.value });
  }

  render() {
    const { body, sourceLink, box, controls } = this.getStyles();
    const { keyframes, timing } = DEFAULT_ANIMATION[this.state.selected]();
    const { selections, playState, selected } = this.state;

    return(
    <div style={body} ref="container">
      <div id="boxContainer">
        <Animated.div keyframes={keyframes}
                      timing={timing}
                      playState={playState}
                      style={box}
                      id="box"
                      onClick={this.onBoxClick}/>
      </div>
      <div id="controls" style={controls}>
        <select id="option" onChange={this.onChangeAnimation} value={selected}>
          {selections.map((o, idx) => <option key={idx}>{o}</option>)}
        </select>
      </div>
      <a style={sourceLink}
         href='https://github.com/RinconStrategies/react-web-animation/blob/master/demo/src/animate_css.js'>
        View Source
      </a>
    </div>
  )
  }
}

/**
 * Animations ported from  http://web-animations.github.io/web-animations-demos/#animate_css which were ported from the
 * popular Animate.css library
 */
