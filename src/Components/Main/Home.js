import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sound from 'react-sound';

//Navigation Bar
import Nav from './Nav';


export default class Home extends Component {

  constructor(){
    super();

    //the state controls the rain sound effect
    this.state = {
      rain: true
    };

    this.stopRain = this.stopRain.bind(this);
    this.startRain = this.startRain.bind(this);
  }

  //function to stop the rain sound
  stopRain() { 
    this.setState({ rain: false }) 
  }

  //function to start the rain sound
  startRain() { 
    this.setState({ rain: true }) 
  }

  render(){
    return (
      <div>
        <div className="background">

          {/* The Nav component displays the game title */}
          <Nav />

          <div className="button-grid-container">

            {/* Play Button */}
            <div className="button-grid-item">
              <Link to='/play' ><button className="welcome-btn">Play</button></Link>
            </div>

            {/* Instructions Button */}
            <div className="button-grid-item">
              <Link to='/instructions' ><button className="welcome-btn">Instructions</button></Link>
            </div>

            {/* Account Button */}
            <div className="button-grid-item">
              <Link to='/account' ><button className="welcome-btn">Account</button></Link>
            </div>

            {/* Button used to mute the rain sound effect */}
            {
              //if rain is set to true within the state, display the mute button
              this.state.rain && (
                <div className="button-grid-item">
                  <button className="welcome-btn" onClick={this.stopRain}>Mute</button>
                </div>
              )
            }

            {/* Button used to unmute the rain sound effect */}
            { 
              //if rain is set to false within the state, display the unmute button
              !this.state.rain && (
                <div className="button-grid-item">
                  <button className="welcome-btn" onClick={this.startRain}>Unmute</button>
                </div>
              )
            }

            { 
              //if rain is set to true within the state, play the rain sound effect
              this.state.rain && <Sound url={'rain.mp3'} playStatus={Sound.status.PLAYING} onFinishedPlaying={this.stopRain} /> 
            }

          </div>
        </div>
      </div>
    )
  }
}