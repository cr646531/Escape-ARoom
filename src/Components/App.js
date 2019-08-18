import React, { Fragment, Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

//Home screen
import Home from './Main/Home';
import Instructions from './Main/Instructions';

//Room
import Room from './Gameplay/Room';
import Escaped from './Gameplay/Escaped';

//Utilities
import Clock from './Utilities/Clock';
import Lock from './Utilities/Lock';
import Envelope from './Utilities/Envelope';
import Letter from './Utilities/Letter';

//Account creation
import Account from './User/Account';
import Login from './User/Login';
import Signup from './User/Signup';
import { exchangeTokenForAuth, getTeams } from '../store';

//Used for testing purposes
import TestRoom from './Test/TestRoom';
import TestRain from './Test/TestRain';
import TestUtilities from './Test/TestUtilities';


class App extends Component {
  componentDidMount() {
    this.props.init();
  }

  render() {
    const { auth } = this.props;

    if(!auth.id) {
      return (
        <Router>
          <div className="background">
            <Switch>
              <Route path="/signup" render={props => <Signup props={props} />} />
              <Route path="/" render={props => <Login props={props} />} />
            </Switch>
          </div>
        </Router>
      );
    }

    return (
      <Router>
        <Fragment>

          {/* Home Page */}
          <Route exact path="/" component={Home} />
          <Route path="/instructions" component={Instructions} />

          {/* Room */}
          <Route exact path="/play" component={Room} />

          {/* Account creation */}
          <Route path="/account" component={Account} />
          <Route path="/signup" render={props => <Signup props={props} />} />
          
          {/* Utilities */}
          <Route exact path="/room/clock" component={Clock} />
          <Route exact path="/room/lock" component={Lock} />
          <Route exact path="/room/envelope" component={Envelope} />
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

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  init: () => {
    dispatch(exchangeTokenForAuth());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
