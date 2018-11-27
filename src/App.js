import React, { Component } from 'react';
import * as UI from './components/UI';

import Menu from './components/Menu/index';
import Home from './views/Home';

class App extends Component {
  
  render() {
    return (
      <UI.SiteWrapper>
        <Menu />
        <Home />
      </UI.SiteWrapper>
    );
  }
}

export default App;
