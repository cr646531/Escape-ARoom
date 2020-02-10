import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Nav from './Nav';

const GamePlay = () => {
  return (
      <div className="how-to-play-container background">
        <Nav />
        <div className="play-instructions">
          <h1>Intro</h1>
          <p>
            <b style={{"color": "red"}}>Escape ARoom</b> is an augmented reality mobile game in which players solve a series of puzzles using clues presented as computer-generated objects in place of real-world markers.
          </p>

          <h1>Setup</h1>
          <p>
            To turn any room into an escape room,
            <b style={{"color": "red"}}> click the button below, print out the markers, and set them up around the room. </b>
            We recommend keeping at least 3 feet between markers. Once you have set up the markers, point your camera at them to see the objects appear on the screen. Click on the button displayed with the object to interact with them.
            <span>
              <a className="hiro-link" href="/hiro.png"></a>
            </span>
          </p>
          <div className="button-grid-container">
            <div className="button-grid-item">
              <a href="/#/markers" ><button className="welcome-btn">Print Markers</button></a>
            </div>
          </div>
          <br />

          <h1>Gameplay</h1>
          <p>Click the <b style={{"color": "red"}}>Play</b> button to open a window to another (augmented) reality.
          Work with your team to explore the clues and solve each puzzle.
          Your final time will be displayed at the end of the game. Good luck!</p>
          <br />
          <div className="button-grid-container">
            <div className="button-grid-item">
              <Link to='/play' ><button className="welcome-btn">Play</button></Link>
            </div>
            <div className="button-grid-item">
              <Link to='/' ><button className="welcome-btn">Back</button></Link>
            </div>
          </div>
        </div>
      </div>
  )
}

export default GamePlay;
