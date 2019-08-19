import React from 'react';
import Sound from 'react-sound';

export default class Letter extends React.Component {

  constructor(){
    super();

    this.state = {
      play: true
    };

    this.stopPlayingSound = this.stopPlayingSound.bind(this);
  }

  stopPlayingSound() {
    this.setState({
      play: false
    })
  }

  render() {
    return (
      <div>

        {/* Display letter */}
        <img src="letter.png" />

        {/* Play the 'letter.mp3' sound effect */}
        {
          this.state.play && (
            <Sound
              url={'letter.mp3'}
              playStatus={Sound.status.PLAYING}
              onFinishedPlaying={this.stopPlayingSound}
            />
        )
        }
      </div>
    )
  }

}
