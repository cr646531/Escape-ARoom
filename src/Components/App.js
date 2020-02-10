import React, { Fragment, Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

//Home screen
import Home from './Main/Home';
import Instructions from './Main/Instructions';
import Markers from './Main/Markers';
import Landing from './Main/Landing';

//Room
import Room from './Gameplay/Room';
import Escaped from './Gameplay/Escaped';

//Utilities
import Clock from './Utilities/Clock';
import Lock from './Utilities/Lock';
import Letter from './Utilities/Letter';

//Used for testing purposes
import TestRoom from './Test/TestRoom';
import TestRain from './Test/TestRain';
import TestUtilities from './Test/TestUtilities';


export default class App extends Component {

  render() {

    return (
      <Router>
        <Fragment>

          {/* Home Page */}
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route path="/instructions" component={Instructions} />
          <Route path="/markers" component={Markers} />

          {/* Room */}
          <Route exact path="/play" component={Room} />
          
          {/* Utilities */}
          <Route exact path="/room/clock" component={Clock} />
          <Route exact path="/room/lock" component={Lock} />
          <Route exact path="/room/letter" component={Letter} />
          <Route exact path="/escaped" component={Escaped} />

          {/* Used for testing purposes */}
          <Route path="/test-utilities" component={TestUtilities} />
          <Route path="/test-room" component={TestRoom} />
          <Route path="/test-rain" component={TestRain} />
          
        </Fragment>
      </Router>
    );
  }
}