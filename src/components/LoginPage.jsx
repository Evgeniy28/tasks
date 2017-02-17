import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const LoginPage = React.createClass({
  handleLogIn() {
    console.log('Login clicked!');
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
  }
});

export default LoginPage;
