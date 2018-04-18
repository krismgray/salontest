import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavMenu from './NavMenu';
import Home from './Home';
import About from './About';
import Stylists from './Stylists';
import Services from './Services';
import FAQs from './FAQs';
import Contact from './Contact';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/About' component={About} />
            <Route exact path='/Stylists' component={Stylists} />
            <Route exact path='/Services' component={Services} />
            <Route exact path='/FAQs' component={FAQs} />
            <Route exact path='/Contact' component={Contact} />
            <Route component={NoMatch} />
          </Switch>
      </div>
    );
  }
}

export default App;
