import React from 'react';
import Sound from 'react-sound';

const opening = () => {
  return alert(`You find a dusty old lockbox. What could be inside? You pull on the lock, but it won't budge. You could figure this out if you give it time!`);
};

export default class Lock extends React.Component{

  constructor(){
    super();

    //The state holds the user submission for the lock combination
    this.state = {
      one: '',
      two: '',
      three: '',
      four: '',
      play: true
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.stopPlayingSound = this.stopPlayingSound.bind(this);
    opening();
  }

  // When something is entered into the form field, check to see if it is a number
  // Store the entry in the state
  onChange(event) {
    const num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    if(!num.includes(event.target.value)) {
      return ( 
        <h1 color="white">Please enter a number</h1> 
      )
    } else {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }

  onSubmit(event){
    event.preventDefault();

    const { one, two, three, four } = this.state;
    var counter = 0;

    //get the user submission
    var submission = "" + one + two + three + four;

    // ------- CREATE SOLUTION -------
    // The combination for the lock is the current time in Paris. 
    // Add five hours to the current time in the U.S. to get the combination
    var hour = new Date().getHours();

    while(counter <= 5){
      hour++;
      counter++;
      if(hour === 24){
        hour = 0;
      }
    }
    hour += '';
    if(hour.length === 1){
      hour = '0' + hour;
    }

    var minute = new Date().getMinutes() + "";
    if(minute.length === 1){
      minute = "0" + minute;
    }

    var solution = hour + minute;

    // check the solution against the user submission
    // if the solution is correct, call the receiveKey() function that was passed down as props
    if(submission === solution){
      this.props.receiveKey();
      return alert(`You pull on the lock, and voilà! You lift the lid and find a rusty old key inside.`);
    } else {
      return alert(`You pick up the dusty old lockbox. You pull on the lock, but it won't budge. You could figure this out if you give it time!`);
    }

  }

  stopPlayingSound(){
    this.setState({
      play: false
    })
  }

  render(){
    return (
      <div>
        <br />
        <br />
        <h1>Enter Code:</h1>

        {/* Combination - Form Submission */}
        <form onSubmit={this.onSubmit} >
          <input type="text" name="one" maxLength="1" onChange={this.onChange}/>
          <br />
          <input type="text" name="two" maxLength="1" onChange={this.onChange}/>
          <br />
          <input type="text" name="three" maxLength="1" onChange={this.onChange}/>
          <br />
          <input type="text" name="four" maxLength="1" onChange={this.onChange}/>
          <br />
          <button>Submit</button>
        </form>
        <br />

        {/* Play the lock.mp3 sound effect */}
        {this.state.play && (
          <Sound
            url={'lock.mp3'}
            playStatus={Sound.status.PLAYING}
            onFinishedPlaying={this.stopPlayingSound}
          />
        )}
      </div>
    )
  }
}

