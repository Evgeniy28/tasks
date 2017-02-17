import React from 'react';
import { Link } from 'react-router';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const App = React.createClass({
  render() {
    return (
      <div className='App'>
        {this.props.children}
      </div>
    );
  }
});

export default App;
