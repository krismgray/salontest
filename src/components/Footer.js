import React, { Component } from 'react';
import { Header, Icon, Container } from 'semantic-ui-react';
import '../Home.css';

class Footer extends Component {
  render() {
    return (
      <div>
          <div className='footer'>
            <a href="https://www.facebook.com/salon.beleza84045/">
              <Icon color='black' name='facebook square' size='huge' />
            </a>
            <a href="https://www.instagram.com/salon.beleza/">
              <Icon color='black' name='instagram' size='huge' />
            </a>
            <div className='footnote2'>
              <p>All Rights Reserved</p>
            </div>
          </div>
    </div>
    );
  }
}

export default Footer;
