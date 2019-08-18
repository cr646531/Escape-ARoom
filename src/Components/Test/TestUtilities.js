import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import Escaped from '../Gameplay/Escaped';

export default class TestUtilities extends Component {
  constructor() {
    super();
    this.state = {
      startTime: moment(),
      // marker_[item] field determine if call-to-action buttons show
      marker_lock: false,
      marker_letter: false,
      marker_clock: false,
      marker_door: false,
      hasKey: false,
      codeAnswer: '1234',
      utilitiesHidden: true
    };
    this.lockClick = this.lockClick.bind(this);
    this.clockClick = this.clockClick.bind(this);
    this.letterClick = this.letterClick.bind(this);
    this.doorClick = this.doorClick.bind(this);
    this.showUtilities = this.showUtilities.bind(this);
    this.getKey = this.getKey.bind(this);
  }

  //Manually display buttons (if you don't want to use the markers to make the prompt appear)
  showUtilities() {
    this.setState({
      marker_lock: true,
      marker_letter: true,
      marker_clock: true,
      marker_door: true,
      utilitiesHidden: false
    })
  }

  getKey() {
    this.setState({
      hasKey: true
    })
  }

  //Testing lock marker
  lockClick() {
    if (!this.state.marker_lock) {

      console.log('lock found');
      this.setState({ marker_lock: true });
      // markerRoot.add(sphere);

      setTimeout(() => {
        console.log('lock removed');
        this.setState({ marker_lock: false });
        // markerRoot.remove(sphere);
      }, 3000);
    }
  }

  //Testing clock marker
  clockClick() {
    if (!this.state.marker_clock) {

      console.log('clock found');
      this.setState({ marker_clock: true });
      // markerRoot.add(sphere);

      setTimeout(() => {
        console.log('clock removed');
        // markerRoot.remove(sphere);
        this.setState({ marker_clock: false });
      }, 3000);
    }
  }

  //Testing letter marker
  letterClick() {
    if (!this.state.marker_letter) {

      console.log('letter found');
      this.setState({ marker_letter: true });
      // markerRoot.add(sphere);

      setTimeout(() => {
        console.log('letter removed');
        // markerRoot.remove(sphere);
        this.setState({ marker_letter: false });
      }, 3000);
    }
  }

  //Testing door marker
  doorClick() {
    if (!this.state.marker_door) {

      console.log('door found');
      this.setState({ marker_door: true });
      // markerRoot.add(sphere);

      if (!this.state.hasKey) {
        setTimeout(() => {
          console.log('door removed');
          // markerRoot.remove(sphere);
          this.setState({
            marker_door: false,
            hasKey: true // NEED TO REMOVE AFTER TESTING
          });
        }, 3000);
      }
    }
  }

  render() {
    const { marker_letter, marker_clock, marker_door, marker_lock, hasKey, startTime, utilitiesHidden } = this.state;

    return (
      <div className="button-grid-container">

        {/* Click on the 'Show Utilities' button if you want to test the utilities without holding up the marker to make the prompts appear */}
        <div className="button-grid-item">
          {marker_clock && <Link to='/room/clock'><button className="welcome-btn">Test Clock</button></Link>}
          {marker_letter && <Link to='/room/letter'><button className="welcome-btn">Test Letter</button></Link>}
          {marker_lock && <Link to='/room/lock'><button className="welcome-btn">Test Lock</button></Link>}
          {marker_door &&  (hasKey ? <Escaped startTime={startTime} endTime={moment()} /> : <div style={{"color": "white"}}>You need a key!</div>)}
          {marker_door && <button className="welcome-btn" onClick={this.getKey}>Open Door</button>}
          {utilitiesHidden && <button className="welcome-btn" onClick={this.showUtilities}>Show Utilities</button>}
        </div>

      </div>
    )
  }
}