import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import SessionStore from '../stores/SessionStore';
import SessionActions from '../actions/SessionActions';

function getStateFromFlux() {
  return {
    isLoggedIn: SessionStore.isLoggedIn()
  };
}

const LoginPage = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return getStateFromFlux();
  },

  componentDidMount() {
    SessionStore.addChangeListener(this._onChange);
  },

  componentWillUpdate(nextProps, nextState) {
    if (nextState.isLoggedIn) {
      const { location } = this.props

      if (location.state && location.state.nextPathname) {
        this.context.router.replace(location.state.nextPathname);
      } else {
        this.context.router.replace('/lists');
      }
    }
  },

  componentWillUnmount() {
    SessionStore.removeChangeListener(this._onChange);
  },

  handleLogIn() {
    SessionActions.authorize();
  },

  render() {
    return (
      <div className='LoginPage'>
        <div className='LoginPage__banner'>
          <div className='LoginPage__text'>
            <h1>React Tasks Application</h1>
            <RaisedButton
              className='login-button'
              label="Log in with Google"
              primary={true}
              onClick={this.handleLogIn}
            />
          </div>
        </div>
      </div>
    );
  },

  _onChange() {
    this.setState(getStateFromFlux());
  }
});

export default LoginPage;
