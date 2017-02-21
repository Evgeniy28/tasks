import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import './LoginPage.scss';

const LoginPage = React.createClass({
  render() {
    return (
      <div className='LoginPage'>
        <div className='LoginPage__banner'>
          <div className='LoginPage__text'>
            <h1>React Tasks Application</h1>
            <RaisedButton
              className='LoginPage__button'
              label="Log in with Google"
              primary={true}
              onClick={this.props.onLogIn}
            />
          </div>
        </div>
      </div>
    );
  }
});

export default LoginPage;
