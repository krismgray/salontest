import React, { Component } from 'react';
import { Header, Icon, Container } from 'semantic-ui-react';
import '../Home.css';

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
          <div className='footer1'>
            <Header as='h1'>SALONBELEZA</Header>
            <br />
            <p className='footnote2'>|</p>
            <br />
            <a href="https://www.facebook.com/salon.beleza84045/">
              <Icon color='black' name='facebook square' size='big' />
            </a>
            <a href="https://www.instagram.com/salon.beleza/">
              <Icon color='black' name='instagram' size='big' />
            </a>
            </div>
            <div className='footnote2'>
              <p>©2018 Salon Beleza | All rights reserved | Designed by Kris Gray</p>
            </div>
    </div>
    );
  }
}

export default Footer;
