import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavMenu from './NavMenu';
import Home from './Home';
import Stylists from './Stylists';
import Services from './Services';
import Contact from './Contact';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Stylists' component={Stylists} />
            <Route path='/Services' component={Services} />
            <Route path='/Contact' component={Contact} />
            <Route component={NoMatch} />
          </Switch>
      </div>
    );
  }
}

export default App;
