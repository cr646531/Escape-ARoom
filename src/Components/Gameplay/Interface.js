import React, { Component } from 'react';
import Sound from 'react-sound';

//Utilities
import Lock from '../Utilities/Lock';
import Clock from '../Utilities/Clock';
import Letter from '../Utilities/Letter';
import Stopwatch from '../Utilities/Stopwatch';
import Inventory from '../Utilities/Inventory';

import Escaped from './Escaped';


export default class Interface extends Component {
  constructor(){
    super();
    this.state = {
      key: false,
      letter: false,
      pick: false,
      open: false,
      showClock: false,
      showLock: false,
      showLetter: false,
      showDoor: false,
      flag: false,
      //--------Sound Effects-------//
      knock: false,
      bang: false,
      squeak: false,
      creak: false,
      snap: false
    };
    this.stopKnock = this.stopKnock.bind(this);
    this.stopBang = this.stopBang.bind(this);
    this.stopSqueak = this.stopSqueak.bind(this);
    this.stopCreak = this.stopCreak.bind(this);
    this.stopSnap = this.stopSnap.bind(this);
    this.receiveKey = this.receiveKey.bind(this);
    this.checkBehind = this.checkBehind.bind(this);
    this.pickLock = this.pickLock.bind(this);
  }

  stopKnock(){ this.setState({ knock: false }) };
  stopBang(){ this.setState({ bang: false }) };
  stopSqueak(){ this.setState({ squeak: false }) };
  stopCreak(){ this.setState({ creak: false }) };
  stopSnap(){ this.setState({ snap: false }) };
  receiveKey(){ this.setState({ key: true, showLock: false }) };
  checkBehind(){ alert('You found an old lockpick'); this.setState({ pick: true, creak: true }); };
  pickLock(){ alert('It broke!'); this.setState({ pick: false, snap: true }); };

  render(){

    const { key, letter, pick, open, showClock, showLock, showLetter, showDoor, knock, bang, squeak, creak, flag, snap } = this.state;

    const { clockProp, lockProp, letterProp, doorProp } = this.props;

    return (
      <div className="button-grid-container">
        <div className="button-grid-item">

          <Stopwatch />

          {/* ----- Buttons ----- */}

          { clockProp && <button className="welcome-btn" onClick={()=> this.setState({ showClock: true })}>Check the time</button> }
          { lockProp && <button className="welcome-btn" onClick={()=> this.setState({ showLock: true })}>Inspect the lock</button> }
          { letterProp && <button className="welcome-btn" onClick={()=> this.setState({ showLetter: true, letter: true })}>Read the letter</button> }
          { doorProp && <button className="welcome-btn" onClick={()=> this.setState({ showDoor: true })}>Inspect the door</button> }

          {/* ----- Components ----- */}

          {/* Clock */}
          { 
            showClock && (
              <div>
                <Clock />
                { !pick && <button className="welcome-btn" onClick={this.checkBehind}>Check behind the clock</button> }
                <button onClick={()=> this.setState({ showClock: false }) } >x</button>
              </div>
            ) 
          }

          {/* Lock */}
          {
            showLock && (
              <div>
                <Lock receiveKey={this.receiveKey}/>
                <button onClick={()=> this.setState({ showLock: false }) } >x</button>
              </div>
            ) 
          }

          {/* Letter */}
          {
            showLetter && (
              <div>
                <Letter />
                <button onClick={()=> this.setState({ showLetter: false }) } >x</button>
              </div>
            )
          }

          {/* Door */}
          {showDoor && (
            <div>
              <br />

              { !flag && <button className="welcome-btn" onClick={()=> { 
                alert('Nobody answered. You could bang louder.');
                this.setState({ knock: true, flag: true }); }
              }>Knock on the door</button> }
              
              { flag && <button className="welcome-btn" onClick={()=> {
                alert('Nobody answered. Oh well. It was worth a try.');
                this.setState({ bang: true }); } 
              }>Bang on the door</button> }

              { pick && <button className="welcome-btn" onClick={ this.pickLock }>Pick</button> }
              { key && <button className="welcome-btn" onClick={()=> this.setState({ open: true }) }>Open the door</button> }

              <button onClick={()=> this.setState({ showDoor: false }) } >x</button>

              <br />
            </div>
          )}

          {/* ----- Sounds ----- */}

          { knock && <Sound url={'knocking.mp3'} playStatus={Sound.status.PLAYING} onFinishedPlaying={this.stopKnock} /> }
          { bang && <Sound url={'banging.mp3'} playStatus={Sound.status.PLAYING} onFinishedPlaying={this.stopBang} /> }
          { squeak && <Sound url={'door.mp3'} playStatus={Sound.status.PLAYING} onFinishedPlaying={this.stopSqueak} /> }
          { creak && <Sound url={'creaking.mp3'} playStatus={Sound.status.PLAYING} onFinishedPlaying={this.stopCreak} /> }
          { snap && <Sound url={'snapping.mp3'} playStatus={Sound.status.PLAYING} onFinishedPlaying={this.stopSnap} /> }

          {/* ----- Finish ----- */}

          {open && <Escaped /> }


          {/* ----- Inventory ----- */}

          <Inventory hasKey={key} hasLetter={letter} hasLockPick={pick} />

        </div>
      </div>

    )
  }
}
