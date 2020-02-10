import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Nav from './Nav';

export default class Landing extends Component {

  render(){
    return (
      <div>

        <div className="how-to-play-container background">
            <Nav />
            <div className="play-instructions">
                <h1>Warning</h1>
                <p>
                    There is music on the next page. If you don't wish to hear an 8-bit version of Beethoven's 9th symphnony, turn your volume down. There is a button on the menu that will mute the music. Once the game begins, the music will stop, but there are sound effects throughout the game. The mute button does not apply to the sound effects. We recommend turning your sound back on once the game has started. That being said, we recommend you listen to the 8-bit version of Beethoven's 9th symphony - it's awesome. Thank you!
                </p>
            </div>
        </div>

        <div className="background">
          <div className="button-grid-container">
            {/* Continue Button */}
            <div className="button-grid-item">
              <Link to='/home' ><button className="welcome-btn">Continue</button></Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}