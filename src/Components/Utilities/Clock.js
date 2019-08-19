import React from 'react';
import Sound from 'react-sound';

export default class Clock extends React.Component{

  constructor(){
    super();

    this.state = {
      time: new Date().toLocaleTimeString(),
      play: true
    };

    this.checkTime = this.checkTime.bind(this);
    this.stopPlayingSound = this.stopPlayingSound.bind(this);

    //updates the time every 1000ms using the checkTime() function
    setInterval(this.checkTime, 1000);
  }

  checkTime(){
    this.setState({ 
      time: new Date().toLocaleTimeString() 
    });
  }

  stopPlayingSound(){
    this.setState({ 
      play: false 
    });
  }

  render(){
  
    return (
      <div>
        <br />
        <br />

        {/* Display the time - updated every 1000ms */}
        <h1 className="time">{this.state.time}</h1>
        <br />

        {/* Play the clock.mp3 sound effect */}
        {
          this.state.play && (
            <Sound
              url={'clock.mp3'}
              playStatus={Sound.status.PLAYING}
              onFinishedPlaying={this.stopPlayingSound}
            />
          )
        }
      </div>
    )
  }
}