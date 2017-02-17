import React from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';


const AboutPage = React.createClass({
  render() {
    return (
      <div className='AboutPage'>
        <Paper
          zDepth={1}
          className='AboutPage__content'
        >
          <h2>React Tasks Application</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</p>
        </Paper>
      </div>
    );
  }
});

export default AboutPage;
